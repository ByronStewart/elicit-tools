"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_functions_1 = require("firebase-functions");
const node_fetch_1 = require("node-fetch");
const url_1 = require("url");
const query_string_1 = require("query-string");
async function guild(req, res, next) {
    try {
        const isToken = await reqToken();
        if (isToken) {
            const token = isToken.access_token;
            const guildName = req.query.guild ? req.query.guild : "Elicit";
            const region = req.query.region ? req.query.region : "us";
            const realm = req.query.realm ? req.query.realm : "Frostmourne";
            try {
                const data = await reqGuild(token, guildName, realm, region);
                res.status(200);
                return res.json(data);
            }
            catch (error) {
                console.log(error);
                res.status(500);
                return res.json({
                    error: "could not find guild"
                });
            }
        }
    }
    catch (error) {
        res.status(500);
        return res.json({
            error: "could not find token"
        });
    }
    return res.json({
        error: "unknown"
    });
}
exports.guild = guild;
async function reqToken() {
    const url = "https://us.battle.net/oauth/token";
    const params = new url_1.URLSearchParams();
    params.append("grant_type", "client_credentials");
    try {
        const response = await node_fetch_1.default(url, {
            method: "post",
            headers: {
                Authorization: `Basic ${firebase_functions_1.config().blizz.key}`
            },
            body: params
        });
        const data = await response.json();
        return data;
    }
    catch (error) {
        return null;
    }
}
exports.reqToken = reqToken;
async function reqGuild(token, guild = "Elicit", realm = "Frostmourne", region = "us") {
    const url = "https://us.api.blizzard.com/wow/guild";
    const query = query_string_1.stringify({ region, fields: "members" });
    try {
        const response = await node_fetch_1.default(`${url}/${realm}/${guild}?${query}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const data = response.json();
        return data;
    }
    catch (error) {
        return null;
    }
}
exports.reqGuild = reqGuild;
//# sourceMappingURL=guild.js.map