module.exports = {
  name:"slowmode",
  code:`
  $channelSendMessage[$channelID;{color:RANDOM}{description:Etiketlenen Kanalda <#$mentionedChannels[1]> Yavaş Mod Süresi $message[1] Olarak Ayarlandi}{footer:$userTag[$authorID] Tarafindan İstendi}]
  $slowmode[$mentionedChannels[1];$message[1]s]
  $onlyPerms[admin;{color:RANDOM}{description: admin Yetkisinin Olması Lazım}]
  $onlyIf[$mentionedChannels[1]!=;{color:RANDOM}{description:Lütfen Bir Kanal Etiketle}]
  $onlyIf[$isNumber[$message[1]]!=false;{color:RANDOM}{description:Lütfen Bir Süre Gir}]
  
  `
  }