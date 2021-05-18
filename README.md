# sentcordts
## A api wrapper of [sentcord](https://sentcord.com/) for posting your bot server and shard stats
<br>


## Install
```diff
+ npm
npm install sentcordts
+ yarn
yarn add sentcordts 
```
## Usage
```js
/**
 * Import sentcordts
 * @class Sentcord
 */
const { Sentcord } = require("sentcordts");

const client = new Sentcord({
    token: "Api key", // Your api key of the bot from sentcord
    id: "Bot id" // Your bot id
});

/**
 * Post your total servers and shards
 */
client.post("Total Numbers", "Total Shards");
/** 
 * Log a custom text to check if the package is working or not
 * It's not necessary
*/
client.log("Text");
```
## Example
```js
const { Sentcord } = require("sentcordts");

const client = new Sentcord({
    token: "E2BT0ivIoSgE4tEQdIJXVLv31n0mOlc5gn7XYVyUhZ9kONz3IkIhZP", 
    id: "819050202508820491"
});

client.post("85", "1");
```
