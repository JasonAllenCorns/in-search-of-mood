import { getServerSession } from "next-auth/next"
import { authOptions } from './api/auth/[...nextauth]'
import { useSession, signIn } from "next-auth/react"
import VisitorView from "@/components/visitor_view"
import UserView from "@/components/user_view"
// import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const handleClick = () => {
    console.log('a click was handled');
    return signIn();
  }
  const { data: session } = useSession()
  // import { useState, useEffect } from "react"
  // const [content, setContent] = useState()

  if (!session) {
    return (
      <VisitorView
        loginAction={handleClick}
      />
    )
  }

  return (
    <UserView
      session={session}
    />
  )
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions)
  return {
    props: {
      session
    },
  }
}