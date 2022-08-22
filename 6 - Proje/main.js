// Önceki derslerde kullandığımız şeylerle bir örnek çalışma yapalım
// Kullanıcı URL'de bize bir istek gönderecek
// Biz de bu istek doğrultusunda bir dosya çağıracağız
// Bu dosyayı fileSystem ile okuyacağız


const http = require("http");
const url = require("url");
const fs = require("fs");


http.createServer(function (req, res) {
    let q = url.parse(req.url, true);
    var fileName = "." + q.pathname + ".html"; // Url'e yazdığımız parametreyi aldık
    fs.readFile(fileName, function (err, data) {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            return res.end("404 sayfası bulunamadı");
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
    });
}).listen(8080);