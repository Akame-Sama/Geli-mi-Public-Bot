module.exports = {
  name:"cf",
  code:`
$color[ffb0ff]
$thumbnail[$userAvatar]
$description[
> Şu Anda \`\$message[1]\`\ Molar Oynadın Vee. $editIn[2s;{color:ffb0ff}{description:> Şu Anda \`\$message[1]\`\ Molar Oynadın Vee..};{color:ffb0ff}{description:> Şu Anda \`\$message[1]\`\ Molar Oynadın Vee...};> <@$authorID> Şu Anda \`\$message[1]\`\ Molar Oynadın Ve \`\ $replaceText[$replaceText[$randomText[helal;go];helal;\`\ Kazandığın Miktar \`\$multi[$message[1];2];25];go;\`\ Kaybettiğin Miktar $message[1] Molar;***$clientID[$userTag] Cf Sistemi]
   ]
  $setGlobalUserVar[para;$replaceText[$replaceText[$randomText[helal;go];helal;$sum[$getGlobalUserVar[para;$authorID];$multi[$message[1];2]];25];go;$sub[$getGlobalUserVar[para;$authorID];$message[1]];50]]
  $onlyIf[$message[1]<=$getGlobalUserVar[para;$authorID];{color:ffb0ff}{description:$customEmoji[selam] Hmmm Üzgünüm Ama Yeterli Paran Var Gereken Para \`\$math[$message[1]-$getGlobalUserVar[para]]\`\}]
  $onlyIf[$isNumber[$message[1]]!=false;{color:ffb0ff}{description:$customEmoji[yasak] Hmm Sey Yanliz Sayı Yazman Lazım!}]
  $onlyIf[$message[1]>0;{color:ffb0ff}{description:$customEmoji[yasak] Ya Üzgünüm Ama 0'ın Altında Hiçbir Değer Girmezsin}]
  $globalCooldown[12s;$customEmoji[yasak] **$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getCooldownTime[12s;globalUser;cf;$authorID];minute;Dakika];second;Saniye];s;];and;ve];hour;Saat]** sonra deneyebilirsin.]      

  `
}
