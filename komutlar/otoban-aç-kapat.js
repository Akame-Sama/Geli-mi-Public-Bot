module.exports = {
  name:"otoban",
  code:`
 $if[$message[1]==aç]
 $channelSendMessage[$channelID;{color:RANDOM}{thumbnail:$userAvatar[$authorID]}{description:Otoban Sistemi Başarıyla Açıldı}]
 $onlyPerms[admin;{color:RANDOM}{description:Üzgünüm  admin  Yetkin Yok}]
 $setServerVar[otoban;açık]
 $endif
 $if[$message[1]==kapat]
 $channelSendMessage[$channelID;{color:RANDOM}{thumbnail:$userAvatar[$authorID]}{description:Otoban Sistemi Başarıyla Kapatıldı}]
 $onlyPerms[admin;{color:RANDOM}{description:Üzgünüm  admin  Yetkin Yok}]
 $setServerVar[otoban;kapalı]
 $resetServerVar[otobanlog]
 $endif
 

 
 `
  }