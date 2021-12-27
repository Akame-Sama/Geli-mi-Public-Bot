module.exports = {
  name:"kayıt-türü",
  code:`
  $addField[✓ | Kayıt türü ayarlandı;**Sıradaki Komutlar**
  
  \`$getServerVar[prefix]üye-rol ayarla @rol\`**(\`Kayıt sistemini seçeneğini normal seçtiyseniz bu komutu kullanın.\`)**
  
  \`$getServerVar[prefix]kız-rol ayarla @rol\`**(\`Kayıt sistemini seçeneğini cinsiyet seçtiyseniz bu komudu kullanın.\`)**
  
  \`$getServerVar[prefix]erkek-rol ayarla @rol\`**(\`Kayıt sistemini seçeneğini cinsiyet seçtiyseniz bu komudu kullanın.\`)**
  
  \`$getServerVar[prefix]kayıtsız-rol ayarla @rol\`
  
  \`$getServerVar[prefix]kayıt-yetkilisi olsun/olmasın\`
  
  \`$getServerVar[prefix]kayıt-yetkili ayarla @rol\`**(\`Kayıt yetkilisi seçeneğini olsun diye seçtiyseniz bu komudu kullanın.\`)**
  
  \`$getServerVar[prefix]kayıt-mesaj-kanal ayarla #kanal\`**(\`Kayıttan sonra hangi kanala mesaj atacağını ayarlarsınız.\`)**
  
  \`$getServerVar[prefix]tag-ayarla <tag>\`
  
  \`$getServerVar[prefix]sembol-ayarla <sembol>\`**(\`Hiç birşey yazmazsanız sembol otomatik olarak "╏" olarak ayarlanacaktır.\`)**
  
  \`$getServerVar[prefix]otorol aç/kapat\`
  
  \`$getServerVar[prefix]isim-değiştirme aç/kapat\`
  
  \`$getServerVar[prefix]özel-mesaj ayarla <özel_mesajınız>\`
  ;yes]
  $image[https://media.discordapp.net/attachments/697145772801785876/831537189334155324/cizgi-1.gif?width=460&height=20]
  $color[BLACK]
  $setServerVar[ks;$message[1]]
  $setServerVar[ks2;evet]
  $onlyIf[$getServerVar[k]!=hayır;{description:**╳ | Önce kayıt sistemini açmalısın.**}{color:BLACK}]
  $onlyIf[$checkContains[$toLowercase[$message[1]];normal;cinsiyet]==true;{description:**╳ | Lütfen sadece \`normal\` ve \`cinsiyet\` kelimelerini kullan.**}{color:BLACK}]
  $onlyIf[$getServerVar[kkanal2]!=hayır;{description:**╳ | Önce kayıt kanalını ayarlamalısın.**}{color:BLACK}]
    $onlyIf[$hasPerms[$authorID;admin]!=false;{description:**╳ | Bu komutu kullanabilmek için *\`𝒴ö𝓃𝑒𝓉𝒾𝒸𝒾\`* yetkinizin olması lazım.**}{color:BLACK}]
  `
}