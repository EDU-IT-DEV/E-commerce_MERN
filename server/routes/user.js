const express = require('express');

const router = express.Router(); // with this method express get more functionalities.

/* After we get the dato inside of /create-or-update-user, 
we hava to dicide here which data we want to send back to our client.*/
router.get('/user', (req, res) => {
// Client will send a reques (REQ) and server will send response(RES) in the http://localhost:8000/create-or-update-user 
    res.json({
        data: 'hey you hit user API endpoint'
    }); 
});

module.exports = router;