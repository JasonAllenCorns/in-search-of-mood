import { auth } from "@/auth";
import { SpotifySession } from "types/types";

export const checkAccessIsExpired = async (expiresAt?: string | number): Promise<boolean> => {
  // if the expiration is not set or not readable, assume expiration by setting to epoch
  // if the expiration IS set, then it is standard epoch time / 1000. Must re-adjust time comparisons
  try {

    let expTime = expiresAt ? parseInt(expiresAt.toString(), 10) : (new Date(0)).getTime();
    expTime = expTime < 1000000000000 ? expTime * 1000 : expTime;
    const nowTime = new Date().getTime();

    // simple calculation: token is expired if 'now' is strictly greater than exp time
    return nowTime > expTime;
  } catch (e) {
    console.error('Error encountered while comparing Access Token expiration with current time. Caught exception and assumed expired. ErrCode: 99.')
  }
  return true;
}

type TokenSet = {
  access_token: string,
  refresh_token: string,
  expires_at: string | number,
}
type ProcessToken = {
  access_token: string,
  refresh_token: string,
  expires_at: string | number,
  ok: boolean,
  message?: string,
}
export const refreshTheAccessToken = async ({ access_token, refresh_token, expires_at }: { access_token: string, refresh_token: string, expires_at: string | number }): Promise<TokenSet> => {
  try {
    /**
     * request must include refresh token and client ID
     */
    if (access_token && refresh_token && expires_at) {
      /**
       * Per https://developer.spotify.com/documentation/web-api/tutorials/refreshing-tokens,
       * In order to refresh the access token, system will need:
       *   - endpoint URL
       *   - request requestOptions
       *     - method: POST
       *     - headers:
       *       - 'Content-Type': 'application/x-www-form-urlencoded'
       *     - body (as URLSearchParams)
       *       - grant_type: 'refresh_token',
       *       - refresh_token: refresh_token,
       *       - client_id: clientId
      */
      // TODO: confirm proper URL structure of tokenRefreshUrl
      const refreshTokenUrl: string = process?.env?.SPOTIFY_TOKEN_ENDPOINT || "";
      const headers = new Headers();
      headers.append("Content-Type", "application/x-www-form-urlencoded");
      headers.append('Authorization', `Basic ${(process?.env?.BASE64_AUTHORIZATION || "")}`);
      const formEncodedParams = new URLSearchParams();
      formEncodedParams.append("grant_type", "refresh_token");
      formEncodedParams.append("refresh_token", refresh_token);
      formEncodedParams.append("client_id", process?.env?.SPOTIFY_CLIENT_ID || "");
      const requestOptions = {
        method: 'POST',
        headers,
        body: formEncodedParams,
      };

      const res = await fetch(refreshTokenUrl, requestOptions);
      /**
       * per https://developer.spotify.com/documentation/web-api/tutorials/refreshing-tokens, 
       * response looks like:
       * {
       *   access_token: 'BQBLuPRYBQ...BP8stIv5xr-Iwaf4l8eg',
       *   token_type: 'Bearer',
       *   expires_in: 3600,
       *   ~~refresh_token: 'AQAQfyEFmJJuCvAFh...cG_m-2KTgNDaDMQqjrOa3'~~, NOTE: refresh token is not provided in response
       *   scope: 'user-read-email user-read-private'
       * }
       */

      if (res.ok) {
        const response = await res.json();
        const nowTime = (Math.floor((new Date().getTime()) / 1000)) * 1000; // coerce into millisecond-less version
        const accessTokenNowExpiresAt = nowTime + parseInt(response?.expires_in || 1) * 1000; // 3600 seconds = 3600*1000 ms

        const newTokenSet: TokenSet = {
          refresh_token: response.refresh_token,
          access_token: response.access_token,
          expires_at: accessTokenNowExpiresAt
        };
        return newTokenSet;
      }
      throw new Error(`Refresh token exists but response was invalid, so returning original token. Potentially more details in response. Status: ${res?.status} (${res?.statusText || "unknown status text"}). ErrCode: 105`);
    }
    throw new Error('Missing one or more parameters to refresh the access token. ErrCode: 77')
  } catch (error) {
    console.error(`${error?.message || "Unknown error message while refreshing access token"}`);
  }

  //failed to here. reflect.
  return {
    access_token,
    refresh_token,
    expires_at,
  }
};

export const processAccessToken = async (session: SpotifySession): Promise<ProcessToken> => {
  const authResp = await auth();
  /**
   * As a process function, 'processAccessToken' is not pure, by design.
   * Given a session, this function will:
   *  1. Confirm session shape
   *  2. check access token expiry
   *  3. refresh access token if expired
   *  4. return success object
   *  
   * Otherwise return error object
   *  
   *  Return value: 
   *  {
   *     access_token: "" | session.access_token | refreshed token,
   *     ok: false unless access token is not expired or unless access token can be refreshed
   *     message: error message only; null for success
   *  }
   */
  try {
    if (session && session.user && session.user.access_token && session.user.refresh_token && session.user.expires_at) {
      const { access_token, refresh_token, expires_at } = session.user;
      const accessIsExpired = await checkAccessIsExpired(expires_at);


      if (accessIsExpired) {
        const { access_token: updatedAccessToken, refresh_token: updatedRefreshToken, expires_at: accessTokenNowExpiresAt } = await refreshTheAccessToken({ access_token, refresh_token, expires_at });

        // TODO: update session values


        return {
          access_token: updatedAccessToken,
          refresh_token: updatedRefreshToken,
          expires_at: accessTokenNowExpiresAt,
          ok: true,
        }
      }
      return {
        access_token: session?.user?.access_token,
        refresh_token: session?.user?.refresh_token,
        expires_at: session?.user?.expires_at,
        ok: true
      }
    }
    throw new Error(`Session is invalid or tokens are missing. Check Session state (Total properties: ${(Object.keys(session || {}).length)}), access_token (Length: ${(session?.user?.access_token || "").length}). ErrCode: 83.`);
  } catch (e) {
    console.error(e);
    return {
      access_token: "",
      refresh_token: "",
      expires_at: "",
      ok: false,
      message: e.message,
    };
  }
}
