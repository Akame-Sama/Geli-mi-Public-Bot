module.exports = {
name:"tag",
code:`
$if[$message[1]==ayarla]
$channelSendMessage[$channelID;{color:ffb0ff}{thumbnail:$userAvatar[$authorID]}{title:Mizur4-Sama Tag Systm}{description:$customEmoji[selam] Tebrikler Tagı \`\$message[2]\`\ Olarak Başarıyla Ayarladınız}]
$setServerVar[tag;$message[2]]
$onlyIf[$message[2]!=;{color:RED}{description:$customEmoji[yasak] Lütfen Bir Tag Girin Örneğin :\`\ ☆ ; ~ • ♤ \`\}]
$endif
$if[$message[1]==log]
$channelSendMessage[$channelID;{color:ffb0ff}{thumbnail:$userAvatar[$authorID]}{title:Mizur4-Sama Tag Systm}{description:$customEmoji[selam] Tebrikler Tag Logu <#$mentionedChannels[1]> Olarak Başarıyla Ayarladınız}]
$setServerVar[taglog;$mentionedChannels[1]]
$onlyIf[$mentionedChannels[1]!=;{color:RED}{description:$customEmoji[yasak] Lütfen Bir Kanal Etiketle Örneğin : <#$randomChannelID>}]
$endif
$if[$message[1]==rol]
$channelSendMessage[$channelID;{color:ffb0ff}{thumbnail:$userAvatar[$authorID]}{title:Mizur4-Sama Tag Systm}{description:$customEmoji[selam] Tebrikler Tag Rol <@&$mentionedRoles[1]> Olarak Başarıyla Ayarlandı}]
$setServerVar[tagrol;$mentionedRoles[1]]
$onlyIf[$mentionedRoles[1]!=;{color:RED}{description:$customEmoji[yasak] Lütfen Bir Rol Etiketle Örneğin : <@&$randomRoleID>}]
$endif
$if[$message[1]==sıfırla]
🎊 Tag Rol Sistemi Başarıyla Sıfırlandı
$resetServerVar[tag]
$resetServerVar[tagrol]
$resetServerVar[taglog]
$setServerVar[tagk;kapalı]
$endif
$if[$message[1]==aç]
🎊 Tag Rol Sistemi Başarıyla Açıldı
$setServerVar[tagk;açık]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];ayarla;log;rol;aç;sıfırla]==true;❌ **ayarla** **sıfırla**,**aç**, **log** , **rol** argumanlarını kullanın]
$onlyPerms[admin;{color:RED}{description:$customEmoji[yasak] Üzgünüm Ama Admin Yetkin Yok}]


`
}   

