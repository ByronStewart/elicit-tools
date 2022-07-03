import { Response, NextFunction, Request } from "express";
import { config as env } from "firebase-functions";
import fetch from "node-fetch";
import { URLSearchParams } from "url";
import { TokenResponse } from "../models/blizz";
import { stringify } from "query-string";

export async function guild(req: Request, res: Response, next: NextFunction) {
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
      } catch (error) {
        console.log(error);
        res.status(500);
        return res.json({
          error: "could not find guild"
        });
      }
    }
  } catch (error) {
    res.status(500);
    return res.json({
      error: "could not find token"
    });
  }
  return res.json({
    error: "unknown"
  });
}

export async function reqToken() {
  const url = "https://us.battle.net/oauth/token";
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  try {
    const response = await fetch(url, {
      method: "post",
      headers: {
        Authorization: `Basic ${env().blizz.key}`
      },
      body: params
    });
    const data: TokenResponse = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

export async function reqGuild(
  token: string,
  guild: string = "Elicit",
  realm: string = "Frostmourne",
  region: string = "us"
) {
  const url = "https://us.api.blizzard.com/wow/guild";
  const query = stringify({ region, fields: "members" });
  try {
    const response = await fetch(`${url}/${realm}/${guild}?${query}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = response.json();
    return data;
  } catch (error) {
    return null;
  }
}
