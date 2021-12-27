module.exports = {
  name:"link-engel",
  code:`
  $if[$message[1]==aç]
  $reply[$messageID;{color:RANDOM}{description:✅ Link Engel Sistemi Başarıyla Açıldı};yes]
  $onlyPerms[admin;{color:RANDOM}{thumbnail:$userAvatar}{description:🐂 Kardeşim \`\Admin\`\ Yetkin Yok Şimdi Sana Kim Yaksın]
  $setServerVar[link;linkaçık]
  $endif
  $if[$message[1]==kapat]
  $reply[$messageID;{color:RANDOM}{description:⛔ Link Engel Sistemi Başarıyla Kapatıldı};yes]
  $onlyPerms[admin;{color:RANDOM}{thumbnail:$userAvatar}{description:🐂 Kardeşim \`\Admin\`\ Yetkin Yok Şimdi Sana Kim Yaksın]
  $setServerVar[link;linkkapalı]
  $endif
  $onlyIf[$checkContains[$tolowercase[$message[1]];aç;kapat]==true;{color:RANDOM}{description:⛔ Bir Argüman Gir Abi \`\aç;kapat\`\ Var Hangisini İstersin}]
  $onlyIf[$getglobalUserVar[kural]!=no;{description:$customEmoji[selam] Lütfen Önce Kurraları Onayla!}{color:ffb0ff}{execute:kitap2}{delete:5s}]

  `
  }