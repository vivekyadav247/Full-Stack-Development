const express = require('express');

function block_1_Middlewares(){
  return new Promise((resolve) => {
    const app = express() ;
    app.use(express.json()); // it is also a middleware that parses incoming JSON requests and puts the parsed data in req.body

    // app.use(express.json({limit: '10kb'})); // limit the size of incoming JSON requests to 10kb

    app.use(express.urlencoded()); // it is also a middleware that parses incoming URL-encoded requests and puts the parsed data in req.body

    // it is also a middleware that parses incoming URL-encoded requests and puts the parsed data in req.body
    // app.use(express.urlencoded({extended: true})); 

    app.use(express.static('public', { // it is also a middleware that serves static files from the 'public' directory
      dotfiles: 'ignore', // ignore dotfiles (e.g., .env, .gitignore)
      etag: true, // enable etag headers for caching
      extensions: ['html', 'htm'], // serve files with these extensions if no extension is provided in the request
      index: 'index.html', // serve index.html as the default file for a directory
      maxAge: '1d', // cache static files for 1 day
      redirect: true, // redirect to trailing slash for directories
      setHeaders: function (res, path, stat) { // set custom headers for static files
        res.set('x-timestamp', Date.now())
      }
    }));


    const loggs = [] ; // to store logs

    // Custom middleware to log request details
    app.use((req, res, next) => {
      loggs.push(`Request Method: ${req.method}, Request URL: ${req.url}`);
      console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
      next(); // Call the next middleware or route handler
    });

    // Custom middleware to measure request duration
    app.use((req, res, next) => {
      req.startTime = Date.now(); // Store the start time of the request

      res.on('finish', () => {
        const duration = Date.now() - req.startTime;
        loggs.push(`Request to ${req.url} took ${duration}ms`);
        console.log(`Request to ${req.url} took ${duration}ms`);
      });
      next(); // Call the next middleware or route handler
    })


    // Custom Function Middleware 
    function customMiddleware(req, res, next) {
      const token = req.headers['authorization'];

      if(!token || token !== 'my-secret-token') {
        return res.status(403).json({error: 'Forbidden'});
      }

      if(token === 'my-secret-token') {} ;

      req.user = {
        id:1,
        name: "Vivek",
        role: "admin"
      }
      next(); // Call the next middleware or route handler
    }

    function getRole(role){ // Reusable middleware to check every type user role
      return (req, res, next) => {
        if(!req.user || req.user.role !== role) {
          return res.status(403).json({error: 'Forbidden'});
        }
        next();
      }
    }

    // Use the custom middleware for specific routes
    app.use('/secure', customMiddleware, getRole('admin'), (req, res) => {});


    function rateLimiter(maxRequests){
      let count = 0 ;

      return (req, res, next) => {
        count++ ;
        if(count > maxRequests){
          return res.status(429).json({error: 'Too many requests'});
        }
        next();
      }
    }

    const limiter = rateLimiter(5); // Allow max 5 requests

    // Use the rate limiter middleware for specific routes
    app.use('/limited', limiter, (req, res) => {
      res.json({
        message: 'This route is rate limited',
        type : 'limited'
      })
    });

  });
}

async function main(){
  await block_1_Middlewares();
}

main() ;