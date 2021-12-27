module.exports = {
  name: "sunucu-bilgi",
  code: `$if[$message[1]==]
         $thumbnail[$replaceText[$serverIcon;null;$userAvatar[$clientID]]]
        $author[$serverName;$replaceText[$serverIcon;null;$userAvatar[$clientID]]]
    $addField[Oluşturulma Tarihi;\`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$guildID;time];years;Yıl;-1];months;Ay;-1];week;Hafta;-1];days;Gün;-1];hours;Saat;-1];minutes;Dakika;-1];and;ve;-1];seconds;Saniye Önce Kuruldu !;-1]\`;yes]
     $addField[Kanal sayısı ($channelCount);**》🔉 \`$channelCount[voice]\` | 》💬 \`$channelCount[text]\`**;yes]
   $addField[Üye sayısı ($membersCount);**》🤖 \`$botCount\` | 》👥 \`$replaceText[$sub[$membersCount;$botCount];-;;-1]\`**;yes]
     $addField[$Sunucu ID;**》\`$guildID\`**;yes]
    $addField[Sunucu Adı;**》\`$serverName\`**;yes]
        $color[BLUE]
        $footer[$username;$userAvatar[$authorID]]
        $addTimestamp
                 $else
        $thumbnail[$replaceText[$serverIcon[$message[1]];null;$userAvatar[$clientID]]]
        $author[$serverName[$message[1]];$replaceText[$serverIcon[$message[1]];null;$userAvatar[$clientID]]]
    $addField[Oluşturulma Tarihi;\`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$message[1];time];years;Yıl;-1];months;Ay;-1];week;Hafta;-1];days;Gün;-1];hours;Saat;-1];minutes;Dakika;-1];and;ve;-1];seconds;Saniye Önce Kuruldu !;-1]\`;yes]
     $addField[Kanal sayısı ($channelCount[$message[1]]);**》🔉 \`$channelCount[voice;$message[1]]\` | 》💬 \`$channelCount[text;$message[1]]\`**;yes]
   $addField[Üye sayısı ($membersCount[$message[1]]);**》🤖 \`$botCount[$message[1]]\` | 》👥 \`$replaceText[$sub[$membersCount[$message[1]];$botCount[$message[1]]];-;;-1]\`**;yes]
     $addField[$Sunucu ID;**》\`$guildID[$message[1]]\`**;yes]
    $addField[Sunucu Adı;**》\`$serverName[$message[1]]\`**;yes]
        $color[BLUE]
        $footer[$username;$userAvatar[$authorID]]
        $addTimestamp
        $onlyIf[$isNumber[$message[1]]!=false;{title:$usertag}{descrption:**❌ | \`$message[1]\` Bir sayı değil.**}{footer:$username[$clientID]}{color:BLUE}]
        $suppressErrors[{title:$usertag}{description:**❌ | Böyle Bir sunucuda yokum.**}{footer:$username[$clientID]}{color:BLUE}]
        $endif
        `
};
