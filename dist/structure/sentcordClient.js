"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const logger_1 = require("@ayanaware/logger");
class sentCordClient {
    constructor(options = {
        token: "",
        id: ""
    }) {
        this.apikey = options.token;
        this.id = options.id;
    }
    ;
    post(servers, shards) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.apikey)
                throw new ReferenceError("Api key is missing");
            if (!this.id)
                throw new ReferenceError("ID is missing");
            if (!servers)
                servers = "0";
            if (!shards)
                shards = "0";
            yield node_fetch_1.default(`https://sentcord.com/api/bot/${this.id}`, {
                method: "POST",
                headers: {
                    "Authorization": `${this.apikey}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    serverCount: servers,
                    shardCount: shards
                })
            });
        });
    }
    ;
    log(text) {
        if (!text)
            text = "Sentcordts is ready";
        var log = logger_1.Logger.get();
        log.info(`${text}`);
    }
    ;
}
exports.default = sentCordClient;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VudGNvcmRDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc3RydWN0dXJlL3NlbnRjb3JkQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQStCO0FBQy9CLDhDQUEyQztBQUUzQyxNQUFxQixjQUFjO0lBSS9CLFlBQVksT0FBTyxHQUFHO1FBQ2xCLEtBQUssRUFBRSxFQUFFO1FBQ1QsRUFBRSxFQUFFLEVBQUU7S0FDVDtRQU1HLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQU01QixJQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7SUFFekIsQ0FBQztJQUFBLENBQUM7SUFNSSxJQUFJLENBQUMsT0FBZ0IsRUFBRSxNQUFlOztZQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07Z0JBQUUsTUFBTSxJQUFJLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFBRSxNQUFNLElBQUksY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBSXhELElBQUksQ0FBQyxPQUFPO2dCQUFFLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFJNUIsSUFBSSxDQUFDLE1BQU07Z0JBQUUsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUUxQixNQUFNLG9CQUFLLENBQUMsZ0NBQWdDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRTtnQkFDbkQsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFO29CQUNMLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ2pDLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ3JDO2dCQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUNqQixXQUFXLEVBQUUsT0FBTztvQkFDcEIsVUFBVSxFQUFFLE1BQU07aUJBQ3JCLENBQUM7YUFDTCxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7SUFBQSxDQUFDO0lBS0YsR0FBRyxDQUFDLElBQWE7UUFDYixJQUFJLENBQUMsSUFBSTtZQUFFLElBQUksR0FBRyxxQkFBcUIsQ0FBQztRQUV4QyxJQUFJLEdBQUcsR0FBRyxlQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdkIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUFBLENBQUM7Q0FDTDtBQTdERCxpQ0E2REM7QUFBQSxDQUFDIn0=