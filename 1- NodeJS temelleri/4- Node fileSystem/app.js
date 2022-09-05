/* File System Modülü */
const fs = require("fs"); // File System modülünü dahil ettik



// Read File --- Dosya Okumak

fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log("Dosya okuma işlemi yapıldı.");
    }
});



// Write File --- Dosya Yazmak

fs.writeFile("example.txt", "Hello Node.js", "utf-8", (err, data) => {
    if (err) console.log(err);
    console.log("Dosya oluşturma işlemi tamamlandı.");

});



fs.writeFile("petersen.json", '{"name":"Arin", "age": 10}', "utf-8", (err, data) => {
    if (err) console.log(err);
    console.log("Json dosyası da başarıyla oluşturuldu.");
});




// Append File ---- Veri eklemek


fs.appendFile("example.txt", "\nBu kısım sonradan eklenecek", "utf-8", (err, data) => {
    if (err) console.log(err);
    console.log("Dosyaya veri eklendi");
});



// Unlink ---- Dosya silmek

/*

fs.unlink("test.txt", (err) => {
    if (err) console.log(err);
    console.log("Dosya silindi");
})

*/




// mkdir ----- Klasör Oluşturmak

fs.mkdir("uploads/img", { recursive: true }, (err) => { // Hem uploads hem img klasörünü iç içe oluşturduk
    // recursive:true parametresini girmeseydik iç içe dosya oluşturamazdık, denedim olmuyor
    if (err) console.log(err);
    console.log("Klasörler oluşturuldu");
});



// rmdir ----- Klasör silmek

fs.rmdir("uploads", { recursive: true }, (err) => {
    if (err) console.log(err);
    console.log("Klasörler silindi");
})