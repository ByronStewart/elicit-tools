"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const express = require("express");
const guild_1 = require("./controllers/guild");
const app = express();
app.get("/guild", guild_1.guild);
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.api = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map