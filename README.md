# Coin REST API frontend

## Project description
Front end for the Coin REST API backend. Built using React.
Input the value, and it will show the minimum coins needed to make up the amount.
The front end app will fetch data result immediately from this deployed API: http://34.143.176.134/api/coin?input=

## Issue with repository
Currently only able to run locally due to unable deployed it properly in cloud services.

## How to run
1. Git clone this repository: `git clone https://github.com/YasmineK210/Coin_RESTAPI_frontend.git`
2. `cd Coin_RESTAPI_frontend`
3. Run `docker build -t coin-frontend .`
4. Run `docker run -p 3000:3000 coin-frontend`
5. App will be running in localhost
