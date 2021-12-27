module.exports = {
  name:"kayıt-sayı",
  code:`$if[$message[1]==ekle]
  $description[✓ | Kayıt sayı eklendi.]
  $setUserVar[kayıtsayı;$sum[$getUserVar[kayıtsayı;$mentioned[1];$message[2]];$mentioned[1]]]
  $image[https://media.discordapp.net/attachments/697145772801785876/831537189334155324/cizgi-1.gif?width=260&height=6]
  $color[BLACK]
  $endif
  $if[$message[1]==sil]
  $description[✓ | Kayıt sayı silindi.]
  $setUserVar[kayıtsayı;$sub[$getUserVar[kayıtsayı;$mentioned[1];$message[2]];$mentioned[1]]]  $image[https://media.discordapp.net/attachments/697145772801785876/831537189334155324/cizgi-1.gif?width=260&height=6]
  $color[BLACK]
  $endif
  $onlyIf[$message[2]!=;{description:**╳ | Bir sayı girmelisin.**}{color:BLACK}]
$onlyIf[$isNumber[$message[2]]!=false;{description:**╳ | Bir sayı girmelisin.**}{color:BLACK}]
 $onlyIf[$hasPerms[$authorID;admin]!=false;{description:**╳ | Bu komutu kullanabilmek için *\`Yönetici\`* yetkinizin olması lazım.**}{color:BLACK}]
  `
}