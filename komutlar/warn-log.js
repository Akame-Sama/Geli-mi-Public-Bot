module.exports = {
  name:"warn-log",
  code:`
  $color[RANDOM]
  $addTimestamp
  $thumbnail[$userAvatar[$authorID]]
  $description[
  $customEmoji[tick] Warn Log Başarıyla <#$mentionedChannels[1]> Olarak Ayarlandı
  ]
  $setServerVar[warnlog;$mentionedChannels[1]]
  $onlyIf[$mentionedChannels[1]!=;{color:RANDOM}{description:$customEmoji[yasak] Lütfen Bir Kanal Etiketle}]
  $onlyPerms[admin;{color:RANDOM}{description:$customEmoji[yasak] Üzgunüm Ama Admin Yetkin Yok}]
  $if[$message[1]==sıfırla]
  $channelSendMessage[$channelID;{color:RANDOM}{description: $customEmoji[tick] Warn Log Başarıyla Sıfırlandı}]
  $onlyPerms[admin;{color:RANDOM}{description:$customEmoji[yasak] Üzgunüm Ama Admin Yetkin Yok}]
  
  $resetServerVar[warnlog]
  $endif
  
  ` }