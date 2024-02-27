import { SessionToken, SpotifySession } from "types/types";

export const checkAccessIsExpired = async (expiresAt?: string | number): Promise<boolean> => {
  // if the expiration is not set or not readable, assume expiration by setting to epoch
  // if the expiration IS set, then it is standard epoch time / 1000. Must re-adjust time comparisons
  try {
    const expTime = expiresAt ? parseInt(expiresAt.toString(), 10) * 1000 : (new Date(0)).getTime();
    const nowTime = new Date().getTime();

    // simple calculation: token is expired if 'now' is strictly greater than exp time
    return nowTime > expTime;
  } catch (e) {
    console.error('Error encountered while comparing Access Token expiration with current time. Caught exception and assumed expired. ErrCode: 99.')
  }
  return true;
}

type TokenSet = {
  accessToken: string,
  refreshToken: string,
  accessTokenExpiresAt: string | number,
}
export const refreshTheAccessToken = async ({ accessToken, refreshToken, accessTokenExpiresAt }: { accessToken: string, refreshToken: string, accessTokenExpiresAt: string | number }): Promise<TokenSet> => {
  try {
    /**
     * request must include refresh token and client ID
     */
    if (accessToken && refreshToken && accessTokenExpiresAt) {
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
       *       - refresh_token: refreshToken,
       *       - client_id: clientId
      */
      // TODO: confirm proper URL structure of tokenRefreshUrl
      const refreshTokenUrl: string = process?.env?.SPOTIFY_TOKEN_ENDPOINT || "";
      const headers = new Headers();
      headers.append("Content-Type", "application/x-www-form-urlencoded");
      headers.append('Authorization', `Basic ${(process?.env?.BASE64_AUTHORIZATION || "")}`);
      const formEncodedParams = new URLSearchParams();
      formEncodedParams.append("grant_type", "refresh_token");
      formEncodedParams.append("refresh_token", refreshToken);
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
          refreshToken,
          accessToken: response.access_token,
          accessTokenExpiresAt: accessTokenNowExpiresAt
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
    accessToken,
    refreshToken,
    accessTokenExpiresAt,
  }
};

type ProcessToken = {
  accessToken: string,
  ok: boolean,
  message?: string,
}
export const processAccessToken = async (session: SpotifySession): Promise<ProcessToken> => {
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
   *     accessToken: "" | session.accessToken | refreshed token,
   *     ok: false unless access token is not expired or unless access token can be refreshed
   *     message: error message only; null for success
   *  }
   */
  try {
    if (session && session.accessToken && session.refreshToken && session.accessTokenExpiresAt) {
      const { accessToken, refreshToken, accessTokenExpiresAt } = session;
      const accessIsExpired = await checkAccessIsExpired(session.accessTokenExpiresAt);

      if (accessIsExpired) {
        const { accessToken: updatedAccessToken } = await refreshTheAccessToken({ accessToken, refreshToken, accessTokenExpiresAt });
        return {
          accessToken: updatedAccessToken,
          ok: true,
        }
      }
      return {
        accessToken: session.accessToken,
        ok: true
      }
    }
    throw new Error(`Session is invalid or tokens are missing. Check Session state (Total properties: ${(Object.keys(session || {}).length)}), accessToken (Length: ${(session?.user?.accessToken || "").length}). ErrCode: 83.`);
  } catch (e) {
    console.error(`${e}. ErrCode: 112.`);
    return {
      accessToken: "",
      ok: false,
      message: e.message,
    };
  }
}


export const refreshJot = async (token: SessionToken): Promise<SessionToken> => {
  try {
    /**
     * request must include refresh token and client ID
     */
    if (token) {
      const { refreshToken } = token;
      if (refreshToken) {
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
         *       - refresh_token: refreshToken,
         *       - client_id: clientId
        */
        // TODO: confirm proper URL structure of tokenRefreshUrl
        const refreshTokenUrl: string = process?.env?.SPOTIFY_TOKEN_ENDPOINT || "";
        const headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers.append('Authorization', `Basic ${(process?.env?.BASE64_AUTHORIZATION || "")}`);
        const formEncodedParams = new URLSearchParams();
        formEncodedParams.append("grant_type", "refresh_token");
        formEncodedParams.append("refresh_token", refreshToken);
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
          const accessTokenExpiresAt = nowTime + parseInt(response?.expires_in || 1) * 1000; // 3600 seconds = 3600*1000 ms
          const iat = nowTime;

          const refreshedJot = { ...token, iat, accessToken: response.access_token, refreshToken, accessTokenExpiresAt };
          return refreshedJot;
        }
        throw new Error(`Refresh token exists but response was invalid, so returning original token. Potentially more details in response. Status: ${res?.status} (${res?.statusText || "unknown status text"}). ErrCode: 179.`);
      }
      throw new Error('JWT does not contain Refresh Token information. Check JWT structure and correct. ErroCode: 148.');
    }
    throw new Error('Missing one or more parameters to refresh the access token. ErrCode: 151.')
  } catch (error) {
    console.error(`${error?.message || "Unknown error message while refreshing access token"}.`);
  }
  return token;
}