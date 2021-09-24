#!/bin/bash
npm install
npm run getLatestBrowserDriver
npm run demoTests --serverURL="https://www.google.com/" --env "chrome"
