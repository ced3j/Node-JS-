/* --------- MODÜLLER --------- */


// Modül genelde belirli özel bir işlevi olan Javascript dosyasıdır


/*

Asal sayılar kodumuzun üzerinden modül mantığını anlatalım




Aşağıdaki asal sayılar kodunun js dosyasının isminin "primeNumbers" olduğunu varsayalım

        function showPrimeNumbers(lownumber, highNumber) {
            for (let i =lownumber; i <= highNumber; i++) {
                let isPrime = true;
                for (let j = 2; j <= i; j ++) {
                    if( i % j ===0 && j !==i) {
                        isPrime = false
                    }
                }

                if(isPrime) {
                    console.log(i);
                }
            }
        }

        module.exports = showPrimeNumbers // Burada fonksiyonu diğer dosyaların kullanımına açıyoruz.




------------------ 

Şimdi ise başka bir Javascript dosyasından showPrimeNumbers 
fonksiyonunu kullanıma alalım. Burada şuna dikkat! Direk fonksiyonumuz 
üzerinden değil genelde aynı ismi verdiğimiz bir değişken üzerinden fonksiyonu çalıştıracağız

-------------------


Farklı bir JS Dosyası içerisine: 
        const primeNumbers = require('./primeNumbers'); // Fonksyonu bir değişkene atıyoruz.
        primeNumbers.showPrimeNumbers(10, 22); // Kendi değişkenimiz üzerinden çalıştırıyoruz. 







*/