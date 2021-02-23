[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.dev)

![](https://miro.medium.com/max/2800/1*K_GsJOj3T2ATvSVtT-YWEA.png)

## Table of content

- [Demo](#demo)
- [Description](#description)
- [Concept](#concept)
- [Installation](#installation)
- [Conventions](#conventions)
- [Usage & Features](#demo)
- [External Data](#external-data)
- [Diagrams](#breakdown-application)
- [Changelog](#changelog)
- [Sources](#sources)

# DEMO 🌍

Visit the live version of this prototype on [Kitsu WAFS](https://nb-wafs.vercel.app/).  
[JSDocs documentation](https://dewarian.github.io/web-app-from-scratch-2021/)

# DESCRIPTION

Web-App-From-Scratch is a course from the [minor Web Development And Design](https://github.com/cmda-minor-web/web-app-from-scratch-2021) where we build a web app with external data but without any frameworks or unnecessary libraries

# CONCEPT

The new concept of this application would be displaying the newest releases of anime. The user can find more information about a particular anime by going to the details of said anime.

_My previous concept was to visualize the crewmates of SpaceX and which endeavours they went through. This sadly became quite complex as there werent many crewmates and not all crewmate information was complete to show a detail page._

Written in vanilla CSS HTML, and **JS**.

# INSTALLATION

## Prerequisites

Before you continue with installing this project on your machine make sure your machine has the following;

- [GIT](https://git-scm.com/)

## Installation

Navigate to a folder where you want to install this application and run the following BASH / ZSH command

```zsh
git clone https://github.com/dewarian/web-app-from-scratch-2021.git
```

# USAGE && FEATURES

Run the project with the extension [live-server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) or a similar extension if you don't use [Visual Studio Code](https://code.visualstudio.com/).

# CONVENTIONS

## Code conventions

To write clean code this project adheres to specific code conventions written by [standardjs](https://github.com/standard/standard) with ESlint and Prettier.
Some of the most notable conventions are;

- Ommitting semicolons and placing them on places that are confusing. Might move to another.

Other prettier tasks that are enforced whenever saved:

- tabwidth: 2 spaces
- useTabs: Absolutely not.
- ES6 Arrows: always use parentheses.
- BracketSpacing: Spaces between.
- SingleQuote: Enforce, no double quotes.
- Trailing comma: none.

## Git conventions

To enforce structure throughout the whole project I will also implement a structure within the git commits itself.
this will be done by the principle of [gitmojis](https://gitmoji.dev).

- Starts with emoji, max 50 - 72 characters (excl. char for emoji).
- When solving an issue, issue id by number is appended to the title. If multiple issues then in the body with how.
- Empty line before the body.
- Body when needed contains information what has been done, or why it doesn't do something.

The idea behind gitmojis is that a commit message contains an emoji to indicate what has happened in a particular commit.

see the following example:
I have updated the JSDocs and want to commit this to the repo, my commit message contains the following.

```Markdown
📝 Update JSDocs #111
<!-- Empty Line -->
<!-- Git Commit Message Body -->
```

the :memo: emoji has the description of **_Add or update documentation_** which highlights the commit does something with documentation.

I was dabbling between bracketed notation or gitmoji, but decided to go with gitmoji as this project isn't as big that it needs a bracket notation.

# EXTERNAL DATA

Data is retrieved from the [Kitsu API](https://kitsu.docs.apiary.io/) Which uses the JSON:API specification. JSON:API is a specification for how a client should request resources be fetched or modified, and how a server should respond to the requests.

The client sends a `GET` request to the API and retrieves an array of objects.

```http
GET https://kitsu.io/api/edge/anime
```

<details>
<summary>Response GET request</summary>
<pre>
<code>
{data: Array(20), meta: {…}, links: {…}}
  data: Array(20)
  0:
  attributes:
  abbreviatedTitles: []
  ageRating: "G"
  ageRatingGuide: null
  averageRating: null
  canonicalTitle: "Shikizakura"
  coverImage: {tiny: "https://media.kitsu.io/anime/cover_images/42330/tiny.jpg?1597702706", small: "https://media.kitsu.io/anime/cover_images/42330/small.jpg?1597702706", large: "https://media.kitsu.io/anime/cover_images/42330/large.jpg?1597702706", original: "https://media.kitsu.io/anime/cover_images/42330/original.jpg?1597702706", meta: {…}}
  coverImageTopOffset: 0
  createdAt: "2019-05-06T05:39:34.845Z"
  description: ""
  endDate: null
  episodeCount: 12
  episodeLength: null
  favoritesCount: 0
  nextRelease: null
  nsfw: false
  popularityRank: 4384
  posterImage: {tiny: "https://media.kitsu.io/anime/poster_images/42330/tiny.jpg?1597697091", small: "https://media.kitsu.io/anime/poster_images/42330/small.jpg?1597697091", medium: "https://media.kitsu.io/anime/poster_images/42330/medium.jpg?1597697091", large: "https://media.kitsu.io/anime/poster_images/42330/large.jpg?1597697091", original: "https://media.kitsu.io/anime/poster_images/42330/original.jpg?1597697091", …}
  ratingFrequencies: {8: "2", 9: "0", 10: "0", 12: "0", 15: "0", 16: "0", 20: "4"}
  ratingRank: null
  showType: "TV"
  slug: "shikizakura"
  startDate: "2021-12-31"
  status: "unreleased"
  subtype: "TV"
  synopsis: ""
  tba: "2021"
  titles: {en_jp: "Shikizakura", ja_jp: "シキザクラ"}
  totalLength: 0
  updatedAt: "2021-02-15T06:00:07.244Z"
  userCount: 1239
  youtubeVideoId: null
  __proto__: Object
  id: "42330"
  links:
  self: "https://kitsu.io/api/edge/anime/42330"
  __proto__: Object
  relationships:
  animeCharacters: {links: {…}}
  animeProductions: {links: {…}}
  animeStaff: {links: {…}}
  castings: {links: {…}}
  categories: {links: {…}}
  characters: {links: {…}}
  episodes: {links: {…}}
  genres: {links: {…}}
  installments: {links: {…}}
  mappings: {links: {…}}
  mediaRelationships: {links: {…}}
  productions: {links: {…}}
  quotes: {links: {…}}
  reviews: {links: {…}}
  staff: {links: {…}}
  streamingLinks: {links: {…}}
  __proto__: Object
  type: "anime"
  __proto__: Object
  1: {id: "43915", type: "anime", links: {…}, attributes: {…}, relationships: {…}}
  2: {id: "43750", type: "anime", links: {…}, attributes: {…}, relationships: {…}}
  3: {id: "43991", type: "anime", links: {…}, attributes: {…}, relationships: {…}}
  4: {id: "43992", type: "anime", links: {…}, attributes: {…}, relationships: {…}}
  5: {id: "43905", type: "anime", links: {…}, attributes: {…}, relationships: {…}}
  6: {id: "43862", type: "anime", links: {…}, attributes: {…}, relationships: {…}}
  7: {id: "43047", type: "anime", links: {…}, attributes: {…}, relationships: {…}}
  8: {id: "43683", type: "anime", links: {…}, attributes: {…}, relationships: {…}}
  9: {id: "44009", type: "anime", links: {…}, attributes: {…}, relationships: {…}}
  10: {id: "43097", type: "anime", links: {…}, attributes: {…}, relationships: {…}}
  11: {id: "43859", type: "anime", links: {…}, attributes: {…}, relationships: {…}}
  12: {id: "43833", type: "anime", links: {…}, attributes: {…}, relationships: {…}}
  13: {id: "43244", type: "anime", links: {…}, attributes: {…}, relationships: {…}}
  14: {id: "43825", type: "anime", links: {…}, attributes: {…}, relationships: {…}}
  15: {id: "43897", type: "anime", links: {…}, attributes: {…}, relationships: {…}}
  16: {id: "42898", type: "anime", links: {…}, attributes: {…}, relationships: {…}}
  17: {id: "43829", type: "anime", links: {…}, attributes: {…}, relationships: {…}}
  18: {id: "43716", type: "anime", links: {…}, attributes: {…}, relationships: {…}}
  19: {id: "43807", type: "anime", links: {…}, attributes: {…}, relationships: {…}}
  length: 20
  __proto__: Array(0)
  links:
  first: "https://kitsu.io/api/edge/anime?filter%5BseasonYear%5D=2021&page%5Blimit%5D=20&page%5Boffset%5D=0"
  last: "https://kitsu.io/api/edge/anime?filter%5BseasonYear%5D=2021&page%5Blimit%5D=20&page%5Boffset%5D=108"
  next: "https://kitsu.io/api/edge/anime?filter%5BseasonYear%5D=2021&page%5Blimit%5D=20&page%5Boffset%5D=20"
  __proto__: Object
  meta:
  count: 128
  __proto__: Object
__proto__: Object
</code>
</pre>
</details>

# BREAKDOWN APPLICATION

## Actor Diagram

![](https://github.com/dewarian/web-app-from-scratch-2021/blob/master/static/assets/new_diagram_actor.png?raw=true)
![](https://github.com/dewarian/web-app-from-scratch-2021/blob/master/static/assets/new_diagram_interaction.png?raw=true)

## Interaction Diagram

![](https://github.com/dewarian/web-app-from-scratch-2021/blob/master/static/assets/diagram_interaction.png?raw=true)

# CHANGELOG

This part of the README is everchanging.

## CHANGES

### 15-02-2021

- [x] Update readme to current concept
- [x] Solve issues

### 12-02-2021

- [x] Switch concept
  - [x] Implement routing
  - [x] Implement detail page
- [x] Solve issues

### 09-02-2021

- [x] Introducing ESlint and Prettier to this project

### 08-02-2021

- [x] Solved [issues in Github.](https://github.com/dewarian/web-app-from-scratch-2021/issues)
- [x] Start with JSDocs
  - [x] NPM initialize.
  - [x] JSDoc theme
- [x] Cleansed repo
  - [x] Moved course content to [/course](https://github.com/dewarian/web-app-from-scratch-2021/tree/master/course).
  - [x] Created assets folder.
  - [x] Update [.gitignore](https://github.com/dewarian/web-app-from-scratch-2021/blob/master/.gitignore).
- [x] Created actor Diagram
- [x] Created interaction Diagram

### 05-02-2021

- [x] Render Data in HTML.
  - [x] Rendering should be done in the [index.html](https://github.com/dewarian/web-app-from-scratch-2021/blob/master/index.html).
- [x] Conduct a code review.

### 03-02-2021

- [x] Add new tasks in backlog.
- [x] Fix checkbox in changelog.
- [x] Add external data section incl. response.
- [x] Start markdown.

## BACKLOG

### Must

- [ ] Update content Detail page.
- [ ] Update Diagrams to reflect change of API.

### Could

- [ ] Pagination of anime.
  - [ ] Back and Next button to navigate pages.
- [ ] Implement localStorage.
- [ ] Implement user interaction.
- [ ] Modularize HTML generation.
- [ ] Add interaction to the overview page.
- [ ] Implement github action to build docs for github pages instead of `NPM run generate-docs`
  - [see jsdoc-action](https://github.com/andstor/jsdoc-action)
- [x] ~~Fetch Data from spaceX API.~~

# SOURCES

- [License badges, lukas-h, 2021.](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)
- [readme banner, spaceflightinsider.com, 2021.](https://www.spaceflightinsider.com/organizations/space-exploration-technologies/spacex-seeks-permission-4425-satellite-internet-constellation/)
<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->

---

_I am not affiliated, associated, authorized, endorsed by, or in any way officially connected with Kitsu.io, or any of its subsidiaries or its affiliates. The names Kitsu as well as related names, marks, emblems and images are registered trademarks of their respective owners._
