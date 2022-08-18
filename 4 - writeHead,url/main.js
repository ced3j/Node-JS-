const http = require("http");
const url = require("url");  // url modülünü dahil ediyoruz
let ornekAdres = "http://localhost:8080/login?name=Tesla&surname=Nicola";
let q = url.parse(ornekAdres, true); // parse  url modülünün bir methodudur bu methodla parçalama işlemi yapılır

console.log(q.host); // --> localhost:8080
console.log(q.pathname); // --> /login
console.log(q.search); // --> ?name=Tesla&surname=Nicola


// q'nun içinden veri alalım
let qdata = q.query; // query'nin iç yapısı şu an şu şekilde {name:Tesla, surname:Nicola}
console.log(qdata.name);
console.log(qdata.surname);

// Şu ana kadar üstteki kısımları console'da görüntüledik şimdi de webin içerisinde bunları kullanalım



http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" }) // 200 == herhangi bir sıkıntı yok --- Content-Type ile sayfanın içerik türünü belirtiyoruz
    res.write("Merhaba <h1>NodeJs</h1>");

    var q = url.parse(req.url, true);
    res.write(q.pathname);

    res.end();
}).listen(8080);