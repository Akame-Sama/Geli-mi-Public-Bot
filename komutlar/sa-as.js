module.exports = {
  name:"sa-as",
  code:`
  $if[$message[1]==aç]
  $channelSendMessage[$channelID;{color:RANDOM}{thumbnail:$userAvatar}{title:Sa-as Sistemi Başarıyla Açıldı✅}{footer:$userTag[$authorID] Tarafından Sa-As Sistemi Açıldı}]
  $setServerVar[saas;açık]
  $onlyIf[$getServerVar[saas]!=açık;{color:RANDOM}{description:🦄Kardeşim Sa-As Sistemi Zaten Açık Daha Neyini Açıyon}]
  $onlyPerms[admin;{color:RANDOM}{description:Yetki Lazım Biliosun Dimi Dur 1 Saniye Yetkin Yoktu Dimi 🍞 Bügunde Sana Yakalım}]
  $endif
  $if[$message[1]==kapat]
  $channelSendMessage[$channelID;{color:RANDOM}{thumbnail:$userAvatar}{title:Sa-as Sistemi Başarıyla Kapatıldı⛔}{footer:$userTag[$authorID] Tarafından Sa-As Sistemi Kapatıldı}
  $setServerVar[saas;kapalı]
  $onlyIf[$getServerVar[saas]!=kapalı;{color:RANDOM}{description:🦍Kardeşim Sa-As Sistemi Zaten Kapalı Daha Neyini Kapatıyon}]
  $onlyPerms[admin;{color:RANDOM}{description:Yetki Lazım Biliosun Dimi Dur 1 Saniye Yetkin Yoktu Dimi 🍞 Bügunde Sana Yakalım}]
  $endif
  

  `
  }