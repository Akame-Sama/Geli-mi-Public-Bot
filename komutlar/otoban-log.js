module.exports = {
  name:"otoban-log",
  code:`
 $if[$message[1]==ayarla]
 $channelSendMessage[$channelID;{color:RANDOM}{description: Oto-Ban LogSistemi Başaryla Açıldı}]
 $onlyPerms[admin;{color:RANDOM}{thumbnail:$userAvatar[$authorID]}{description:Üzgünüm  admin  Yetkin Yok}]
 $setServerVar[otobanlog;$mentionedChannels[1]]
 $onlyIf[$mentionedChannels[1]!={color:RANDOM}{description:Lütfen Bir Kanal Etiketleyin}]
 $endif
 $if[$message[1]==sıfırla]
 $channelSendMessage[$channelID;{color:RANDOM}{description: Oto-Ban Log Sistemi Başaryla Kapatıldı}]
 $onlyPerms[admin;{color:RANDOM}{thumbnail:$userAvatar[$authorID]}{description:Üzgünüm  admin  Yetkin Yok}]
 $resetServerVar[otobanlog]
 $endif
 

  `
  }