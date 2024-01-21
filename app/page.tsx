import { getServerSession } from "next-auth/next";
import { authOptions } from "@/api/auth/[...nextauth]/authOptions";
import Link from "next/link";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const session = await getServerSession(authOptions);
  return {
    title: session?.user ? "Logged in view" : "Logged out view"
  }
}

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <main className="flex flex-col py-8 px-4">
        <h1 className="text-xl font-semibold text-gray-900 leading-7">
          Protected page
        </h1>
        <p className="mt-2 text-lg text-gray-700">
          Here you can see content below only if you are signed in.
        </p>
        <div className="mt-4">
          {session && (
            <p className="text-green-800 text-lg tracking-tight">
              You are seeing content that is protected.
            </p>
          )}
        </div>
      </main>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-20">
      <Link href="/api/auth/signin">Sign in</Link>
    </div>
  );
}
