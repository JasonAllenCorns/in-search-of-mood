# In Search of Mood: A Spotify® App

## Purpose

### Pragma
_In Search of Mood_ is to be a local project that brings together coding practices and daily Spotify usage. The idea originally came from building the playlist, _The 112_, and should still fit the purpose of finding tracks that match a BPM and also fit a Genre, Mood, Feel, or Type. [Spotify does not include BPM in the in-app filtering](https://community.spotify.com/t5/Desktop-Windows/Filter-songs-within-a-playlist-by-bpm/td-p/4714703), which means some [set of Tracks](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-several-tracks) must be locally filtered by tempo, based on response from [Tracks' audio features](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-several-audio-features).

### Practice
The [Spotify Web API](https://developer.spotify.com/documentation/web-api/reference/#/) is a thorough set of documentation that includes sample projects, notably for [JavaScript Client](https://developer.spotify.com/documentation/web-api/libraries/#javascript-client-side) and [NodeJS](https://developer.spotify.com/documentation/web-api/libraries/#nodejs) apps. From these docs and example apps, this project will act as a practice arena for a React app, as well as NextJS, at least for the short term.

_In Search of Mood_ shall be treated as an application development project, with cases herein defining requirements for launch. 

## System
### System
_System_, as described in this requirements manifest, will describe the general Web Application from the _Actor(s)_ point of view. When specifically required, _System_ components will be referenced directly as _Server_ (_Vercel_, _Web Server_, interchangeably), _Service_ (_client API_, interchangeably), _UI_ (_experience_, _ux_, _front-end_, interchangeably), or _API_ (_Spotify API_, interchangeably).

#### Server
The server architecture has been decided as [NextJS](https://nextjs.org/docs) app, to explore the magic new world of server-side-rendering \*gasp\*. This Next app will be hosted on the free (hobby) tier of [Vercel](https://vercel.com/guides/deploying-nextjs-with-vercel) for the duration of the SSR project. Server rendering is not critical path for this application, and may be dropped in future versions.

At time of commit, the vercel app is available at [https://in-search-of-mood.vercel.app/](https://in-search-of-mood.vercel.app/).

#### Service
The service tier of _System_ is non-critical. The React framework will suffice for all interfact, the NextJS server will suffice for rendering and pre-rendering, and the Spotify API is entirely approachable via client application. 

In the event that the combination of SSR React plus Spotify client API does not sufficiently handle the needs of _System_, then the architecture will expand to full-stack with the inclusion of a Node _Service_. 

#### UI 
_UI_ will be the primary focus of _In Search of Mood_ and will most closely relate to _Actor_ PoV, when _System_ is referenced.

_UI_ architecture has been decided as [React on NextJS](https://beta.nextjs.org/docs/rendering/fundamentals) for rendering, and [MUI](https://mui.com/), \(more specifically, with [MUI Core](https://mui.com/core) and [emotion in SSR](https://emotion.sh/docs/ssr#api), since MUI has surpassed [Bootstrap](https://getbootstrap.com) in popularity for React apps and since MUI more closely aligns with the Spotify app and [Backstage](https://backstage.io/) offering \).
#### API
As of commit, the [Spotify Web API](https://developer.spotify.com/documentation/web-api/reference/#/) will be the sole API provide for _In Search of Mood_, since all interface will rely on Spotify [user profile data](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-current-users-profile), [track data](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-track), and [playlist data](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlist).

### Actors
All _Actors_ will fit into category of _unauthentiated_ (_visitor_, interchangeably) or _authenticated_ (_user_, interchangeably) user. Both terms 'authenticated' and 'unauthenticated', plus their variants in this Use Case document, will refer to the actor's status against the [Spotify authorization framework](https://developer.spotify.com/documentation/general/guides/authorization/).

## UI

### Use Cases

### Test Cases

## Service

### Tech Cases

### Test Cases