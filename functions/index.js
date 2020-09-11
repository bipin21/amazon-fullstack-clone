const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HQ2rXKgCe55mKhhjgoJpLRJes6UvQAqYGunTP4lc0c43WwfakOatXF3SsWXUTy0gqlf2LjhDZ8ISVxx72UhC3Cp00cHHaZUdq');

//  API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// api routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment request recieved ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// listen command
exports.api = functions.https.onRequest(app);

// example endpoint:
// http://localhost:5001/fullstack-clone-5f0cd/us-central1/api
