import express from 'express';

const app = express()
const port = 3000

app.get('/tree', (req, res) => {

  let response = {
    favoriteTree: "Oak Tree", 
    more : "Mango tree"
  };
  res.json(response);

  app.get('/', (req, res) => {
    res.send('Welcome to Ecosia')
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})