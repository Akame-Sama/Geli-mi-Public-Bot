module.exports = {
  name:"emoji-koruma",
  code:` $if[$message[1]==aç]
  $channelSendMessage[$channelID;{color:$getServerVar[hex]}{description:> $getServerVar[rick_tick] | Emoji Koruma Başarıyla Açıldı}{thumbnail:$userAvatar}]
  $setServerVar[ek;açık]
  $endif
  $if[$message[1]==kapat]
   $channelSendMessage[$channelID;{color:$getServerVar[hex]}{description:> $getServerVar[rick_tick] | Emoji Koruma Başarıyla Kapatıldı}{thumbnail:$userAvatar}]
  $setServerVar[ek;kapalı]
  $endif
  $color[#FFDBFE]
  $onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;{color:$getServerVar[hex]}{description:> $getServerVar[rick_carpi] | Lütfen Bir Argüman Kullan : **aç,kapat**}{thumbnail:$userAvatar}]
  $onlyPerms[admin;$getServerVar[admin]]
  

  `
}  
