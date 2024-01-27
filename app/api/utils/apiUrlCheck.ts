const checkPlaylistUrlMatch = (fetchUrl?:string): string => {

  let offset:string = "0";
  let limit:string = "20";

  if (fetchUrl) {
    try {
      const urlConstruct = new URL(fetchUrl);
      const params = urlConstruct.searchParams;

      offset = Math.max(Math.min(parseInt(params.get('offset') || "100000", 10), 100000), 0).toString();
      limit = Math.max(Math.min(parseInt(params.get('limit') || "50", 10), 50), 0).toString();
      
    } catch (e) {
      console.log(e);
    }
  }
  //swapped userID for 'me' primitive. No need for ID and no way to default the value
    console.log('(jason.corns) with URL', checkPlaylistUrlMatch("https://api.spotify.com/v1/users/1251433830/playlists?offset=0&limit=20"));
    console.log('(jason.corns) with bad params', checkPlaylistUrlMatch("https://api.spotify.com/v1/users/1251433830/playlists?offset=140000&limit=75"));
    console.log('(jason.corns) with URL no limit', checkPlaylistUrlMatch("https://api.spotify.com/v1/users/1251433830/playlists?offset=0"));
    console.log('(jason.corns) without URL', checkPlaylistUrlMatch());
  return `https://api.spotify.com/v1/users/me/playlists?offset=${offset}&limit=${limit}`; 
}