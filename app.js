const express = require('express')
const app = express();
require('dotenv').config()

app.get('/api/:date', (req, res) => {
    let reqDate = req.params.date;
    var resUTC, resUnix;
    if (reqDate.includes('-')) {
        resUTC = new Date(reqDate).toUTCString();
        resUnix = Math.floor(new Date(reqDate).getTime());
    } else {
        resUTC = new Date(parseInt(reqDate)).toUTCString();
        resUnix = Math.floor(new Date(parseInt(reqDate)).getTime());
    }
    res.status(200).json({ unix: resUnix, utc: resUTC })
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running at port ${process.env.SERVER_PORT}`)
})