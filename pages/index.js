
import React, { useEffect,useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import { signIn } from "next-auth/react";

import styles from "@/styles/pages/Visitor.module.css";

export default function Home(props) {
  const { callbackUrl } = props;
  const handleClick = () => {
    console.log("a click was handled");
    signIn("spotify", { callbackUrl });
  }

  return (
    <>
      <div className={styles.heroBlock}>
        <Card
          className={styles.videoTron}
        >
          <CardMedia
            className={styles.heroMedia}
            component="video"
            image="/media/InSearchOfMood.mp4"
            title="sadflij"
            playsInline
            autoPlay
            muted
            loop
          />
        </Card>
        <Box
          className={`${styles.jumboTron} ${styles.passThrough}`}
          elevation={2}
          sx={{mx: 'auto', width: 220}}
        >
          <Button
            color="inherit"
            variant="contained"
            className={styles.providerLogin}
            onClick={handleClick}
          >Sign in with <img src="/media/spotify_logo.png" /></Button>
        </Box>
      </div>
    </>
  )
}


// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      props: {
        callbackUrl: process.env.SPOTIFY_REDIRECT_CB_URI
      },
    }
  }
  return {
    redirect: {
      destination: "/app",
      permanent: false
    }
  }
}