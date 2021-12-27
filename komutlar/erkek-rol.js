module.exports = {
  name:"erkek-rol",
  code:`$if[$message[1]==ayarla]
  $addField[✓ | Erkek rolü ayarlandı;**Sıradaki Komutlar**
  
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
  $setServerVar[erkek;$mentionedRoles[1]]
  $setServerVar[erkek2;evet]
  $onlyIf[$mentonedRoles[1]!=;{description:**╳ | Bir rol etiketlemelisin.**}{color:BLACK}]
  $onlyIf[$getServerVar[k]!=hayır;{description:**╳ | Önce kayıt sistemini açmalısın.**}{color:BLACK}]
  $endif
  $onlyIf[$getServerVar[kız2]!=hayır;{description:**╳ | Önce kız rolünü ayarlamalısın.**}{color:BLACK}]
  $onlyIf[$getServerVar[ks]!=normal;{description:**╳ | Kayıt türü normal bu komutu kullanamazsın.**}{color:BLACK}]
  $onlyIf[$getServerVar[ks2]!=hayır;{description:**╳ | Önce kayıt türünü seçmelisin.**}{color:BLACK}]
    $onlyIf[$hasPerms[$authorID;admin]!=false;{description:**╳ | Bu komutu kullanabilmek için *\`Yönetici\`* yetkinizin olması lazım.**}{color:BLACK}]
  `
}