// import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';
import { signIn } from 'next-auth/react';

import styles from '@/styles/pages/Visitor.module.css';
import Image from 'next/image';

export default function Home(props) {
  const { callbackUrl } = props;
  const handleClick = () => {
    console.log('a click was handled');
    signIn('spotify', { callbackUrl });
  };

  return (
    <>
      <div className={styles.heroBlock}>
        <Card className={styles.videoTron}>
          <CardMedia className={styles.heroMedia} component="video" image="/media/InSearchOfMood.mp4" title="sadflij" playsInline autoPlay muted loop />
        </Card>
        <Box className={`${styles.jumboTron} ${styles.passThrough}`} elevation={2} sx={{ mx: 'auto', width: 220 }}>
          <Button color="inherit" variant="contained" className={styles.providerLogin} onClick={handleClick}>
            Sign in with <Image width={80} height={24} src="/media/spotify_logo.png" alt="Spotify radiant sound logo and branded name." />
          </Button>
        </Box>
      </div>
    </>
  );
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  // NOTE: as of Feb, '23, the next-auth middelware does not allow _authenticated_ redirect
  // While the unauthenticated user will get bounced to the signin page, identified in configs OR
  // next-auth defaults, the auth'd user will still get access to this, the 'signin' page.
  // Options are to use an auth'd view switcher or duplicate the redirect and session logic, here.
  // NOTE, 2: "Here" is a better handler than a client-side "useRouter().push('/dashboard')" because
  // this SSR redirect won't give a flash of content.
  //
  // Here's plan B:

  if (!session) {
    return {
      props: {
        callbackUrl: process.env.SPOTIFY_REDIRECT_CB_URI,
      },
    };
  }
  return {
    redirect: {
      destination: '/dashboard',
      permanent: false,
    },
  };
}
