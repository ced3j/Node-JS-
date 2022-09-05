/*

Request ---- Response
(istek) ---- (cevap)


Browser'ı açıp arama kısmına www.google.com yazdığımızda
Google sunucularına bir istekte bulunmuş oluruz
Siteye ulaştığımızda da bu bizim için bir cevaptır



GET --- POST 
İkisi de ayrı ayrı methodlardır
Biz sunucu tarafından bir bilgi istediğimizde bunu GET methodu ile yaparız
Sunucuya bilgi gönderdiğimizde mesela bir form doldurup göndermek gibi
Bunu da POST methodu ile yaparız






Daha teknik bilgiler:

Node.js ile yazılan bir web uygulaması temelde bir request - response (istek - cevap) döngüsüdür. 
Bizler internet tarayıcımıza www.google.com yazmakla, aslında uzaktaki sunucuya bir request gönderiyoruz. 
Uzaktaki sunucu ise bize gördüğümüz Google sayfasını göstererek bir response dönüyor.
Request HEADERS içerisinde yaptığımız istek, Response HEADERS içerisinde ise aldığımız cevap ile ilgili bilgiler taşınır. 
Bunlardan bazıları istek metodu, remote address, cantent-type, path vs..



IP Address


Peki biz bu istekte bulunacağımız sunucuya nasıl ulaşacağız? O sunucunun sahip olduğu IP (Internet Protocol) adresiyle. 
Aslında biz www.google.com yazmakla arka plandaki DNS sunucusu yardımıyla rakamlardan oluşan 
IP adresine ulaşır ve chunk ismi verilen parçalar halinde karşı sunucudaki web sayfası kendi bilgisayarımızda gösterilmeye başlar.
Sunucudaki bağlantıyı istediğimiz yerden değil uygun haberleşme noktaları olan portlar üzerinden yaparız.





TCP - IP Protokolü


İstemci ile sunucu arasındaki bağlantı TCP - IP protokolü yardımıyla kurulur. 
Detayları bizi bu çalışmamız içerisinde çok ilgilendirmemekle beraber 
TCP/IP (Transmission Control Protocol/Internet Protocol), istemci - sunucu arasında veri iletme, 
alma birimleri arasında organizasyonu sağlayan, böylece bir yerden diğerine 
veri iletişimini olanaklı kılan ve farklı protokollerden oluşan yapıya verilen genel addır.







TCP - IP protokolü sayesinde iletişimi kurduk, peki istemci ve sunucu nasıl anlaşacaklar? 
Burada ise devreye HTTP ( HyperText Transfer Protocol ) protokolü devreye girer.


HTTP Protokolü


Sunucular ile istemciler arasındaki iletişimin bazı kuralları vardır, 
yani biz bir sunucuya merhaba şeklinde seslenemeyiz. 
Örneğin biz http://developer.mozilla.org/ adresine bir istek göndermek istersek, 
kullanabileceğimiz format aşağıdaki gibi olabilir.



GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: tr


Yukarıdaki isteğimizin metodu dikkat ederseniz "GET" şeklindedir, 
yani sayfa içeriğini görmek istiyoruz. En çok kullanılan HTTP metodları "GET" ve "POST" tur.
 Örneğin biz bir iletişim formu doldurup, formu gönderdiğimizde POST metodu kullanıyoruz.





 Kaynaklar:

    https://developer.mozilla.org/en-US/docs/Web/HTTP?retiredLocale=tr
    https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works?retiredLocale=tr

*/