module.exports = {
  name:"warn-sistemi",
  code:`
  $if[$message[1]==aç]
  $channelSendMessage[$channelID;{thumbnail:$userAvatar}{color:RANDOM}{description: $customEmoji[tick]  Warn Sistemi Başarıyla Açıldı}]
  $onlyPerms[admin;{color:RANDOM}{description:$customEmoji[yasak] ☣ Üzgünüm Admin Yetkin Yok}]
  $setServerVar[warnsistemi;açık]
  $endif
  $if[$message[1]==kapat]
  $channelSendMessage[$channelID;{thumbnail:$userAvatar}{color:RANDOM}{description: $customEmoji[tick]  Warn Sistemi Başarıyla Kapatıldı}]
  $onlyPerms[admin;{color:RANDOM}{description:$customEmoji[yasak] ☣ Üzgünüm Admin Yetkin Yok}]
  $setServerVar[warnsistemi;kapalı]
  $endif
  $onlyIf[$checkContains[$tolowerCase[$message[1]];aç;kapat]==true;{color:RANDOM}{thumbnail:$userAvatar}{description:$customEmoji[yasak] Lütfen Bir Argüman Giriniz : \`\aç,kapat\`\}]
  
`
  
  }