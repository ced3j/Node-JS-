var http = require("http");
var modulum = require("./modül");

http.createServer(function (req, res) {
    res.end(`anlik tarih bilgisi:  ${modulum.anlikTarih()}`);
}).listen(8080);