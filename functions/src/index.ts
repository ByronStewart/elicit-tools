import * as functions from "firebase-functions";
import * as express from "express";
import { guild } from "./controllers/guild";

const app = express();

app.get("/guild", guild);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
export const api = functions.https.onRequest(app);
