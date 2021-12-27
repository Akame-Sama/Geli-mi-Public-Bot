module.exports = {
  name:"kanal-koruma",
  code:` $if[$message[1]==aç]
  $channelSendMessage[$channelID;{color:$getServerVar[hex]}{description:> $getServerVar[rick_tick] | Kanal Koruma Başarıyla Açıldı}{thumbnail:$userAvatar}]
  $setServerVar[kk;açık]
  $endif
  $if[$message[1]==kapat]
  $channelSendMessage[$channelID;{color:$getServerVar[hex]}{description:> $getServerVar[rick_tick] | Kanal Koruma Başarıyla Kapatıldı}{thumbnail:$userAvatar}]
  $setServerVar[kk;kapalı]
  $endif
  $onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;{color:$getServerVar[hex]}{description:> $getServerVar[rick_carpi] | Lütfen Bir Argüman Kullan : **aç,kapat**}{thumbnail:$userAvatar}]
  $onlyPerms[admin;$getServerVar[admin]]
  
  `
}  
