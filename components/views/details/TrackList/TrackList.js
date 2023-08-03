const TrackList = (props) => {
  const { artistId } = props;
  const artistTopTracks = getTrackList('7Ey4PD4MYsKc5I2dolUwbH'); // aerosmith aid

  return (
    <>
      <div>
        <h3>{artistId}</h3>
        <ul>
          {artistTopTracks?.map &&
            artistTopTracks?.map((itm, idx) => {
              return (
                <li key={idx.toString()}>
                  #{idx + 1}: {itm?.name}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

async function getTrackList(artistId) {
  var SpotifyWebApi = require('spotify-web-api-node');
  // const headerInstance = headers();
  // const authorization = headerInstance.get('authorization');
  const spotifyApi = new SpotifyWebApi();

  const { tracks: artistTopTracks } = await spotifyApi
    .getArtistTopTracks(artistId, 'US')
    .then(
      (data) => {
        return data.body;
      },
      (err) => {
        console.log(
          'Failed to fetch Artist Top Tracks: ',
          JSON.stringify(err || {})
        );
        return { items: [], total: 0 };
      }
    );

  return artistTopTracks;
  // await fetch(
  //   'https://api.spotify.com/v1/artists/7Ey4PD4MYsKc5I2dolUwbH/top-tracks'
  // );
}

export default TrackList;
