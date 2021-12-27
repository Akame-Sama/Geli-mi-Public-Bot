module.exports = {
  name:"warn",
  aliases:['uyar'],
  code: `
  $useChannel[$getServerVar[warnlog]]
  $thumbnail[$userAvatar[$mentioned[1]]]
  $color[ffdbfe]
  $description[
$userTag[$mentioned[1]] Kullanıcısı Uyarıldı 
Uyarılma Sebebi : \`\ $noMentionMessage \`\      
Uyaran Yetkili : \`\ $userTag[$authorID] \`\ 
]
  $footer[$userTag[$mentioned[1]] Kişisinin Toplam \`\$getServerVar[warn;$mentioned[1]]\`\ Uyarısı Var]
  $setServerVar[warn;$sum[$getServerVar[warn;$mentioned[1]];1];$mentioned[1]]]
  $onlyIf[$noMentionMessage!=;{color:RANDOM}{description:$customEmoji[yasak] Lütfen Bir Sebep Girin}]
  $onlyIf[$getServerVar[warny]!=;<@$ownerID> Abi Istersen Once Warn Yetkilisini Ayarla]
  $onlyIf[$getServerVar[warnlog]!=;<@$ownerID> Abi Istersen Once Warn Logu Ayarla]
  $onlyIf[$getServerVar[warnsistemi]!=kapalı;<@$ownerID> Abi Istersen Once Warn Sistemini Ayarla]
  $onlyIf[$getServerVar[warny]!=;<@$ownerID> Abi Istersen Once Warn Yetkilisini Ayarla]
  $onlyIf[$mentioned[1]!=;{color:RANDOM}{thumbnail:$userAvatar[$clientID]}{description:$customEmoji[siyah_red] Lütfen Birini Etiketle}]
  $onlyIf[$mentioned[1]!=$authorID;{color:RANDOM}{description:😳 Anlıyorum İnsanın Özeleştiri Yapması Güzel Bisey Ama Kendine Uyarı Veremezsin Be Kardeş!}]
  $onlyIf[$hasRole[$authorID;$getServerVar[warny]]==true;{color:RANDOM}{description:$customEmoji[yasak] Üzgünum Ama <@&$getServerVar[warny]> Rolün  Yok}]
  
`
  
  }