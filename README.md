# Daily Video Calendar

This tiny app makes you share a YouTube video a day with you friends and random strangers. No cookies or tracking just a simple react app.

View my implementation at [https://patrickfrank1.github.io/daily-video-calendar/](https://patrickfrank1.github.io/daily-video-calendar/)


## Install

1. Clone the repo
``` bash
git clone git@github.com:patrickfrank1/daily-video-calendar
cd daily-video-calendar
```
2. Install dependencies from package.json
``` bash
npm i
```
3a. Run development server
``` bash
npm run build:dev
```
3b. Serve with express server in production
``` bash
npm run build:prod
npm run start
```

## Configuration

Directories:
- src: contains all the source files, subfolders for js, css, img and external ressources
- test: files to test your code
- dist: production files served with server.js in root directory
- documentation: jsdoc files reside in this directory
- coverage: as constructed by jest

ESLint:
- extends airbnb style guide

Webpack:
- copy external files with CopyWebpackPlugin
- create index.html from template
- minify with terser
- transpile js with @babel/preset-env
- transpile scss
- bundle images
- use 'externals' key to make webpack aware of external libraries
