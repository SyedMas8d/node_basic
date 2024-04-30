# node_basic
HOW TO CREATE NODE APP

1. `npm init` - command create package.json (Inside project folder)

    Project folder (node_basic)
        |
        |_ package.json


    package.json

    ```
    {
        "name": "node_basic",
        "version": "1.0.0",
        "description": "",
        "main": "app.js", --> App entry point
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "",
        "license": "ISC"
    }
    ```

2. Create app entry point app.js in root path

    Project folder (node_basic)
        |
        |_ package.json
        |
        |_ app.js


3. Create server by express packages (Express is widely used node framwork pakage)

    1. Install express package

        ```
        npm install --save express
        ```

    2. Add code to create server in app.js

        ```
        const express = require('express')
        const app = express()

        // Create Server In Any port
        app.listen(3000, () => {
            console.log('Server Create In 3000 Port')
        })
        ``` 

4. Write apis using app
    1. app.get()
    2. app.post()
    3. app.put()
    4. app.delete()


    Fn() example: 

        app.get(router, callback);

        ```
        app.get('/users', (req, res) => {
            res.status(200).json({
                message: 'Success'
            })
        })
        ```

    app.js
    
    ```
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
    ```

5. Run apis
    1. Add start script in package.json

    package.jsons
    ```
    {
        "name": "node_basic",
        "version": "1.0.0",
        "description": "",
        "main": "app.js", --> App entry point
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
            "start": "node app.js" --> Add start script
        },
        "author": "",
        "license": "ISC"
    }
    ```

    2. Run following command
    
    `npm start`

    3. Test the url: http://localhost:3000/users


UNDERSTAND THE REQUEST RESPONSE IN NODE APP

1. Client can pass three types of request data
    1. query
    2. body 
    3. path param

    
    
