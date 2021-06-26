import fetch from "node-fetch";
import { Logger } from "@ayanaware/logger";

export default class sentCordClient {
    private apikey: String;
    private id: String;

    constructor(options = {
        token: "",
        id: ""
    }) {
        /**
         * The api key of the bot from sentcord
         * @type {apikey}
         */

        this.apikey = options.token;

        /**
         * The id of the bot
         * @type {id}
         */
        this.id = options.id;

    };
    /**
     * 
     * @param servers Total servers of the bot
     * @param shards Total shards of the bot
     */
    async post(servers?: String, shards?: String) {
        if (!this.apikey) throw new ReferenceError("Api key is missing");
        if (!this.id) throw new ReferenceError("ID is missing");
        /**
         * If servers not provided then 0 by default
         */
        if (!servers) servers = "0";
        /**
         * If shards not provided then 0 by default
         */
        if (!shards) shards = "0";

        await fetch(`https://api.sixaiy.com/v2/sentcord`, {
            method: "POST",
            headers: {
                "Authorization": `${this.apikey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id,
                serverCount: servers,
                shardCount: shards
            })
        });
    };
    /**
     * 
     * @param text Nothing special just for logging custom text
     */
    log(text?: String) {
        if (!text) text = "Sentcordts is ready";

        var log = Logger.get();
        log.info(`${text}`);
    };
};
