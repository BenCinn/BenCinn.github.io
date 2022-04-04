// Define the packages and its helper.
const exp = require('express'); // Handle the Server Load
const app = exp(); // Express Helper
const path = require('path'); // Handle the path system
const helmet = require('helmet');

app.use(helmet());

// Home Page
app.get('/', function (req, res) {
    console.log('Request: /')
    res.sendFile(path.join(__dirname, '/_layouts/index.html'));

});

app.get('/:thing', function (req, res) {
    console.log('Request: ' + req.params.thing)
    if (req.params.thing.includes("style.css")){
        // Send style
       res.sendFile(path.join(__dirname, '/style.css'));
    }
    else {
        res.sendFile(path.join(__dirname, '/_layouts/' + req.params.thing));
    }
});

// 404 Error Handler
app.use(function (req, res) {
       console.log(('Debug: 404 No File.') + ' Path> ' + req.url);
       res.status(404).send(
              '<head><title>404</title><style type="text/css"></style></head><body></body></html>'
       );
});

// 500 Error Handler
app.use(function (err, req, res) {
       console.log('Debug: 500 Server ERROR.' + ' Path> ' + req.url);
       res.status(500).send(
              '<head><title>500</title><style type="text/css"></style></head><body></body></html>'
       );
});

// Start The Server
app.listen('5000', () =>
       console.log(`Server: Listening on port 5000, Press any key to stop the server and exit..`
       )
);

// Exit Script
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));