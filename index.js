const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('I know how to open Node.....YAY');
})

app.listen(8000, () => console.log('Listing to port 8000'));