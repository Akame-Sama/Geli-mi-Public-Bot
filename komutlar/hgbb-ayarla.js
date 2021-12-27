module.exports = {
  name:"hgbb-ayarla",
  code:`
  $if[$message[1]==hg]
  $channelSendMessage[$channelID;{color:RANDOM}{thumbnail:$userAvatar}{descripton:✅ Hg Kanalı <#$mentionedChannels[1]> Olarak Ayarlandı}]
  $setServerVar[ehg;$mentionedChannels[1]]
  $onlyIf[$mentionedChannels[1]!=;{color:RANDOM}{description:<@$authorID> 🎡 Lütfen Bir Kanal Etiketle Örneğin => $getServerVar[prefix]hgbb-ayarla hg <#$randomChannelID>}]
  $onlyPerms[admin;{color:RANDOM}{description:🐂 Sanırım \`\ADMİN\`\  Yetkin Yok}]
  $endif
  $if[$message[1]==bb]
  $channelSendMessage[$channelID;{color:RANDOM}{descripton:✅ Bb Kanalı <#$mentionedChannels[1]> Olarak Ayarlandı}]
  $setServerVar[ebg;$mentionedChannels[1]]
  $onlyIf[$mentionedChannels[1]!=;{color:RANDOM}{description:<@$authorID> 🎡 Lütfen Bir Kanal Etiketle Örneğin => $getServerVar[prefix]!hgbb-ayarla bb <#$randomChannelID>}]
  $onlyPerms[admin;{color:RANDOM}{description:🐂 Sanırım \`\ADMİN\`\  Yetkin Yok}]
  $endif
  $if[$message[1]==rol]
  $channelSendMessage[$channelID;{color:RANDOM}{thumbnail:$userAvatar}{descripton:✅ Otorol <@$mentiondRoles[1]> Olarak Ayarlandı}]
  $setServerVar[erl;$mentionedRoles[1]]
  $onlyIf[$mentionedRoles[1]!=;{color:RANDOM}{description:<@$authorID> 🎡 Lütfen Bir Rol Etiketle Örneğin => $getServerVar[prefix]hgbb-ayarla rol <@$randomRoleID>}]
  $onlyPerms[admin;{color:RANDOM}{description:🐂 Sanırım \`\ADMİN\`\  Yetkin Yok}]
  $endif  
  $if[$message[1]==botrol]
  $channelSendMessage[$channelID;{color:RANDOM}{thumbnail:$userAvatar}{descripton:✅ Bot-Rol <@$mentiondRoles[1]> Olarak Ayarlandı}]
  $setServerVar[brl;$mentionedRoles[1]]
  $onlyIf[$mentionedRoles[1]!=;{color:RANDOM}{description:<@$authorID> 🎡 Lütfen Bir Rol Etiketle Örneğin => $getServerVar[prefix]hgbb-ayarla rol <@$randomRoleID>}]
  $onlyPerms[admin;{color:RANDOM}{description:🐂 Sanırım \`\ADMİN\`\  Yetkin Yok}]
  $endif
  

  `
  }

// Note => ehg => embedli hosgeldin kanal.     ebg => embedli baybay mesaji    erl => embedli rol.  brl => bot rola