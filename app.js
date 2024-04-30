const express = require('express')
const app = express()

// It will parese the request body (So we can fetch req data req.body)
app.use(express.json());

// Create Server In Any port
app.listen(3000, () => {
    console.log('Server Create In 3000 Port')
})

// Write get api /users endpoint
app.get('/users', (req, res) => {

    return res.status(200).json({
        message: 'Success'
    })
})

app.get('/data', (req, res) => {

    return res.status(200).json({
        message: 'Success',
        data: {
            query: req.query,
            body: req.body
        }
    })
})
