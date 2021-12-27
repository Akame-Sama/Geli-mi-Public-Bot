module.exports = {
  name:"kayıt-yetkilisi",
  code:`$if[$message[1]==olsun]
  $addField[✓ | Kayıt yetkilisi olsun olarak ayarlandı;**Sıradaki Komutlar**
  
_  \`$getServerVar[prefix]kayıt-yetkili ayarla @rol\`_**(\`Kayıt yetkilisi seçeneğini olsun diye seçtiyseniz bu komudu kullanın.\`)**
  
 _ \`$getServerVar[prefix]kayıt-mesaj-kanal ayarla #kanal\`_**(\`Kayıttan sonra hangi kanala mesaj atacağını ayarlarsınız.\`)**
  
  _\`$getServerVar[prefix]tag-ayarla <tag>\`_
  
  _\`$getServerVar[prefix]sembol-ayarla <sembol>\`_**(\`Hiç birşey yazmazsanız sembol otomatik olarak "╏" olarak ayarlanacaktır.\`)
  
  _\`$getServerVar[prefix]otorol aç/kapat\`_
  
 _ \`$getServerVar[prefix]isim-değiştirme aç/kapat\`_
  
 _\`$getServerVar[prefix]özel-mesaj ayarla <özel_mesajınız>\`_
  ;yes]
  $image[https://media.discordapp.net/attachments/697145772801785876/831537189334155324/cizgi-1.gif?width=460&height=20]
  $color[BLACK]
  $setServerVar[ky;var]
$endif
  $if[$message[1]==olmasın]
  $addField[✓ | Kayıt yetkilisi olmasın olarak ayarlandı;**Sıradaki Komutlar**
    $image[https://media.discordapp.net/attachments/697145772801785876/831537189334155324/cizgi-1.gif?width=460&height=20]
  $color[BLACK]
  $setServerVar[ky;var]
  $endif
  $if[$message[1]==olmasın]
  $addField[✓ | Kayıt yetkilisi olmasın olarak ayarlandı;**Sıradaki Komutlar**
  
  \`$getServerVar[prefix]kayıt-yetkili ayarla @rol\`**(\`Kayıt yetkilisi seçeneğini olsun diye seçtiyseniz bu komudu kullanın.\`)**
  
  \`$getServerVar[prefix]kayıt-mesaj-kanal ayarla #kanal\`**(\`Kayıttan sonra hangi kanala mesaj atacağını ayarlarsınız.\`)**
  
  \`$getServerVar[prefix]tag-ayarla <tag>\`
  
  \`$getServerVar[prefix]sembol-ayarla <sembol>\`**(\`Hiç birşey yazmazsanız sembol otomatik olarak "╏" olarak ayarlanacaktır.\`)
  
  \`$getServerVar[prefix]otorol aç/kapat\`
  
  \`$getServerVar[prefix]isim-değiştirme aç/kapat\`
  
  \`$getServerVar[prefix]özel-mesaj ayarla <özel_mesajınız>\`
  ;yes]
  $image[https://media.discordapp.net/attachments/697145772801785876/831537189334155324/cizgi-1.gif?width=460&height=20]
  $color[BLACK]
  $setServerVar[ky;yok]
  $setServerVar[ky2;evet]
  $endif
  $onlyIf[$getServerVar[kayıtsız2]!=hayır;{description:**╳ | Önce kayıtsız rolünü ayarlamalısın.**}{color:BLACK}]
  $onlyIf[$getServerVar[k]!=hayır;{description:**╳ | Önce kayıt sistemini açmalısın.**}{color:BLACK}]
    $onlyIf[$hasPerms[$authorID;admin]!=false;{description:**╳ | Bu komutu kullanabilmek için *\`Yönetici\`* yetkinizin olması lazım.**}{color:BLACK}]
      $onlyIf[$checkContains[$toLowercase[$message[1]];olsun;olmasın]==true;{description:**╳ | Lütfen sadece \`olsun\` ve \`olmasın\` kelimelerini kullan.**}{color:BLACK}]
  `
}