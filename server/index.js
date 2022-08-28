import express from "express";
import bodyParser from "body-parser"
import mongoose from "mongoose";

// Routes
import AuthRoute from "./Routes/AuthRoute.js";

const app = express();


// Middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


// connection strings
const MONGO_DB = 'mongodb+srv://admin:rahul@cluster0.idsxxvd.mongodb.net/CommunityApp?retryWrites=true&w=majority';
const PORT = 5000;


// connections to yhe DB
mongoose.connect(MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))) 
    .catch((err)=> console.log(err))

// Uses of routes
app.use('/auth', AuthRoute);