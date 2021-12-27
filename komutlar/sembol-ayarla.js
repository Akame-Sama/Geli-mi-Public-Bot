module.exports = {
  name:"sembol-ayarla",
  code:`
    $addField[✓ | Üye rolü ayarlandı;**Sıradaki Komutlar**
  
  \`$getServerVar[prefix]otorol aç/kapat\`
  
  \`$getServerVar[prefix]isim-değiştirme aç/kapat\`
  
  \`$getServerVar[prefix]özel-mesaj ayarla <özel_mesajınız>\`
  ;yes]
    $image[https://media.discordapp.net/attachments/697145772801785876/831537189334155324/cizgi-1.gif?width=460&height=20]
  $color[BLACK]
  $setServerVar[sembol;$message]
  $setServerVar[sembol2;evet]
  $onlyIf[$message!=;{description:**╳ | Bir sembol belirlemelisin.**
  **Tavsiyeler:** \`┇\` | \`┋\` | \`◈\` | \`⌬\` | \`⋆\` | \`∾\`
  }{color:BLACK}]
  $onlyIf[$getServerVar[k]!=hayır;{description:**╳ | Önce kayıt sistemini açmalısın.**}{color:BLACK}]
  
  $onlyIf[$getServerVar[tag2]!=hayır;{description:**╳ | Önce tag ayarlamalısın.**}{color:BLACK}]
    $onlyIf[$hasPerms[$authorID;admin]!=false;{description:**╳ | Bu komutu kullanabilmek için *\`Yönetici\`* yetkinizin olması lazım.**}{color:BLACK}]
  `
}