module.exports = {
  name:"tag-ayarla",
  code:`
    $addField[✓ | Tag ayarlandı;**Sıradaki Komutlar**
  
  \`$getServerVar[prefix]sembol-ayarla <sembol>\`**(\`Hiç birşey yazmazsanız sembol otomatik olarak "╏" olarak ayarlanacaktır.\`)
  
  \`$getServerVar[prefix]otorol aç/kapat\`
  
  \`$getServerVar[prefix]isim-değiştirme aç/kapat\`
  
  \`$getServerVar[prefix]özel-mesaj ayarla <özel_mesajınız>\`
  ;yes]
    $image[https://media.discordapp.net/attachments/697145772801785876/831537189334155324/cizgi-1.gif?width=460&height=20]
  $color[BLACK]
  $setServerVar[tag;$message]
  $setServerVar[tag2;evet]
  $onlyIf[$message!=;{description:**╳ | Bir tag belirlemelisin.**
  **Tavsiyeler:** \`の\` | \`✿\` | \`♔\` | \`♕\` | \`♚\` | \`♛\` | \`⚜\` | \`★\` | \`☆\` | \`✮\` | \`✯\` | \`☮\` | \`☯\` | \`☭\` | \`☬\` | \`♪\` | \`♔\` | \`♚\` | \`ღ\` | \`ლ\` | \`❧\` | \`დ\` | \`Ψ\` | \`☤\`
  }{color:BLACK}]
  $onlyIf[$getServerVar[k]!=hayır;{description:**╳ | Önce kayıt sistemini açmalısın.**}{color:BLACK}]
  $onlyIf[$getServerVar[log2]!=hayır;{description:**╳ | Önce kayıt mesaj kanalı ayarlamalısın.**}{color:BLACK}]
    $onlyIf[$hasPerms[$authorID;admin]!=false;{description:**╳ | Bu komutu kullanabilmek için *\`Yönetici\`* yetkinizin olması lazım.**}{color:BLACK}]
  `
}