import React from 'react';
import Layout from '@/components/app_layout';
import UserProfile from '@/components/user_profile';
import Paper from '@mui/material/Paper';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Switch from '@mui/material/Switch';
import { useSession} from 'next-auth/react'

import { getServerSession } from 'next-auth/next';

export default function UserHome(props) {
  const { data: session } = useSession()
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <>
      <UserProfile user={session?.user} />


      <div className='container'>
        <Paper elevation={2}>
          <div>
            <p>Yes hello, { session?.user?.id || 'missed'}</p>
            <p>Enjoy your { session?.accessToken || 'missed' } until { session?.expires || '-1' }</p>
          </div>
          <div>
            <span>With default Theme:</span>
          </div>
          <Switch {...label} defaultChecked />
          <Switch {...label} />
          <Switch {...label} disabled defaultChecked />
        </Paper>
      </div>
    </>
  )
}


// Export the templating of this route and its descendants, attached to the route and page itself

UserHome.getLayout = function (page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions)

  console.log('(jason.corns) --------------------------------------- start group: redirect callback');
  console.log('(jason.corns) logged details from ~/Sites/in-search-of-mood/pages/app/index.js');
  console.log("(jason.corns) context.req.query", context.req.query);
  console.log('(jason.corns) ----------------------------------------- end group: redirect callback');

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const accessToken = session.accessToken;
  const refreshToken = session.refreshToken;

  // const auth_code = await fetch(
  //   'https://accounts.spotify.com/api/token',
  //   {
  //     method: 'POST',
  //     body:
  //       // form-encoded body
  //       // application/x-www-form-urlencoded
  //       new URLSearchParams({
  //         grant_type: "authorization_code",
  //         code: accessToken,
  //         redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
  //       }),
  //     headers: {
  //       Authorization: `Basic ${process.env.BASE64_AUTHORIZATION}`,
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //   }
  // )

  // const me = await fetch(
  //   'https://api.spotify.com/v1/me',
  //   {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authoriazation': `Bearer: ${auth_code}`
  //     }
  //   }
  // )

  return {
    props: {
      session: session
    },
  }
}
