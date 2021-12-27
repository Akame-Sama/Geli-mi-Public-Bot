module.exports = {
  name:"sil",
  aliases:['clear','temizle'],
  code:`
    $color[RANDOM]
  $thumbnail[$userAvatar[$clientID]]
  $addTimestamp
  $footer[$userTag[$authorID] Kişisi \`\$message[1]\`\ Tane Mesaj Temizledi
  $description[
  <@$authorID> Kişisi <#$channelID> Kanalında \`\$message[1]\`\ Adet Mesaj Temizledi
  ]
  $deletecommand
  $clear[$message[1]]
  $onlyPerms[admin;{color:RANDOM}{description:\`\admin\`\ Yetkisi Üzerinizde Yok Lütfen Yetkili Bir Abiden \`\admin\`\ Yetkisi İsteyiniz}]
  $onlyIf[$message[1]!=;{color:RANDOM}{description:Lütfen Silmem Gereken Mesaj Sayısıni Gir}]
  $onlyIf[$isNumber[$message[1]]!=false;{color:RANDOM}{description:Lütfen Sayı Dışında Başka Bir Şey Girmeyiniz}]
  $onlyIf[$message[1]<101;{color:RANDOM}{description:100 Den Fazla Mesaj Silemem}]
  $suppressErrors[📜 Discord Bilmemne Hatası Gereği Ğ 14 Ğünden Eski Mesaj Silmezmişim ]
  $deleteIn[5s]
  
  `
}