# telegram-bot-dersi
Node.js ile tek bir seride telegram bot yapımını anlattım,örnekleride verdim.

![resim](https://www.teknoblog.com/wp-content/uploads/2019/03/telegram-logo.jpg)

## Giriş
Merhabalar dostlar,Telegram günümüzde yaygın hale gelmeye başladı. Şahsen ben 2 yıla yakındır kullanıyorum,gayetde memnunum. 2 yıl boyunca birçok kanala,gruba girdim ve hepsinde rastgeldimki otomatik komutlarla çalışan bir sistem vardı(Bot). Komutunu yazdığın anda sana istenilen bilgileri veriyor mesela /fotografgonder dediğinizde size fotoğraf gönderiyor gibi bir sürü komut.. 
İşte bugün sizlerle Telegram botu kodluyacağız. İstediğiniz dilde yapabilirsiniz bunun için aşağıda bıraktığım linkten yapmak istediğiniz dilinizi seçin.
[Diller ve API'leri](https://core.telegram.org/bots/samples)

Artık dilinizi seçtiniz.Şahsen Node.JS seçtim. Ben birkaç gün önce C# ile yapmayı denedim fakat zorlandım açıkcası.Ama C# kullananlar C#'ı seçebilirler dökümantasyonu var kendine ait ve gayet güzel. Kotlin'i inceledim kotlinde güzel ama node.js'ye çok benziyordu benimde aklıma "node.js ana dili gibi birşey Telegramın :) bir sürü kaynak varken amaan boşver" diye geldi(Lua'yıda incelemiştim.) node kullanayım dedim. Ama kullanmak isteyenler Kotlin'de kullanabilirler Node ile aynı neredeyse ama ben sizi node'ye yönlendirmek istiyorum çünkü zorlanmazsınız ve kaynak var yeterince. Şunu belirteyim Kotlin'de eventler kısıtlı,ha ama basit bir chat botu yapıcam derseniz veya komut ile fotoğraf falan göndermek isterseniz kotlin kullanmaktan çekinmeyin.
Sohbetimizi ettikten sonra yapıma geçebiliriz :)

Ana başlıklarımız şunlardır;
- BotFather ile botu oluşturup tokenimizi alma 
- Telegram için NodeJS Api'yi kurma(Windows)
- Bot kodlamaya başlama
- Botu Telegram'da çalıştırma
- Eventler hakkında ufak yazı
- Komut ile fotoğraf gönderme
- Komut ile ses gönderme
- Ufak not

## BotFather İle Botumuzu Oluşturalım!
Telegrama girip arama yerine @BotFather yazıyoruz ve içeriye giriyoruz. /start diyoruz. Ardından uzun bir yazı çıkmakta /newbot diyerek yeni botumuzu oluşturuyoruz. Daha sonra botumuzun alt başlığını oluşturucaz ben TestPerPer yaptım. Sonrasında ise botumuzun ismini yazıyoruz(test_bot/ sonunda "_bot" olmak zorunda) ve botumuz oluşturuluyor.Oluştukdan sonra bize HTTP APİ veriyor onu bir yere not edin o bizim tokenimiz olucak.

Sonrada BotFather'de token yazısının başlarında "t.me/...._bot" şeklinde yazı var o linke tıklıyoruz ve botumuza gidiyoruz. 
Bu şekilde Botumuzu oluşturup tokenimizi aldık..

## Windows'a Telegram Api'yi Kurmak!
Aslında başlıkta windows yazıyor ama eğer linux bilenler olursa cmdden çevirebilirler.
İster cmd'den istersenizde Visual Studio Code'den yapabilirsiniz. Ben cmd'den yaptım.

Cmd ekranını açtıktan sonra botumuzun oluşacağı klasöre geliyoruz/oluşturuyoruz(mkdir oluşturur) "cd Desktop > mkdir klasor_adı > cd klasor_adı" şimdi ise "npm init" yazıyoruz. Herşeye enter yapıyoruz burada sorular soracak onlarada aynı şekilde. Sonrasında klasörün içinde Package.JSON dosyası olacak,ve bu klasör içine gelip index.js dosyası oluşturuyoruz. Tekrar cmd ekranına gelip "npm install telegram-bot-api -save" komutunu yazıyoruzki apimizi klasöre ekleyelim.

Evet api kurulumunuda gerçekleştirdik artık hazırız.

## Botu Kodlamaya Başlamak!
Cmd ekranını kapatabilirsiniz. Klasöre gelip içindeki "index.js" dosyasını istediğiniz editörle açın. Ben Visual Studio Code kullanıyorum demiştim. Önce index.js dosyamıza tokenimizi ve kütüphanemizi giriyoruz bunun için şu 3 satırı eklemeniz yeterlidir.

-Kodlara index.js dosyasından erişebilirsiniz.

Şimdi artık istediğiniz şekilde botunuzu yapabilirsiniz. Aşağıda 1.örnekte bota ne yazarsanız yazın hep "Tamam" diyecektir. Burada kullandığımız event sendMessage eventidir. Eventler hakkında detaylar için sona inmeniz yeterli olacaktır.

-Kodlara index.js dosyasından erişebilirsiniz.

2.örnekte ise botumuza komut ekliyoruz. Mesela /mesajver dediğimizde bize "Merhaba" diyecektir.

-Kodlara index.js dosyasından erişebilirsiniz.

## Botu Telegram'da çalıştırma!
Evet botumuzu yapıp kaydettik sıra çalıştırmada. Cmd ekranından botumuzun olduğu klasöre/dizine geliyoruz. Klasöre geldikten sonra "node index.js" yazıyoruz ve botumuz çalışmış oluyor. Telegram'dan botunuza girip test edebilirsiniz.

## Eventler hakkında ufak yazı!
Telegram apilerinin her dili eventlere bağlıdır(biraz devrik oldu ama :D). Mesela yukarıdaki örneklerde event kullanılmıştır. En basitinden "sendMessage" mesaj gönderme eventidir. 
Eventlerin ne işe yaradığını kısaca anladık peki eventleri nereden öğreneceğiz? diyecek olursanız;her dilin kendi dökümanları var node.js'ninde kendi dökümanı var github'da oradan CTRL+F yapın istediğiniz eventi aratın.
Node.JS'nin eventlerinin bulunduğu link aşağıdadır.
[Eventler](https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md)

## Komut ile fotoğraf gönderme!
Eventlerimizin sayfasınıda öğrendiğimize göre kendi botumuzu artık tamamen yapabiliriz. Komut ile mesaj göndermeyi öğretmiştim yukarıdaki örnekte, şimdi ise o eventi alıp fotoğraf gönderme olarak editleyeceğiz. Komutumuz "/foto" olsun. Resim url'sini alıyoruz. Resim aşağıdaki resimdir;
![resm](https://i2.milimaj.com/i/milliyet/75/0x0/5dc7360d5542871e38fdc526.jpg)
Peki kodlar;

-Kodlara index.js dosyasından erişebilirsiniz.

## Komut ile ses gönderme!
Evet şimdi bildiğiniz üzere ses dosyalarının genel olarak uzantısı ".mp3" peki bunu nasıl telegramdaki botumuza yansıtacağız diyorsanız; çıkış yolunu belirtmeniz gerekir. Bunu ben hiç kullanmadım o yüzden direk apideki linki vereyim oradan bakabilirsiniz;

[Dosya gönderme Olayı](https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md#sending-files)


[Event](https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md#TelegramBot+sendAudio)


## Ufak not!
Artık mantığını anladık ve az çok öğrendik sıra geldi node.js bilginize..  Mesela komut ile hava durumunu vermesini istiyorsanız bu telegram apisinde mevcut değil. Yani anlatmak istediğim artık arkaplan sizde. Hava durumu botunu ister api ister ise web sitesinden veri çekip yapabilirsiniz node.js'in kütüphaneleri mevcut.

Umarım yararlı bir kaynak olur. İnşallah kaynak isteyenlere "al kardeş sana türkçe kaynak" diye atılan kaynak ben olurum :) Gurur verici olur. Faydalı olmuşsam ne mutlu bana,elimden geldiğince öğrendiğim şeyleri sizlerede yansıtmaya çalıştım. En iyi öğrenme yolu öğretmektir.
