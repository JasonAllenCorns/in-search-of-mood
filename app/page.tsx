import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@radix-ui/themes";

// component rendering

export async function generateMetadata(): Promise<Metadata> {
  const session = await getServerSession(authOptions);
  return {
    title: session?.user ? "Logged in view" : "Logged out view",
  };
}

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <Container>
        
      </Container>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-20">
      <Link href="/api/auth/signin">Sign in</Link>
    </div>
  );
}
