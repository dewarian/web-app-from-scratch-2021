[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

![](https://www.spaceflightinsider.com/wp-content/uploads/2015/09/SpaceX-logo-posted-on-SpaceFlight-Insider.png)

## Table of content
* [Demo](#demo)
* [Description](#description)
* [Installation](#installation)
* [Usage & Features](#demo)
* [External Data](#external-data)
* [Changelog](#changelog)
* [Sources](#sources)

# DEMO 🌍
Visit the live version of this prototype on [SpaceX WAFS](https://nb-wafs.vercel.app/).

# DESCRIPTION
Web-App-From-Scratch is a course from the [minor Web Development And Design](https://github.com/cmda-minor-web/web-app-from-scratch-2021) where we build a web app with external data but without any frameworks or unnecessary libraries. 

The current concept for this web app 

# INSTALLATION
## Prerequisites
Before you continue with installing this project on your machine make sure your machine has the following;
* [GIT](https://git-scm.com/)
## Installation

Navigate to a folder where you want to install this application and run the following bash / ZSH command
```zsh
git clone https://github.com/dewarian/web-app-from-scratch-2021.git
```
# USAGE && FEATURES
Run the project with the extension [live-server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) or a similar extension if you don't use [Visual Studio Code](https://code.visualstudio.com/).
# EXTERNAL DATA
Data is being inserted from an external API called [spaceX-API](https://github.com/r-spacex/SpaceX-API) and is created by multiple contributors.

The API is an Open Source REST API for multiple categories of data surrounding SpaceX

To get started with using the API you can send a `GET` request to the following endpoint
```http
GET https://api.spacexdata.com/v4/launches/latest
```
<details>
<summary>Response GET request</summary>
```JSON
{
  "fairings": null,
  "links": {
    "patch": {
      "small": "https://images2.imgbox.com/eb/0f/Vev7xkUX_o.png",
      "large": "https://images2.imgbox.com/ab/79/Wyc9K7fv_o.png"
    },
    "reddit": {
      "campaign": "https://www.reddit.com/r/spacex/comments/fjf6rr/dm2_launch_campaign_thread/",
      "launch": "https://www.reddit.com/r/spacex/comments/glwz6n/rspacex_cctcap_demonstration_mission_2_general",
      "media": "https://www.reddit.com/r/spacex/comments/gp1gf5/rspacex_dm2_media_thread_photographer_contest/",
      "recovery": "https://www.reddit.com/r/spacex/comments/gu5gkd/cctcap_demonstration_mission_2_stage_1_recovery/"
    },
    "flickr": {
      "small": [],
      "original": [
        "https://live.staticflickr.com/65535/49927519643_b43c6d4c44_o.jpg",
        "https://live.staticflickr.com/65535/49927519588_8a39a3994f_o.jpg",
        "https://live.staticflickr.com/65535/49928343022_6fb33cbd9c_o.jpg",
        "https://live.staticflickr.com/65535/49934168858_cacb00d790_o.jpg",
        "https://live.staticflickr.com/65535/49934682271_fd6a31becc_o.jpg",
        "https://live.staticflickr.com/65535/49956109906_f88d815772_o.jpg",
        "https://live.staticflickr.com/65535/49956109706_cffa847208_o.jpg",
        "https://live.staticflickr.com/65535/49956109671_859b323ede_o.jpg",
        "https://live.staticflickr.com/65535/49955609618_4cca01d581_o.jpg",
        "https://live.staticflickr.com/65535/49956396622_975c116b71_o.jpg",
        "https://live.staticflickr.com/65535/49955609378_9b77e5c771_o.jpg",
        "https://live.staticflickr.com/65535/49956396262_ef41c1d9b0_o.jpg"
      ]
    },
    "presskit": "https://www.nasa.gov/sites/default/files/atoms/files/commercialcrew_press_kit.pdf",
    "webcast": "https://youtu.be/xY96v0OIcK4",
    "youtube_id": "xY96v0OIcK4",
    "article": "https://spaceflightnow.com/2020/05/30/nasa-astronauts-launch-from-us-soil-for-first-time-in-nine-years/",
    "wikipedia": "https://en.wikipedia.org/wiki/Crew_Dragon_Demo-2"
  },
  "static_fire_date_utc": "2020-05-22T17:39:00.000Z",
  "static_fire_date_unix": 1590169140,
  "tdb": false,
  "net": false,
  "window": 0,
  "rocket": "5e9d0d95eda69973a809d1ec",
  "success": true,
  "failures": [],
  "details": "SpaceX will launch the second demonstration mission of its Crew Dragon vehicle as part of NASA's Commercial Crew Transportation Capability Program (CCtCap), carrying two NASA astronauts to the International Space Station. Barring unexpected developments, this mission will be the first crewed flight to launch from the United States since the end of the Space Shuttle program in 2011. DM-2 demonstrates the Falcon 9 and Crew Dragon's ability to safely transport crew to the space station and back to Earth and it is the last major milestone for certification of Crew Dragon. Initially the mission duration was planned to be no longer than two weeks, however NASA has been considering an extension to as much as six weeks or three months. The astronauts have been undergoing additional training for the possible longer mission.",
  "crew": [
    "5ebf1b7323a9a60006e03a7b",
    "5ebf1a6e23a9a60006e03a7a"
  ],
  "ships": [
    "5ea6ed30080df4000697c913",
    "5ea6ed2f080df4000697c90b",
    "5ea6ed2f080df4000697c90c",
    "5ea6ed2e080df4000697c909",
    "5ea6ed2f080df4000697c90d"
  ],
  "capsules": [
    "5e9e2c5df359188aba3b2676"
  ],
  "payloads": [
    "5eb0e4d1b6c3bb0006eeb257"
  ],
  "launchpad": "5e9e4502f509094188566f88",
  "auto_update": true,
  "flight_number": 94,
  "name": "CCtCap Demo Mission 2",
  "date_utc": "2020-05-30T19:22:00.000Z",
  "date_unix": 1590866520,
  "date_local": "2020-05-30T15:22:00-04:00",
  "date_precision": "hour",
  "upcoming": false,
  "cores": [
    {
      "core": "5e9e28a7f3591817f23b2663",
      "flight": 1,
      "gridfins": true,
      "legs": true,
      "reused": false,
      "landing_attempt": true,
      "landing_success": true,
      "landing_type": "ASDS",
      "landpad": "5e9e3032383ecb6bb234e7ca"
    }
  ],
  "id": "5eb87d46ffd86e000604b388"
}
```
</details>

# CHANGELOG

## CHANGES
### 03-02-2021
- [x] Add new tasks in backlog.  
- [x] Fix checkbox in changelog. 
- [x] Add external data section incl. response.  
- [x] Start markdown.

## BACKLOG
- [ ] Fetch Data from spaceX API. 
  - [ ] Store response in localStorage 
- [ ] Render Data in HTML.
  - [ ] Rendering should be done in the [index.html](https://github.com/dewarian/web-app-from-scratch-2021/blob/master/index.html).  
- [ ] Conduct a code review.
# SOURCES
* [License badges, lukas-h, 2021.](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)
* [readme banner, spaceflightinsider.com, 2021.](https://www.spaceflightinsider.com/organizations/space-exploration-technologies/spacex-seeks-permission-4425-satellite-internet-constellation/)
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
***
_I am not affiliated, associated, authorized, endorsed by, or in any way officially connected with Space Exploration Technologies Corp (SpaceX), or any of its subsidiaries or its affiliates. The names SpaceX as well as related names, marks, emblems and images are registered trademarks of their respective owners._