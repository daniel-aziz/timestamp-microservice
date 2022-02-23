const express = require('express')
const app = express();
require('dotenv').config()

// Get the current date in unix and utc
app.get('/api', (req, res) => {
    res.status(200).json({ unix: new Date().getTime(), utc: new Date().toUTCString() })
})

// Get the user input date in unix and utc
app.get('/api/:date', (req, res) => {
    let reqDate = req.params.date;
    if (reqDate.includes('-')) { 
        return res.status(200).json({ unix: new Date(reqDate).getTime(), utc: new Date(reqDate).toUTCString() }) 
    }
    return res.status(200).json({ unix: reqDate, utc: new Date(parseInt(reqDate)).toUTCString() })
})


app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running at port ${process.env.SERVER_PORT}`)
})