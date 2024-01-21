"use client";

export default function LoginButton({ handleLogin }: { handleLogin: () => Promise<void> }) {
  return (
    <button
      className={`flex px-12 py-2 text-lg tracking-widest uppercase rounded-full focus:outline-none bg-primary hover:bg-opacity-80`}
      onClick={() => handleLogin()}
    >
      Login
    </button>
  );
}
