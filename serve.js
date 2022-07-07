const statik = require('node-static');
const file = new statik.Server('./files');
require('http').createServer(function (request, response) {
    request.addListener('end', function () { 
        file.serve(request, response);
        console.log("started serving on 8040")
    }).resume();
}).listen(8040);









