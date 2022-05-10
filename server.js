const express = require('express');
const app = express();
const routes = require('./routes');

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.get('/', (request, response) => {
  response.redirect('/items');
})
app.get('/items', (request, response) => {
  return routes.getItems(request, response);
});
app.get('/item?:id', (request, response) => {
  return routes.getItem(request, response);
});
app.post('/item', (request, response) => {
  return routes.postItem(request, response);
});
app.put('/item?:id', (request, response) => {
  return routes.putItem(request, response);
});
app.delete('/item?:id', (request, response) => {
  return routes.deleteItem(request, response);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on Port ${port}`);
});
