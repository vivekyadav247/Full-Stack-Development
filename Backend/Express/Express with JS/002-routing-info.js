const express = require('express');

function block_1_httpsMethods(){
  return new Promise((resolve) => {
    const app = express() ;
    app.use(express.json());

    // Get with wildcard route
    app.get('/files/*filepath', (req, res) => {
      const {filepath} = req.params;
      res.json({
        filepath : filepath,
        type : 'wildcard'
      })
    });

    // Prefetch middleware for /api routes
    app.use('/api', (req, res, next) => {
      console.log('API middleware triggered');
      next();
    });
      

    // Syntactic sugar of routes and http methods
    app.route('/users/:userId')
      .get((req, res) => {})
      .post((req, res) => {})
      .put((req, res) => {})
      .delete((req, res) => {});





    // In-memory database for routes

    const routesDB = {
      1: {
        id : 1,
        name: "Dadar Andheri Expressway",
        length: "20 km",
        status: "Operational"
      },
      2: {
        id : 2,
        name: "Mumbai-Pune Expressway",
        length: "94.5 km",
        status: "Operational"
      },
      3: {
        id : 3,
        name: "Yamuna Expressway",
        length: "165 km",
        status: "Operational"
      }
    }

    let nextRouteId = 4 ;

    // Get all routes
    app.get('/routes', (req, res) => {
      const routes = Object.values(routesDB); // here we send value not the key value pair of the object
      res.json(routes);
    });

    // Get a specific route by ID
    app.get('/routes/:id', (req, res) => {
      const routeId = parseInt(req.params.id);
      const route = routesDB[routeId];

      if(!route){
        return res.status(404).json({ error: 'Route not found' });
      }

      res.json(route);
    });

    // Post a new route
    app.post('/routes', (req, res) => {
      const { name, length, status } = req.body;

      const newRoute = {
        id: nextRouteId++,
        name,
        length,
        status
      };

      routesDB[newRoute.id] = newRoute;
      res.status(201).json(newRoute);
    });

    // Put (update all data) an existing route 
    app.put('/routes/:id', (req, res) => {
      const routeId = parseInt(req.params.id);
      const route = routesDB[routeId];

      if(!route){
        return res.status(404).json({ error: 'Route not found' });
      }

      const { name, length, status } = req.body;

      route.name = name;
      route.length = length;
      route.status = status;

      res.status(200).json(route);
    });

    // Patch (update partial data) an existing route
    app.patch('/routes/:id', (req, res) => {
      const routeId = parseInt(req.params.id);
      const route = routesDB[routeId];
      
      if(!route){
        return res.status(404).json({ error: 'Route not found' });
      }

      const { name, length, status } = req.body;

      if(name) route.name = name;
      if(length) route.length = length;
      if(status) route.status = status;
      
      res.status(200).json(route);
    });

    // Delete a route
    app.delete('/routes/:id', (req, res) => {
      const routeId = parseInt(req.params.id);
      const route = routesDB[routeId];
      
      if(!route){
        return res.status(404).json({ error: 'Route not found' });
      }

      delete routesDB[routeId];
      res.status(200).json({ message: 'Route deleted successfully' }).end();
    });


    const server = app.listen(3000, () => {
      const port = server.address().port;
      console.log(`Server is running on http://localhost:${port}`);
      const base = `http://localhost:${server.address().port}`;

      try{
        // You can add test requests here if needed
        const listRoutes = await fetch(`${base}/routes`);
        const listRoutesData = await listRoutes.json();
        console.log('List Routes Data:', JSON.stringify(listRoutesData));

        console.log('--------------------------------------------------------') ;



        // Test Get a specific route by ID
        const getRouteResponse = await fetch(`${base}/routes/1`);
        const getRouteData = await getRouteResponse.json();
        console.log('Get Route Data:', JSON.stringify(getRouteData));

        console.log('--------------------------------------------------------') ;


        // Test Post a new route
        const newRouteResponse = await fetch(`${base}/routes`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: 'New Route',
            length: 10,
            status: 'active'
          })
        });
        const newRouteData = await newRouteResponse.json();
        console.log('New Route Data:', JSON.stringify(newRouteData));

        console.log('--------------------------------------------------------') ;


        // Test Put (update all data) an existing route
        const updateRouteResponse = await fetch(`${base}/routes/1`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: 'Updated Route',
            length: 15, 
            status: 'inactive'
          })
        });
        const updateRouteData = await updateRouteResponse.json();
        console.log('Update Route Data:', JSON.stringify(updateRouteData));

        console.log('--------------------------------------------------------') ;


        // Test Patch (update partial data) an existing route
        const patchRouteResponse = await fetch(`${base}/routes/1`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            status: 'active'
          })
        });
        const patchRouteData = await patchRouteResponse.json();
        console.log('Patch Route Data:', JSON.stringify(patchRouteData));

        console.log('--------------------------------------------------------') ;

        // Test Delete a route
        const deleteRouteResponse = await fetch(`${base}/routes/1`, {
          method: 'DELETE'
        });
        const deleteRouteData = await deleteRouteResponse.json();
        console.log('Delete Route Data:', JSON.stringify(deleteRouteData));

        console.log('--------------------------------------------------------') ;

      } catch (error) {
        console.error('Error occurred:', error);
      }
      resolve();
    });

  });
}

async function main(){
  await block_1_httpsMethods() ;

  process.exit(0);
}

main();