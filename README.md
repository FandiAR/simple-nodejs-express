## How to run
1. Clone this repo with following commands:

    ```
    git clone https://github.com/FandiAR/simple-nodejs-express.git
    ```
2. Move to simple-nodejs-express directory 

    ```
    cd simple-nodejs-express
    ```
3. Run npm install 

    ```
    npm install
    ```
4. Run apps 

    ```
    npm start
    ```
5. Open browser or REST Client application with the following url

    http://localhost:3000


## Routes

1. Method: GET => localhost:3000/items => get all items.
2. Method: GET => localhost:3000/item?[id] => get one item with spesific id.
3. Method: POST => localhost:3000/item => post one new item.
4. Method: PUT => localhost:3000/item?[id] => update one spesific item.

## Body
1. Body Post { "title": "string" } => title is mandatory.
2. Body Put { "title": "string", "completed": boolean } => title is mandatory, completed is optional.
