module.exports = {
  name:"warn-yetkili",
  code:`
  $color[RANDOM]
  $thumbnail[$userAvatar[$authorID]]
  $addTimestamp
  $description[
  $customEmoji[siyah_developer] Warn Yetkilisi Başarıyla <@&$mentionedRoles[1]> Olarak Ayarlandı]
  $setServerVar[warny;$mentionedRoles[1]]
  $onlyIf[$mentionedRoles[1]!=;{color:RANDOM}{footer:\`\Eğer Sistemi Kapat Komutunu Kullandıysanız Bu Uyarıyı Kaile Almayınız \`\}{thumbnail:$userAvatar[$authorID]}{description:$customEmoji[yasak] Lütfen Bir Rol Etiketle}]
  $onlyPerms[admin;{color:RANDOM}{thumbnail:$userAvatar[$authorID]}{description:$customEmoji[yasak] Üzgünüm Ama Admin Yetkin Yok}]
  $onlyIf[$getServerVar[warnsistemi]!=kapalı;{color:RANDOM}{description:$customEmoji[yasak] Lütfen once Warn Sistemini Açın}]
  $if[$message[1]==sıfırla]
  $channelSendMessage[$channelID;{color:ff0000}{thumbnail:$userAvatar[$authorID]}{description: $customEmoji[tick] Warn Yetkilisi Rolü Basarıyla Sıfirlandı}]
  $resetServerVar[warny]
  $onlyIf[$getServerVar[warnsistemi]!=kapalı;{color:RANDOM}{description:$customEmoji[yasak] Lütfen once Warn Sistemini Açın}]
  $onlyPerms[admin;{color:RANDOM}{thumbnail:$userAvatar[$authorID]}{description:$customEmoji[yasak] Üzgünüm Ama Admin Yetkin Yok}]
  $endif
  
  `
  }