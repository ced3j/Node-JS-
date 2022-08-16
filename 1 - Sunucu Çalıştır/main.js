var http = require("http"); // Http modülünü http değişkenine dahil ettik

http.createServer(function (req, res/*İstek - Cevap parametreleri*/) {//Yerel sunucu oluşturma
    res.end("Cevaplar bittiginde burası calisir");
}).listen(8080); // Port belirleme