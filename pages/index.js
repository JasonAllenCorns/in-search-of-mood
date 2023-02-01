import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import { useSession, signIn, signOut } from "next-auth/react"
import Layout from '@/components/layout'
import Image from 'next/image'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {

  console.log('(jason.corns) --------------------------------------- start group: context');
  console.log('(jason.corns) logged details from ~/Sites/in-search-of-mood/pages/index.js');
  console.log("(jason.corns) context.req", context.req);
  console.log('(jason.corns) ----------------------------------------- end group: context');
  return {
    props: {
      session: await getServerSession(context.req, context.res, authOptions),
    },
  }
}