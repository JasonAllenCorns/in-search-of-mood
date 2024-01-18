import NextAuth, { Profile as DefaultProfile } from "next-auth"

declare module "next-auth" {
  interface Profile {
    country: string 
    & DefaultProfile
  }
}