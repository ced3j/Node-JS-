// Node JS'in asenkron yapısı

/*

Senkron programlama ---> İşlemlerin sıra sıra yapılması
Asenkron programlama ---> Bir işlem uzun sürecekse onu beklemeden diğerlerine geçilmesi


Olay döngüsü :

    Restoran - garson metaforu

     (Single Thread) bu garsonumuz önce 1. masaya ait siparişleri aldı 
     ve siparişi mutfağa bildirdi (Thread Pool). O siparişlerin 
     hazır olmasını beklemeden (Non-Blocking) 2. masaya ait siparişleri aldı ve yine mutfağa bildirdi. 
     Bu sırada kendisine 1. masanın yemeğinin hazır olduğu bildirildi (callback).





--------------------------------------------------------------------------


 ------ Callback nedir? 

Asenkron yapısında bir işlem yapılırken bu işleme bağlı olan işlemler 
Devam edebilmek için, çalışabilmek için başlangıçtaki işin bitmesini beklerler
Bu işlerin bittiğini öğrenebilmek için callback kullanırız



                function writeName(name, callback) { // writeName fonksiyonu argüman olrak bir callback fonksiyonu alıyor
                    callback(name); 
                }

                function writer(word) { // writer fonksiyonu 
                    console.log(word);
                }

                writeName("Ahmet", writer); // writeName fonksiyonu çalıştırılırken writer fonksiyonu callback işlevi görüyor





--------------------------------------------------------------------------

Şimdi daha geniş bir örnek üzerine konuşalım. 
Senaryomuz şu: Elimizde kitaplarımız var ve bu kitap bilgilerimizi listelemek istiyoruz. 



                const books = [
                    { name: "Kitap 1", author: "Yazar 1" },
                    { name: "Kitap 2", author: "Yazar 2" },
                    { name: "Kitap 3", author: "Yazar 3" }
                ];

                const listBooks = () => {
                    books.map((book) => {
                        console.log(book.name);
                    });
                };

                listBooks();

                //Çıktımız
                //Kitap 1
                //Kitap 2
                //Kitap 3



*** İleride kitap listemize yeni kitaplar eklemeye karar verdik ve uygulamamıza aşağıdaki konu ekledik.




                // Yukarıdaki kodun devamı....

                const addBook = (newBook) => {
                    books.push(newBook)
                }

                addBook({ name: "Kitap 4", author: "Yazar 4" })

                //Çıktımız
                //Kitap 1
                //Kitap 2
                //Kitap 3


*** Çıktımız değişmedi, eğer listBooks(); kodumuz son kısıma gelecek şekilde çalıştırırsak => 

                //Çıktımız aşağıdaki gibi yani istediğimiz gibi olacaktır
                //Kitap 1
                //Kitap 2
                //Kitap 3
                //Kitap 4



Yalnız burada şu sorunumuz var biz her zaman listBooks(); 
komutunun daima kodun sonunda olmasında emin olamayız. 
Burada başka bir yöntem bulmamız gerekir. """Evet callback"""


Biz her yeni kitap eklediğimizde listemizi güncellersek istediğimiz sonucu elde edebiliriz. 
Bunun için listBooks fonksiyonunu addBook fonksiyonu içerinde callback şeklinde kullanacağız.






                const books = [
                    { name: "Kitap 1", author: "Yazar 1" },
                    { name: "Kitap 2", author: "Yazar 2" },
                    { name: "Kitap 3", author: "Yazar 3" }
                ];

                const listBooks = () => {
                    books.map((book) => {
                        console.log(book.name);
                    });
                };

                const addBook = (newBook, callback) => {
                    books.push(newBook);
                    callback();
                };

                addBook({ name: "Kitap 4", author: "Yazar 4" }, listBooks);

                //Çıktımız
                //Kitap 1
                //Kitap 2
                //Kitap 3
                //Kitap 4





 */