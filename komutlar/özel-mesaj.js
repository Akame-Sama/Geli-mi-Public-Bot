module.exports = {
  name:"özel-mesaj",
  code:`$if[$message[1]==ayarla]
    $addField[✓ | Özel mesaj ayarlandı;\`Sistem kuruldu.\`
  ;yes]
    $image[https://media.discordapp.net/attachments/697145772801785876/831537189334155324/cizgi-1.gif?width=460&height=20]
  $color[BLACK]
  $setServerVar[özelmesaj;$messageSlice[1]]
  $setServerVar[özelmesaj2;evet]
  $onlyIf[$getServerVar[k]!=hayır;{description:**╳ | Önce kayıt sistemini açmalısın.**}{color:BLACK}]
 $onlyIf[$messageSlice[1]!=;{description:**╳ | Bir şeyler yazmalısın. Eğer özel şeyler eklemek istiyorsan lütfen** \`-isim-\`(Kişinin kullanıcı adını yazar), \`-etiket-\`(Kişiyi etiketler.)}{color:BLACK}]
$endif
    $onlyIf[$hasPerms[$authorID;admin]!=false;{description:**╳ | Bu komutu kullanabilmek için *\`Yönetici\`* yetkinizin olması lazım.**}{color:BLACK}]
  `
}