const express = require('express');
const app = express();

app.use(express.static('public'));
app.listen(3080, () => {
    console.log("Application is started");
})