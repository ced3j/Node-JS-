// Bu paket ile mail gönderebilmek için kullanacağımız mailin
// Güvenliklerini devre dışı bırakmamız gerekiyor


// npm install nodemailer

let nodemailer = require("nodemailer");

let transfer = nodemailer.createTransport({
    service: "gmail", // service: gönderen mailin servisinin türü
    auth: { // gönderecek kişinin mail bilgileri
        user: "BURAYA MAİLİNİZİ GİRİNİZ",
        password: "BURAYA ŞİFRENİZİ GİRİNİZ"
    }
});

let mailBilgi = {
    from: "BURAYA MAİLİNİZİ GİRİNİZ",
    to: "MAİL GÖNDERMEK İSTEDİĞİNİZ KİŞİNİN MAİLİNİ GİRİNİZ",
    subject: "MAİL BAŞLIĞINIZI GİRİNİZ",
    text: "MAİL İÇERİĞİNİZİ GİRİNİZ"
};


transfer.sendMail(mailBilgi, function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Mailiniz gönderildi");
    }
});