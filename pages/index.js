
import React, { useEffect,useState } from "react";
import Router from 'next/router'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]'
import { signIn } from 'next-auth/react'

export default function Home() {

  const handleClick = () => {
    console.log('a click was handled');
    return signIn();
  }
  // import { useState, useEffect } from "react"
  // const [content, setContent] = useState()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button onClick={handleClick}>Sign in</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}


// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      props: {
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