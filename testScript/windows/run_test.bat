echo "#########################################################################################"
echo "Starting the demo Tests"
echo "#########################################################################################"
call npm install
call npm run getLatestBrowserDriver
call npm run demoTests --serverURL="https://www.google.com/" --env "chrome"

echo "#########################################################################################"
echo "End of demo Tests"
echo "#########################################################################################"