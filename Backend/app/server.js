const express = require('express');
const app = express();

// Port server is listening on
const port = 8000;

// Running the server 
app.listen(port, () => {
    console.log("Listening from port", port);
})