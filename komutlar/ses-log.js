module.exports = {
  name:"ses-log",
  code:`
  $if[$message[1]==ayarla]
  $channelSendMessage[$channelID;{color:ffb0ff}{description:$customEmoji[selam] Tebrikler Başarıyla Ses Log Kanalı <#$mentionedChannels[1]> Olarak Ayarlandı}{thumbnail:$userAvatar}]
  $onlyIf[$mentionedChannels[1]!=;{color:ffb0ff}{description:$customEmoji[yasak] Lütfen Bir Kanal Etiketle!}{thumbnail:$userAvatar}]
  $setServerVar[seslog;$mentionedChannels[1]]
  $setServerVar[sess;açık]
  $endif
  $if[$message[1]==sıfırla]
    $channelSendMessage[$channelID;{color:ffb0ff}{description:$customEmoji[selam] Tebrikler Başarıyla Ses Log Kanalı Sıfırlandı}{thumbnail:$userAvatar}]
  $onlyIf[$getServerVar[seslog]!=;{color:ffb0ff}{description:$customEmoji[yasak] Lütfen Önce Ses Logu Ayarlayın }{thumbnail:$userAvatar}]
  $resetServerVar[seslog]
  $setServerVar[sess;kapalı]
  $endif
  $onlyPerms[admin;{color:ffb0ff}{description:$customEmoji[yasak] Üzgünüm Ama Admin Yetkin Yok}]
  `}