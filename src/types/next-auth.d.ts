import NextAuth, { Profile as DefaultProfile } from "next-auth"

declare module "next-auth" {
  interface Profile {
    country: string 
    & DefaultProfile
  }
  // interface ProfileImage {
  //   url: string,
  //   height: number,
  //   width: number
  // }
  // interface Profile {
  //   id: string,
  //   "display_name": string,
  //   "external_urls": {
  //     spotify: string
  //   },
  //   followers?: {
  //     total: number
  //   },
  //   href: string,
  //   images: ProfileImage[],
  //   type: string,
  //   uri: string,
  //   country: string
  // }
}