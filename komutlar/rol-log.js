module.exports = {
  name:"rol-log",
  code:`
  $if[$message[1]==ayarla]
  $channelSendMessage[$channelID;{color:ffb0ff}{description:$customEmoji[selam] Tebrikler Rol-Log Başarıyla <#$mentionedChannels[1]> Olarak Ayarlandı}{thumbnail:$userAvatar}]
  $setServerVar[roll;$mentionedChannels[1]]
  $onlyIf[$mentionedChannels[1]!=;{color:RED}{description:$customEmoji[yasak] Lütfen Bir Kanal Etiketle}{thumbnail:$userAvatar}]
  $endif
  $if[$message[1]==sıfırla]
  $channelSendMessage[$channelID;{color:ffb0ff}{description:$customEmoji[selam] Tebrikler Rol-Log Başarıyla Sıfırlandı}{thumbnail:$userAvatar}]
  $resetServerVar[roll]
  $onlyIf[$getServerVar[roll]!=;{color:RED}{thumbnail:$userAvatar}{description:$customEmoji[yasak] Zaten Rol-Log Sistemi Ayarlanmamış}]
  $endif
  $onlyPerms[admin;{color:ffb0ff}{description:$customEmoji[yasak] Üzgünüm Admin Yetkin Yok!}{thumbnail:$userAvatar}]
  $onlyIf[$checkContains[$tolowerCase[$message[1];ayarla;sıfırla]]==true;{color:ffb0ff}{thumbnail:$userAvatar}{description:$customEmoji[yasak] Lutfen Bir Argüman Gir ! : \`\ayarla,sıfırla\`\}]
  `}