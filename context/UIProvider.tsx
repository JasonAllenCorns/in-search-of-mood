// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import RecommendationsProvider from "context/RecommendationsProvider";
import { useRouter } from 'next/router';

export default function Providers({children}: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
    <RecommendationsProvider>
      {children}

      </RecommendationsProvider>
    </NextUIProvider>
  )
}