const express = require('express');

function block_1_basicServer(){
  return new Promise((resolve) => {
    const app = express() ;

    app.use(express.json());

    // Get with normat api endpoint
    app.get('/menu', (req, res) => {
      res.json({
        items : [
          'biryani',
          'chicken curry',
          'mutton curry',
          'fish fry'
        ]
      })
    })

    // Get with query params
    app.get('/search', (req, res) => {
      const  {q, limit} = req.query;
      res.json({
        query : q,
        limit : limit || 1,
      })
    })

    // Get with request params
    app.get('/menu/:id', (req, res) => {
      const {id} = req.params;
      res.json({
        id : id,
        item : 'biryani'
      })
    })

    // Post with request body
    app.post('/order', (req, res) => {
      const order = req.body;
      res.status(201).json({
        message : 'Order placed successfully',
        order : order
      })
    })


    const server = app.listen(3000, async () => {
      const port = server.address().port;
      const base = `http://localhost:${server.address().port}`;

      try{
        const menuResponse = await fetch(`${base}/menu`);
        const menuData = await menuResponse.json();
        console.log('Menu Data:', JSON.stringify(menuData));

        console.log('--------------------------------------------------------') ;


        const searchResponse = await fetch(`${base}/search?q=chicken&limit=2`);
        const searchData = await searchResponse.json();
        console.log('Search Data:', JSON.stringify(searchData));

        console.log('--------------------------------------------------------') ;


        const menuIdResponse = await fetch(`${base}/menu/1`);
        const menuIdData = await menuIdResponse.json();
        console.log('Menu ID Data:', JSON.stringify(menuIdData));

        console.log('--------------------------------------------------------') ;


        const orderResponse = await fetch(`${base}/order`, {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify({
            item : 'biryani',
            quantity : 2
          })
        });
        const orderData = await orderResponse.json();
        console.log('Order Data:', JSON.stringify(orderData));

        console.log('--------------------------------------------------------') ;

      } catch(err){
        console.error('Error:', err);
      }

      server.close(() => {
        console.log('Server closed');
        resolve();
      });

    })

  })
}

async function main(){
  await block_1_basicServer();

  process.exit(0);
}

main();