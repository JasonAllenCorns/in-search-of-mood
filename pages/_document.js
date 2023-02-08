import Document, { Html, Head, Main, NextScript } from "next/document";
// import createEmotionServer from "@emotion/server/create-instance";
// import createEmotionCache from "@/styles/style_utils/EmotionCache"

export default class MyDocument extends Document {
 render() {
   return (
     <Html lang="en">
       <Head>
         {/* {this.props.emotionStyleTags} */}
       </Head>
       <body>
         <Main />
         <NextScript />
       </body>
     </Html>
   );
 }
}
