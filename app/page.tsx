import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import Link from "next/link";
import type { Metadata } from "next";
import GlobalHeader from "./components/GlobalHeader/GlobalHeader";
import { Box, Card, Container, Flex } from "@radix-ui/themes";
import { SpotifySession } from "types/types";
import StaticPanel from "./components/Content/Sidebar/StaticPanel";
import SearchContainerPanel from "./components/Content/SearchContainer/SearchContainerPanel";

// component rendering

export async function generateMetadata(): Promise<Metadata> {
  const session = await getServerSession(authOptions);
  return {
    title: session?.user ? "Logged in view" : "Logged out view",
  };
}

export default async function Home() {
  const session: SpotifySession | null | undefined = await getServerSession(authOptions);
  if (session) {
    const { user, token } = session;
    return (
      <Container>
        <Flex
          direction="column"
          gap="3"
        >
          <GlobalHeader token={token} user={user} />
          <Flex
            gap="6"
            direction="row"
          >
            <Box grow="1">
              <SearchContainerPanel />
            </Box>
            <Box>
              <StaticPanel />
            </Box>
          </Flex>
        </Flex>
      </Container>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-20">
      <Link href="/api/auth/signin">Sign in</Link>
    </div>
  );
}
