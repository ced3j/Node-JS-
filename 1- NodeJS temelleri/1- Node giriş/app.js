// Node JS giriş
// Javascript'i sadece webte değil Node Js sayesinde web dışında da çalıştırabildiğimizi görmek adına bir çalışma

// İki sayı arasındaki asal sayıları bulan bir fonksiyon yazalım ve bunu node ortamında çalıştıralım


function findPrimeNumbers(low, high) {
    for (let i = low; i <= high; i++) {
        let isPrime = true;
        for (let x = 2; x <= i; x++) {
            if (i % x === 0 && i !== x) {
                isPrime = false;
            }
        }

        if (isPrime) {
            console.log(i);
        }
    }
}

findPrimeNumbers(10, 19); // Output: 11,13,17,19