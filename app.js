const express = require('express')
const app = express()

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