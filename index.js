//Bu dosya eğitim amaçlıdır bunu kullanmayın yani indirmeyin çünkü eventleri bir arada tuttum.
//ByPerPer
//Bot kurulum
var TelegramBot = require('node-telegram-bot-api');
var token = 'BOT_FATHERDAN_ALDIĞINIZ_TOKEN_BURAYA';
var bot = new TelegramBot(token, {polling:true});
//Ne yazarsak yazalım sürekli tamam diyen komut
bot.on('message', (msg) => { //asıl önemli event,'message' mesaj demek zaten mesaj girildiğinde diyor.
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Tamam'); //Mesaj gönderme eventi
});

  //Komut ile mesaj gönderme
  bot.onText(/\/mesajver/, (msg) => { //komutu yazıldığında demek komutumuz /mesajver

    bot.sendMessage(msg.chat.id,"Merhaba" ); //mesaj verme
        
    });

  //Komut ile fotoğraf gönderme
    bot.onText(/\/foto/, (msg) => { //komutu giriyoruz yani komutumuz /foto

      bot.sendPhoto(msg.chat.id,'https://i2.milimaj.com/i/milliyet/75/0x0/5dc7360d5542871e38fdc526.jpg'); //fotoğraf gönderme eventi
          
      });

      //ByPerPer