// this file is the first one to recieve the user token from client side.
const express = require("express");

const router = express.Router(); // with this method express get more functionalities.

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const { createOrUpdateUser, currentUser } = require("../controllers/auth");

/* After we get the data inside of the next path /create-or-update-user, 
we hava to dicide here which data we want to send back to our client.*/
// authCheck run first (middleware)
// at the endpoint we save the data with de last param createOrUpdateUser (controller)
router.post("/create-or-update-user", authCheck, createOrUpdateUser);
router.post("/current-user", authCheck, currentUser);
router.post("/current-admin", authCheck, adminCheck, currentUser);

module.exports = router;
