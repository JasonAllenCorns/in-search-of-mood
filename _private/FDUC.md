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

All _Actors_ will fit into category of _unauthorized_ (_visitor_, interchangeably) or _authorized_ (_user_, interchangeably) user. Both terms 'authorized' and 'unauthorized', plus their variants in this Use Case document, will refer to the actor's status against the [Spotify authorization framework](https://developer.spotify.com/documentation/general/guides/authorization/).

## UI

<!-- | 3 | T | R | S | -->

### Use Cases

| M   | Title                                        | Req                                                                                                                                                                                                                                                                                            | Status | Labels |
| --- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------ |
| 1   |                                              | **Unauthorized User**                                                                                                                                                                                                                                                                          |        |        |
| 1   | Create visitor view                          | Upon visit, system should display default UI with brand color and standard chrome and empty state                                                                                                                                                                                              | open   | feat   |
| 1   | Prompt for authorization                     | Upon visit, system should prompt user to authorize against Spotify Auth                                                                                                                                                                                                                        | open   | feat   |
| 2   |                                              | **User Actively Authorizing**                                                                                                                                                                                                                                                                  |        |        |
| 2   | AuthZ failure                                | Upon unsuccessful Spotify Authorization, system should retain authorization prompt and present Spotify response messaging, if any                                                                                                                                                              | open   | feat   |
| 2   | AuthZ success                                | Upon successful Spotify Authorization, system should remove authorization prompt                                                                                                                                                                                                               | open   | feat   |
| 3   |                                              | **Authorized User**                                                                                                                                                                                                                                                                            |        |        |
| 3   | Create user view                             | _Default view_: System should present default layout, design, branding, and introductory content, in a 'Hello World' state                                                                                                                                                                     | open   | feat   |
| 3   | Create operation panel                       | System should present operation content panel; defaults to list of user playlists. Presents empty state when user has no playlists.                                                                                                                                                            | open   | feat   |
| 3   | Create track search panel                    | System should present search operation panel; defaults to empty search results with simple search input and 'go' button                                                                                                                                                                        | open   | feat   |
| 3   | State-highlighted playlist                   | When user selects a playlist in the operation panel, the playlist stays highlighted until user selects a different playlist. Playlist selection is mutually exclusive. Re-selecting the same playlist will deselect, resulting in no selected playlist.                                        | open   | feat   |
| 3   | 'Add track' CTA display                      | When system displays tracks in track search list panel, track item should include a CTA to add track to selected playlist. If no playlist is selected then CTA should not respond.                                                                                                             | open   | feat   |
| 3   | Visual connection between track and playlist | Similar to [SVG path between two elements](https://www.cssscript.com/draw-svg-paths-two-elements-leader-line/), system should present a purposeful but stunning connection between highlighted track and selected playlist. If no playlist is selected then no connection should be indicated. | open   | feat   |
| 3   | Add track to playlist                        | When user has selected a playlist in the operation panel, and when the user search results display tracks matching criteria, and when the user highlights a track, and when the user activates the 'Add track' CTA, system should append the track to the selected playlist.                   | open   | feat   |
| 3   |                                              |                                                                                                                                                                                                                                                                                                | open   | feat   |
| 4   |                                              | **Future state**                                                                                                                                                                                                                                                                               |        |        |
| 4   | Batch track                                  | Batch holding area for many tracks, where user may manually arrange tracks                                                                                                                                                                                                                     | open   | feat   |
|     |                                              | **Foundation**                                                                                                                                                                                                                                                                                 |        |        |
|     | Search operations design                     | System design for search and filter panel                                                                                                                                                                                                                                                      | open   | chore  |
