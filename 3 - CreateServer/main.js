var http = require("http");

http.createServer(function (req, res) {
    if (req.url == "/giris") { // Eğer request yani istek == /giriş ise 
        res.write("Giris sayfasindasiniz");
    }
    res.end(); // Eğer yaptığımız cevapları bitirmezsek herhangi bir şekilde çalışmayacaktır
}).listen(8080);