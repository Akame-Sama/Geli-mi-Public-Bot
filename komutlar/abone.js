module.exports = {
  name:"abone",
  aliases:"a",
  bkz:["Abone Sisteminiz Tam Kuruluysa Etiketledğiniz Kişiye Abone Rolü Verir!"],
  code:`
  $useChannel[$getServerVar[abonel]]
  $color[ffccff]
  $addTimestamp
  $thumbnail[$userAvatar[$mentioned[1]]]
  $description[
  $customEmoji[parti] Tebrikler Abone Kaydı Başarılı
  Abone Olan Kişi : ***$userTag[$mentioned[1]]***
  Abone Rol Veren Kişi : ***$userTag[$authorID]***
  Abone Veren Yetkilinin Kayıt Puanı : \`\$getServerVar[abonep;$authorID]\`\
  
  Abone Olan Kişi Sayısı : \`\$roleMembersCount[$getServerVar[aboner]]\`\
  ]
$setServerVar[abonep;$sum[$getServerVar[abonep;$authorID];1];$authorID]
$onlyIf[$getServerVar[aboney]!=;{color:ffb0ff}{description:$customEmoji[yasak] Lütfen Abone Sistemi Ayarlayınız}{thumbnail:$userAvatar}]
$onlyIf[$getServerVar[aboner]!=;{color:ffb0ff}{description:$customEmoji[yasak] Lütfen Abone Sistemi Ayarlayınız}{thumbnail:$userAvatar}]
$onlyIf[$getServerVar[abonel]!=;{color:ffb0ff}{description:$customEmoji[yasak] Lütfen Abone Sistemi Ayarlayınız}{thumbnail:$userAvatar}]
$onlyIf[$mentioned[1]!=;{color:ffb0ff}{description:$customEmoji[yasak] Lütfen Birini Etiketle}{thumbnail:$userAvatar}]
$onlyIf[$hasRole[$authorID;$getServerVar[aboner]]==true;{color:ffb0ff}{description:$customEmoji[yasak] Üzgünüm <@&$getServerVar[aboney]> Yetkin Yok}{thumbnail:$userAvatar}]
$addCmdReactions[$customEmoji[tick_1]]
$giveRoles[$mentioned[1];$getServerVar[aboner]]
`}