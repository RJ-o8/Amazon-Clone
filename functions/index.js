const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IHASiB5dO0d8BK4CjhqvcDu8xWfYSDqlWpsysbI90lQXk8dYlP0HaTQIOEIVwE7iKgz1Uqv0QPAmmrDbf3bZHkE00k3KDIH1h"
);


// API


// App config
const app = express();


// Middleware
app.use(cors({origin: true}));
app.use(express.json());


// Api routes
app.get("/", (req, res)=> res.status(200).send("Hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment request recived bla bla bla", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});


// Listen command

exports.api = functions.https.onRequest(app);
