import { signIn } from "next-auth/react";
import Image from "next/image";
import LoginButton from "@/components/login/loginButton";

export const metadata = {
  title: 'Log in with Spotify'
}

export default function Login() {
  async function handleLogin() {
    'use server';
    signIn("spotify");
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-20">
      <Image
        src={`/images/spotify_logo.png`}
        alt="spotify logo"
        style={{objectFit: "contain"}}
        width={320}
        height={96}
      />
      <LoginButton handleLogin={handleLogin} />
    </div>
  );
}
