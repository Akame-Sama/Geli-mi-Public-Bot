module.exports = {
  name:"kayıt",
  code:`$if[$getServerVar[ks]==normal]
  $useChannel[$getServerVar[log]]
  <@$mentioned[1]>
  $author[Kayıt Yapıldı;$serverIcon]
  $description[> ⌬ <@$mentioned[1]> aramıza <@&$getServerVar[üye]> rolü ile katıldı.]
  $addField[⌬ Kaydı gerçekleştiren yetkili;> <@$authorID>;yes]
  $addField[⌬ Aramıza hoş geldin;> <@$mentioned[1]>;yes]
  $color[BLACK]
$channelSendMessage[$channelID;
  {author:$username Kayıt Edildi:$authorAvatar}
  {description:>>> **Kayıt Olan Kullanıcı:** \`$usertag[$mentioned[1]]\`
  **Kayıt Olduğu İsim:** \`$message[2]\`
  **Kayıt Olduğu Yaş:** \`$message[3]\`
  **Kayıt Eden Yetkili:** \`$usertag\`
  **Kayıt Türü:** \`Normal\`
}{footer:⌬ $username, kayıt sayı > $sum[1;$getServerVar[kayıtsayı]]:$serverIcon}
{color:BLACK}]
$setUserVar[kayıtsayı;$sum[1;$getServerVar[kayıtsayı]];$authorID]
$setUserVar[sonkayıt;<@$mentioned[1]> kişisini \`$getServerVar[tag] $message[2] $getServerVar[sembol] $message[3]\` olarak kayıt etti.;$authorID]
$giveRole[$mentioned[1];$getServerVar[üye]]
$takeRole[$mentioned[1];$getServerVar[kayıtsız]]
$changeNickname[$mentioned[1];$getServerVar[tag] $message[2] $getServerVar[sembol] $message[3]]
$setUserVar[isim;$getServerVar[tag] $message[2] $getServerVar[sembol] $message[3];$mentioned[1]]
$setUserVar[kt2;$day/$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$month;January;01;-1];February;02;-1];March;03;-1];April;04;-1];May;05;-1];June;06;-1];July;07;-1];August;08;-1];September;09;-1];October;10;-1];November;11;-1];December;12;-1]/$year $sum[3;$hour]:$minute:$second;$mentioned[1]]
$setUserVar[ke;$authorID;$mentioned[1]]
$setUserVar[ke2;$mentioned[1];$authorID]
$onlyIf[$mentioned[1]!=;{description:**╳ | Önce birini etiketlemelisin.**}{color:BLACK}]
$onlyIf[$message[2]!=;{description:**╳ | Kayıt edeceğin kullanıcının adını yazmalısın.**}{color:BLACK}]
$onlyIf[$message[3]!=;{description:**╳ | Kayıt edeceğin kullanıcının yaşını yazmalısın.**}{color:BLACK}]
$onlyIf[$message[3]!=;{description:**╳ | Bir sayı girmelisin.**}{color:BLACK}]
$endif
$if[$getServerVar[ky]==var]
$onlyIf[$hasRoles[$authorID;$getServerVar[kyetkili]]!={description:**╳ | Kayıt yetkilisi rolün yok.**}{color:BLACK}]
$else
$onlyIf[$hasPerms[$authorID;manageroles;managenicknames]!=;{description:**╳ | Kayıt etmek için \`Rolleri Yönet\` ve \`Kullanıcı Adlarını Yönet\` yetkin olması lazım.**}{color:BLACK}]
$endif

  $onlyIf[$getServerVar[ks]!=cinsiyet;{description:**╳ | Kayıt türü cinsiyet bu komutu kullanamazsın.**}{color:BLACK}]
$suppressErrors[{description:**╳ | Botun rolünü en üste al ve öyle dene.**}{color:BLACK}]
$onlyForChannels[$getServerVar[kkanal];{description:**╳ | Burası kayıt kanalı değil.**}{color:BLACK}]
`
}