export default class sentCordClient {
    apikey: String;
    id: String;
    constructor(options?: {
        token: string;
        id: string;
    });
    post(servers?: String, shards?: String): Promise<void>;
    log(text?: String): void;
}
