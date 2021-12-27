module.exports = {
  name:"abone-puan-sorgula",
  bkz:["Kişiler Her Abone Rolü Verildiğinde Puan Kasar Sizde Bu Komutla O Puanı Sorgularsınız!"],
  code:`
  $if[$mentioned[1]==;]
  $color[ffb0ff]
  $thumbnail[$userAvatar[$mentioned[1]]]
  $addTimestamp
  $description[
  $customEmoji[selam] <@$mentioned[1]> Kişisinin \`\$getServerVar[abonep;$mentioned[1]]\`\ Abone Puanı Var]
  $onlyIf[$hasRole[$mentioned[1];$getServerVar[aboney]]==true;{color:ffb0ff}{description:$customEmoji[yasak] Etiketlediğin Kişinin <@&$getServerVar[aboney]> Yetkisi Yok}{thumbnail:$userAvatar}]
  $endif
  $if[$mentioned[1]!=;]
  $channelSendMessage[$channelID;{color:ffb0ff}{description:$customEmoji[selam] Senin Tam \`\$getServerVar[abonep;$authorID]\`\ Puanın Var}{thumbnail:$userAvatar}]
  $onlyIf[$hasRole[$authorID;$getServerVar[aboney]]==true;{color:ffb0ff}{description:$customEmoji[yasak] Senin <@&$getServerVar[aboney]> Yetkin Yok}{thumbnail:$userAvatar}]
  $endif
  
  `}