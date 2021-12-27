module.exports = {
  name:"isim-değiştirme",
  code:`
    $addField[✓ | İsim değiştirme ayarlandı;**Sıradaki Komutlar**
  
  \`$getServerVar[prefix]özel-mesaj ayarla <özel_mesajınız>\`
  ;yes]
    $image[https://media.discordapp.net/attachments/697145772801785876/831537189334155324/cizgi-1.gif?width=460&height=20]
  $color[BLACK]
  $setServerVar[otoisim;$message[2]]
  $setServerVar[otoisim2;$message[1]]
  $onlyIf[$getServerVar[k]!=hayır;{description:**╳ | Önce kayıt sistemini açmalısın.**}{color:BLACK}]
   $onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;{description:**╳ | Lütfen sadece \`aç\` ve \`kapat\` kelimelerini kullan.**}{color:BLACK}]
   $onlyIf[$checkContains[$toLowercase[$message[2]];1;2]==true;{description:**╳ | Lütfen sadece \`1\` ve \`2\` sayılarını kullan.**
   **Örnekler Aşşağıda**
   **1. \`$getServerVar[tag] Kayıtsız\`***
   **2. \`$getServerVar[tag] İsim $getServerVar[sembol] Yaş\`**
   }{color:BLACK}]
    $onlyIf[$hasPerms[$authorID;admin]!=false;{description:**╳ | Bu komutu kullanabilmek için *\`Yönetici\`* yetkinizin olması lazım.**}{color:BLACK}]
  `
}