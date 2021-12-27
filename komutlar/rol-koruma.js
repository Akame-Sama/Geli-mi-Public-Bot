module.exports = {
  name:"rol-koruma",
  code:`$if[$message[1]==aç]
  $channelSendMessage[$channelID;{color:$getServerVar[hex]}{description:> $getServerVar[rick_tick] | Rol Koruma Başarıyla Açıldı}{thumbnail:$userAvatar}]
  $setServerVar[rk;açık]
  $endif
  $if[$message[1]==kapat]
  $channelSendMessage[$channelID;{color:$getServerVar[hex]}{description:> $getServerVar[rick_tick] | Rol Koruma Başarıyla Kapatıldı}{thumbnail:$userAvatar}]
  $setServerVar[rk;kapalı]
  $endif
  $onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;{color:$getServerVar[hex]}{description:> $getServerVar[rick_carpi] | Lütfen Bir Argüman Kullan : **aç,kapat**}{thumbnail:$userAvatar}]
  $onlyPerms[admin;$getServerVar[admin]]
  `
}  
