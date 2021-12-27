module.exports = {
  name:"abone-sistemi",
  bkz:["Abone Sistemini Ayarlarsınız"],
  code:`
  $if[$message[1]==yetkili]
  $channelSendMessage[$channelID;{color:ffccff}{description:$customEmoji[selam] Abone-Yetkili Başarıyla <@&$mentionedRoles[1]> Ayarlandı}{thumbnail:$userAvatar}]
  $onlyIf[$mentionedRoles[1]!=;{color:RED}{description:$customEmoji[yasak] Abone-Yetkili Ayarlamak İçin Lütfen Bir Rol Etiketle}{thumbnail:$userAvatar}]
  $setServerVar[aboney;$mentionedRoles[1]]
  $endif
  $if[$message[1]==rol]
  $channelSendMessage[$channelID;{color:ffccff}{description:$customEmoji[selam] Abone-Rol Başarıyla <@&$mentionedRoles[1]> Ayarlandı}{thumbnail:$userAvatar}]
  $onlyIf[$mentionedRoles[1]!=;{color:RED}{description:$customEmoji[yasak] Abone-Rol Ayarlamak İçin Lütfen Bir Rol Etiketle}{thumbnail:$userAvatar}]
  $setServerVar[aboner;$mentionedRoles[1]]
  $endif
  $if[$message[1]==log]
  $channelSendMessage[$channelID;{color:ffccff}{description:$customEmoji[selam] Abone-Log Başarıyla <#$mentionedChannels[1]> Ayarlandı}{thumbnail:$userAvatar}]
  $onlyIf[$mentionedChannels[1]!=;{color:RED}{description:$customEmoji[yasak] Abone-Log Ayarlamak İçin Lütfen Bir Kanal Etiketle}{thumbnail:$userAvatar}]
  $setServerVar[abonel;$mentionedChannels[1]]
  $endif
  $onlyPerms[admin;{color:ffccff}{description:$customEmoji[selam] Üzgünüm Ama Admin Yetkin Yok!}{thumbnail:$userAvatar}]
  `}