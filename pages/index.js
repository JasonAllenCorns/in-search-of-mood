
import React, { useEffect,useState } from "react";
// import Router from "next/router"
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import { signIn } from "next-auth/react"

import styles from "@/styles/pages/Visitor.module.css"

export default function Home(props) {
  const { callbackUrl } = props;
  const handleClick = () => {
    console.log("a click was handled");
    return signIn("spotify", { callbackUrl });
  }
  // import { useState, useEffect } from "react"
  // const [content, setContent] = useState()

  return (
    <>
      {/* <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              In Search of Mood
            </Typography>
            <Button
              color="inherit"
              onClick={handleClick}
            >Sign in</Button>
          </Toolbar>
        </AppBar>
      </Box> */}
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
        <Paper
          className={`${styles.jumboTron} ${styles.passThrough}`}
          elevation={2}
        >
          <h4> STUFF </h4>
          <Button
            color="inherit"
            variant="contained"
            className={styles.providerLogin}
            onClick={handleClick}
          >Sign in with <img src="/media/Spotify_Logo_CMYK_White.png" /></Button>
        </Paper>
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