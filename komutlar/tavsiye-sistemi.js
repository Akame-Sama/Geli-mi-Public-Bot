module.exports = {
  name:"tavsiye-sistemi",
  code:`
  $if[$message[1]==log-ayarla]
  $channelSendMessage[$channelID;{color:ffb0ff}{thumbnail:$userAvatar[$authorID]}{description:$customEmoji[selam] Başarıyla Tavsiye-Log Kanalı <#$mentionedChannels[1]> Olarak Ayarlandı}]
  $setServerVar[tavsiyelog;$mentionedChannels[1]]
  $onlyPerms[admin;{color:ffb0ff}{description:$customEmoji[yasak] Üzgünüm ama Admin Yetkin Yok}]
  $onlyIf[$mentionedChannels[1]!=;$customEmoji[yasak] Lütfen Bir Kanal Etiketle]
  $endif
  $if[$message[1]==log-sıfırla]
  $channelSendMessage[$channelID;{color:ffb0ff}{thumbnail:$userAvatar[$authorID]}{description:$customEmoji[selam] Başarıyla Tavsiye-Log Kanalı Başarıyla Sıfırlandı}]
  $resetServerVar[tavsiyelog]
  $onlyPerms[admin;{color:ffb0ff}{description:$customEmoji[yasak] Üzgünüm ama Admin Yetkin Yok}]
  $endif
  $if[$message[1]==yetkili]
  $channelSendMessage[$channelID;{color:ffb0ff}{thumbnail:$userAvatar[$authorID]}{description:$customEmoji[selam] Başarıyla Tavsiyelere Bakacak Yetkili Rolü <@&$mentionedRoles[1]> Olarak Ayarlandı}]
  $setServerVar[tavsiyeyetkili;$mentionedRoles[1]]
  $onlyPerms[admin;{color:ffb0ff}{description:$customEmoji[yasak] Üzgünüm ama Admin Yetkin Yok}]
  $onlyIf[$mentionedRoles[1]!=;$customEmoji[yasak] Lütfen Bir Rol Etiketle]
  $endif
  $if[$message[1]==yetkili-sıfırla]
  $channelSendMessage[$channelID;{color:ffb0ff}{thumbnail:$userAvatar[$authorID]}{description:$customEmoji[selam] Başarıyla Tavsiyelere Bakacak Yetkili Rolü Sıfırlandı}]
  $resetServerVar[tavsiyeyetkili]
  $onlyPerms[admin;{color:ffb0ff}{description:$customEmoji[yasak] Üzgünüm ama Admin Yetkin Yok}]
  $endif
  $onlyIf[$checkContains[$tolowerCase[$message[1];log-ayarla;log-sıfırla;yetkili;yetkili;sıfırla]]!=;{color:BLUE}{description:$customEmoji[yasak] Lütfen Bir Argüman Gir | ayarla,sıfırl,yetkili,yetkili-sıfırla}]
  
  `
  
  }