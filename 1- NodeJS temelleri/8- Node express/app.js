/*
Express js nedir?
Node js için minimalist bir web frameworküdür
   

*/


const express = require("express");

const app = express(); // fonksiyonu app adında bir değişkene atıyoruz

app.get("/", (req, res) => {
    res.status(200).send("index sayfası");
});


app.get("/about", (req, res) => {
    res.status(200).send("about sayfası");
});

app.get("/contact", (req, res) => {
    res.status(200).send("contact sayfası");
});

app.get("*", (req, res) => { // Yukarıdaki yönlendirmelerin dışında olduğu zaman ---ki bunu yıldız ile belirtiyoruz--- burası çalışsın
    res.status(404).send("404 sayfa bulunamadı");
});


const port = 3000;

// app.listen(3000); olarak yazsak da çalışırdı ama sunucu başarıyla çalıştırıldığında
// bir geri dönüş, işaret vs almak istediğimiz için bu şekilde yapmak mantıklı oluyor

app.listen(port, () => {
    console.log(`Sunucu port ${port}da çalışıyor`);
});