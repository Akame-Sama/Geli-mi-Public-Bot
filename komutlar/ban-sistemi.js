module.exports = {
 name:"ban-sistemi",
  code:`
  $if[$message[1]==hummer]
  $channelSendMessage[$channelID;{color:RANDOM}{description:Ban-Hummer <@&$mentionedRoles[1]> Olarak Ayarlandı}{thumbnail:$userAvatar[$authorID]}]
  $setServerVar[banhummer;$mentionedRoles[1]]
  $onlyPerms[admin;{color:RANDOM}{description:$customEmoji[yasak] Üzgünüm Ama Admin Yetkin Yok}]
  $endif
  $if[$message[1]==log]
  $channelSendMessage[$channelID;{color:RANDOM}{description:Ban-Log <#$mentionedChannels[1]> Olarak Ayarlandı}{thumbnail:$userAvatar[$authorID]}]
  $setServerVar[banlog;$mentionedChannels[1]]
  $onlyPerms[admin;{color:RANDOM}{description:$customEmoji[yasak] Üzgünüm Ama Admin Yetkin Yok}]
  $endif
  $if[$message[1]==sıfırla]
  $channelSendMessage[$channelID;{color:RANDOM}{description:Ban-Sistemi Sıfırlandı}{thumbnail:$userAvatar[$authorID]}]
  $resetServerVar[banhummer]
  $resetServerVar[banlog]
  $onlyPerms[admin;{color:RANDOM}{description:$customEmoji[yasak] Üzgünüm Ama Admin Yetkin Yok}]
  $endif
  

  `
  
  }