const http = require("http"); // http modülünü dahil ettik

// server oluşturuyoruz
const server = http.createServer((req, res) => {

    // req yani request bizim yaptığımız istekle ilgili bilgiler içerir
    const url = req.url;


    if (url === "/") { // hiçbir istek yapmadıysak 
        res.writeHead(200, { 'Content-Type': 'text/html' }) // İçerik tipinin html olacağını belirttik
        res.write("<h1>index sayfası</h1>");
    } else if (url === "/about") {
        res.write("about sayfası");
    } else if (url === "/contact") {
        res.write("contact sayfası");
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write("<h2> 404 sayfa bulunamadı </h2>");
    }

    res.end();
});


const port = 3000;

server.listen(port, () => { // Sunucunun portunu belirtiyoruz
    console.log(`Sunucu port ${port}de başlatıldı`);
});