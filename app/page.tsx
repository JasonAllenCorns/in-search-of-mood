import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import Link from "next/link";
import type { Metadata } from "next";
import GlobalHeader from "./components/GlobalHeader/GlobalHeader";
import { SpotifySession } from "types/types";
import StaticPanel from "./components/Content/Sidebar/StaticPanel";
import SearchContainerPanel from "./components/Content/SearchContainer/SearchContainerPanel";
import { Divider } from "@nextui-org/react";

// component rendering

export async function generateMetadata(): Promise<Metadata> {
  const session = await getServerSession(authOptions);
  return {
    title: session?.user ? "Logged in view" : "Logged out view",
  };
}

export default async function Home() {
  const session: SpotifySession | null | undefined = await getServerSession(
    authOptions
  );
  if (session) {
    const { user, token } = session;
    return (
      <div className="container w-screen mx-auto z-50 relative">
        <div
          className="flex flex-col basis-full gap-y-3"
        >
          <GlobalHeader
            token={token}
            user={user}
          />

          <Divider className="my-6" />
          <div
            className="flex flex-row justify-center"
          >
            <div className="flex flex-row max-w-7xl w-full h-auto px-6 gap-6">
              <div className="grow">
                <SearchContainerPanel />
              </div>
              <div className="grow-0">
                <StaticPanel />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-20">
      <Link href="/api/auth/signin">Sign in</Link>
    </div>
  );
}
