// FileSystem modülü bilgisayarımızdaki dosyalarla işlem yapabilmeyi sağlar
// Çoğunlukla şu özellikler kullanılır: 
/*
Read files - okuma
Create files - oluşturma
Update files - güncelleme
Delete files - silme
Rename files - isim değiştirme
 */

const fs = require("fs");
const http = require("http");
http.createServer(function (req, res) {
    /*
        fs.readFile("demofile.html", function (err, data) { // Burada data demofile.html'in içerisindeki yazıları temsil eder
            res.writeHead(200, { 'Content-Type': 'text/html' }); // İçerik tipinin html olduğunu belirtiyoruz
            res.write(data);
            res.end();
        });
    */
    /*
        fs.readFile("test.txt", function (err, data) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        });
    */
    /*
        fs.appendFile("test.txt", "Sonradan eklenecek yazı", function (err,) {
            if (err) throw err;
            console.log("Kaydedildi"); // Şu an tekrardan test.txt'ye bakarsak en sona "Sonradan eklenecek yazı" eklenmiş olacaktır
        });
     */

    fs.open("yenibelgem.txt", "w", function (err) { }); // Eğer mevcutta yenibelgem.txt yoksa bu dosyayı oluşturur eğer zaten var ise içindekileri sıfırlar tekrar oluşturur
    fs.unlink("yenibelgem.txt", function (err) { }); // yenibelgem.txt'yi siler
    fs.rename("test.txt", "newName.txt"); // isim değiştirme

}).listen(8080);