import { useRouter } from 'next/router';
// import Link from 'next/link';

export default function ArtistPage() {
  const router = useRouter();
  const id = router.query.id;
  const artistName = router.query.artistName;

  return (
    <>
      <h1>Artist Name: {artistName}</h1>
      <h2>Artist ID: {id}</h2>
    </>
  );
}
