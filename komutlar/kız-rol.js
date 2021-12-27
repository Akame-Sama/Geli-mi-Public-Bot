module.exports = {
  name:"kız-rol",
  code:`$if[$message[1]==ayarla]
  $addField[✓ | Kız rolü ayarlandı;**Sıradaki Komutlar**
  
  \`$getServerVar[prefix]erkek-rol ayarla @rol\`**(\`Kayıt sistemini seçeneğini cinsiyet seçtiyseniz bu komudu kullanın.\`)**
  
  \`$getServerVar[prefix]kayıtsız-rol ayarla @rol\`
  
  \`$getServerVar[prefix]kayıt-yetkilisi olsun/olmasın\`
  
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
  $setServerVar[kız;$mentionedRoles[1]]
  $setServerVar[kız2;evet]
  $onlyIf[$mentonedRoles[1]!=;{description:**╳ | Bir rol etiketlemelisin.**}{color:BLACK}]
  $onlyIf[$getServerVar[k]!=hayır;{description:**╳ | Önce kayıt sistemini açmalısın.**}{color:BLACK}]
  $endif
  
  $onlyIf[$getServerVar[ks]!=normal;{description:**╳ | Kayıt türü normal bu komutu kullanamazsın.**}{color:BLACK}]
  $onlyIf[$getServerVar[ks2]!=hayır;{description:**╳ | Önce kayıt türünü seçmelisin.**}{color:BLACK}]
    $onlyIf[$hasPerms[$authorID;admin]!=false;{description:**╳ | Bu komutu kullanabilmek için *\`Yönetici\`* yetkinizin olması lazım.**}{color:BLACK}]
  `
}