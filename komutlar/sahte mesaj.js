module.exports  = {
  name:"fake-mesaj",
  code:`
  $deletecommand
$deleteWebhook[$splitText[1];$splitText[2]]
$sendWebhook[$splitText[1];$splitText[2];$message]
$textSplit[$createWebhook[$channelID;$username[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]];yes];/]
  $cooldown[3s;Biraz Bekle !]
  $onlyIf[$checkContains[$toLowerCase[$message];@everyone;@here;https://;www.;.com;discord.gg]!=true; Eğlence Komudunu Bile Boş Kullanıyorsunuz]
  

  `
  }