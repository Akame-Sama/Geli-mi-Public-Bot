module.exports = {
  name:"kayıt-yetkili",
  code:`$if[$message[1]==ayarla]
  $addField[✓ | Kayıt yetkilisi ayarlandı;**Sıradaki Komutlar**
  
  \`$getServerVar[prefix]kayıt-mesaj-kanal ayarla #kanal\`**(\`Kayıttan sonra hangi kanala mesaj atacağını ayarlarsınız.\`)**
  
  \`$getServerVar[prefix]tag-ayarla <tag>\`
  
  \`$getServerVar[prefix]sembol-ayarla <sembol>\`**(\`Hiç birşey yazmazsanız sembol otomatik olarak "╏" olarak ayarlanacaktır.\`)
  
  \`$getServerVar[prefix]otorol aç/kapat\`
  
  \`$getServerVar[prefix]isim-değiştirme aç/kapat\`
  
  \`$getServerVar[prefix]özel-mesaj ayarla <özel_mesajınız>\`
  ;yes]
  $image[https://media.discordapp.net/attachments/697145772801785876/831537189334155324/cizgi-1.gif?width=460&height=20]
  $color[BLACK]
  $setServerVar[kyetkili;$mentionedRoles[1]]
  $setServerVar[kyetkili2;evet]
  $onlyIf[$mentonedRoles[1]!=;{description:**╳ | Bir rol etiketlemelisin.**}{color:BLACK}]
  $onlyIf[$getServerVar[k]!=hayır;{description:**╳ | Önce kayıt sistemini açmalısın.**}{color:BLACK}]
  $endif
  $onlyIf[$getServerVar[ky]!=yok;{description:**╳ | Kayıt yetkilisi yok olarak ayarlandı bu komutu kullanamazsın.**}{color:BLACK}]
    $onlyIf[$hasPerms[$authorID;admin]!=false;{description:**╳ | Bu komutu kullanabilmek için *\`𝒴ö𝓃𝑒𝓉𝒾𝒸𝒾\`* yetkinizin olması lazım.**}{color:BLACK}]
$endif
  `
}