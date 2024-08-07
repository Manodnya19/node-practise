const http = require('http')
//req is the request that we are getting to the server and res is the response to the request
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page');  //we can write this line as res.write("..."); res.end() but we have just combined the both here
    }
    else if(req.url === '/about'){
        res.end("This is the about page");
    }
    else{ 
        res.end(
            `<h1>OOPS</h1>
            <p>We cant find the page you are looking for</p>
            <a href = "/">back home</a>`
        );
    }

} )

server.listen(8080)