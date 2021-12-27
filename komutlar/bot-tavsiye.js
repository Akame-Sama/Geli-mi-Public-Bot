module.exports = {
  name:"bot-tavsiye",
  code:`
  $channelSendMessage[$channelID;{color:ffb0ff}{description:$customEmoji[parti] Tavsiyen Başarıyla Gönderildi}]
  $dm[$botOwnerID]
  $color[ffb0ff]
  $addTimestamp
  $title[$customEmoji[kalp] ***Bir Tavsiye Yapıldı***]
  <@$botOwnerID> Bir Tavsiye Yapıldı!
  $description[
  $customEmoji[selam] Tavsiye Yapan Kişi : \`\$userTag[$authorID]\`\
  
  
  $customEmoji[kalp_2] Hesabının Kuruluş Tarihi : \`\$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$botOwnerID;time]; years; Yıl;-1]; year; Yıl;-1];months;Ay;-1];month;Ay;-1];weeks;Hafta;-1];week;Hafta;-1];days;Gün;-1];day;Gün;-1];hours;Saat;-1];hour;Saat;-1];minutes; Dakika;-1];minute; Dakika;-1];and; ve;-1];seconds; Saniye;-1];second; Saniye;-1]\`\



  $customEmoji[parti] Yapılan Tavsiye :\`\$noMentionMessage\`\
  
  ]
  $onlyIf[$message[1]!=;$customEmoji[yasak] Lütfen Bir Tavsiye Girin]
  

  
  `
  }
