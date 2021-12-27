const morty = require("aoi.js")
const qdb = require("quick.db");
var fs = require('fs')
const bot = new morty.Bot({
    token:process.env.token,   ////En Büyük Zuzi Abi Parzi Allaj Deil Asıl Allah Zuzi | Töbe Töbe. | 😳
    prefix: ["$getServerVar[prefix]", "$getGlobalUserVar[kprefix]", "ex?"],
})

bot.onUserUpdate()
bot.onBanAdd()
bot.onBanRemove()
bot.onInviteCreate()
bot.onInviteDelete() 
bot.onEmojiCreate()
bot.onEmojiDelete()
bot.onChannelDelete()
bot.onChannelCreate()
bot.onChannelUpdate()
bot.onRoleCreate()
bot.onRoleDelete()
bot.onRoleUpdate()
bot.onLeave()
bot.onJoined()
bot.onGuildLeave()
bot.onGuildJoin()
bot.onMessageUpdate()
bot.onMessageDelete()
bot.onPresenceUpdate()
bot.onVoiceStateUpdate()
bot.onMessage({
  respondToBots: true
})



var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"))
for(const file of reader) {    
    const command = require(`./komutlar/${file}`)
    bot.command({
        name: command.name,
        aliases: command.aliases,
        bkz : command.bkz,
        code: command.code
        
    })
}

bot.readyCommand({
  channel: "",
  code: `
  $joinVc[911533917461422141]
   $log[$userTag[$clientID] İsmiyle Giriş Yapıldı
   Toplam $commandsCount Komutum Var
   Toplam $serverCount Sunucuya Hizmet Veriyorum`
});



bot.botJoinCommand({
  channel: "906921694386618388",
  code: `
$author[Bir Sunucuya Katıldım]
$description[
**Sunucu Adı:** _\`$serverName\`_
**Sunucu ID:** _\`$guildID\`_
**Üye Sayısı:** _\`$membersCount\`_
**Davet Linki:** **[[TIKLA]($getServerInvite)]**
]
$color[RANDOM]
`
});
bot.onGuildJoin();
bot.botLeaveCommand({
  channel: "906921694386618388",
  code: `
$author[Bir Sunucudan Çıktım]
$description[
**Sunucu Adı:** _\`$serverName\`_
**Sunucu ID:** _\`$guildID\`_
**Üye Sayısı:** _\`$membersCount\`_
]
$color[RANDOM]
`
});
bot.onGuildLeave();

bot.awaitedCommand({
  name: "ykayıt",
  code: `
  $giveRoles[$authorID;$getServerVar[yzüye]]
  $takeRoles[$authorID;$getServerVar[yzkayıtsız]]
  $onlyIf[$authorID!=;]
  $onlyIf[$getServerVar[yzkk]!=;]
  
  `
});

bot.command({
  name: "$alwaysExecute",
  code: `
  $changeNickname[$authorID;$noMentionMessage[1] $getServerVar[sembol] $message[2]]
  $reactionCollector[$messageID;$authorID;30s;$customEmoji[anime];ykayıt;yes]
  $title[Aaa! Aramıza Biri Katıldi $userTag[$authorID]]
  $color[ffb0ff]
  $thumbnail[$userAvatar[$authorID]]
  $footer[$userTag[$clientID] Yapay Zeka Kayıt Sistemi]
  $description[
 *** Başarıyla Kayıt Oldun*** 
 
  Kayıt Edildiğin İsim : \`\$message[1]\`\
  
  Kayıt Olduğun Yaş : \`\$message[2]\`\
  
  Artık <#$getServerVar[yzsohbetk]> Kanalında Sohbete Başlıyabilirsin! Sana <@&$getServerVar[yzüye]> Rolunü Verdim
  ]
  $channelSendMessage[$getServerVar[yzsohbetk];{color:ffb0ff}<@$authorID>{description:$customEmoji[selam] ***$serverName Adlı Sunucumuzda Başarıyla Kayıt Oldun Umarım Güzel Vakit Geçirirsin***}]
 
 
  $onlyForChannels[$getServerVar[yzkk];]
  `,
  nonPrefixed: true
});

bot.command({
  name: "oto-kayıt",
  code: `
  $if[$message[1]==sembol]
  $channelSendMessage[$channelID;{color:ffb0ff}{description:$customEmoji[selam] Sembol Başarıyla \`\ $message[2] \`\ Olarak Ayarlandı!}{footer:$userTag[$clientID] Yapay Zeka Kayıt Sistemi}]
  $onlyIf[$message[2]!=;{color:RED}{description:$customEmoji[yasak] Lütfen İsim Ile Yaşin Arasına Koyulacak Bir Sembol Girin Örneğin : \`\;  | ~ \`\}{footer:$userTag[$clientID] Yapay Zeka Kayıt Sistemi}]
  $setServerVar[sembol;$message[2]]
  $endif
  $if[$message[1]==üye-rol]
  $channelSendMessage[$channelID;{color:ffb0ff}{description:$customEmoji[selam] Üye-Rol Başarıyla <@&$mentionedRoles[1]> Olarak Ayarlandı! }{footer:$userTag[$clientID] Yapay Zeka Kayıt Sistemi}]
  $onlyIf[$mentionedRoles[1]!=;{color:RED}{description:$customEmoji[yasak] Lütfen Bir Rol Etiketleyin!}{footer:$userTag[$clientID] Yapay Zeka Kayıt Sistemi}]
  $setServerVar[yzüye;$mentioned[1]]
  $endif 
  $if[$message[1]==kayıtsız-rol]
  $channelSendMessage[$channelID;{color:ffb0ff}{description:$customEmoji[selam] Kayıtsız-Rol Başarıyla <@&$mentionedRoles[1]> Olarak Ayarlandı! }{footer:$userTag[$clientID] Yapay Zeka Kayıt Sistemi}]
  $onlyIf[$mentionedRoles[1]!=;{color:RED}{description:$customEmoji[yasak] Lütfen Bir Rol Etiketkeyin}{footer:$userTag[$clientID] Yapay Zeka Kayıt Sistemi}]
  $setServerVar[yzkayıtsız;$mentioned[1]]
  $endif
  $if[$message[1]==kayıt-kanal]
  $channelSendMessage[$channelID;{color:ffb0ff}{description:$customEmoji[selam] Kayıt-Kanal Başarıyla <#$mentionedChannels[1]> Olarak Ayarlandı}{footer:$userTag[$clientID] Yapay Zeka Kayıt Sistemi}]
  $onlyIf[$mentionedChannels[1]!=;{color:RED}{description:$customEmoji[yasak] Lütfen Bir Kanal Etiketleyin}{footer:$userTag[$clientID] Yapay Zeka Kayıt Sistemi}]
  $setServerVar[yzkk;$mentionedChannels[1]]
  $endif
  $if[$message[1]==sohbet-kanal]
  $channelSendMessage[$channelID;{color:ffb0ff}{description:$customEmoji[selam] Sohbet-Kanal Başarıyla <#$mentionedChannels[1]> Olarak Ayarlandı}{footer:$userTag[$clientID] Yapay Zeka Kayıt Sistemi}]
  $onlyIf[$mentionedChannels[1]!=;{color:RED}{description:$customEmoji[yasak] Lütfen Bir Kanal Etiketleyin}{footer:$userTag[$clientID] Yapay Zeka Kayıt Sistemi}]
  $setServerVar[yzsohbetk;$mentionedChannels[1]]
  $endif
  `
});   ////Bi Ara Yapay Zeka Kayıt Denemiştim Öyle Kaldı :{

//////Etiketlenme

bot.command({
  name: "$alwaysExecute",
  code: `
  $color[ffb0ff]
  $thumbnail[$userAvatar[$botOwnerID]]
  $title[$userTag[$clientID] Ohm Sahibim Etiketlendi!]
  $description[
\`\
Tüm Sunucularda Toplam Etiketlenme Sayısı : ***__$getVar[orhii]__***
\`\ 

\`\
Bu Sunucuda Etiketlenme Sayısı : ***__$getServerVar[orhii]__***
\`\
  
\`\
Sen Tarafından Etiketlenme Sayısı : ***__$getGlobalUserVar[orhii]__***
\`\
  
  ]
  $setServerVar[orhii;$math[$getServerVar[orhii]+1]]
  $setVar[orhii;$math[$getVar[orhii]+1]]
  $setGlobalUserVar[orhii;$math[$getGlobalUserVar[orhii]+1]]
  $onlyIf[$checkContains[$message;<@$botOwnerID>]==true;]
  `,
  nonPrefixed: true
});

bot.command({
  name: "sa",
  code: `
  $reply[$messageID;{color:RANDOM}{description:Aleyküm Selam Hoşgeldim}{thumbnail:$userAvatar};yes]
  $onlyIf[$getServerVar[saas]!=kapalı;]
  $onlyIf[$message==;]
  `,
  nonPrefixed: true
});

bot.command({
  name: "Selam",
  code: `
  $reply[$messageID;{color:RANDOM}{description:Aleyküm Selam Hoşgeldim}{thumbnail:$userAvatar};yes]
  $onlyIf[$getServerVar[saas]==kapalı;]
  $onlyIf[$message==;]
  `,
  nonPrefixed: true
});

//////////////Link Engel///////

bot.command({
  name: "$alwaysExecute",
  code: `
$title[]
$description[🦄<@$authorID> Uwu Link Severim 🐂(\`\Yakalandın Kardeşim\`\)]
$deletecommand
$onlyIf[$checkContains[$toLowercase[$message];https;http;discord.gg;youtube.com]==true;]
$onlyIf[$isAdmin[$authorID]!=true;]
$onlyIf[$getServerVar[link]!=linkkapalı;]
$onlyPerms[admin;]
$deleteIn[10s]
`
});
////////____Embedli Hoşgeldin-Baybay___////////

bot.joinCommand({
  channel: "$getServerVar[ehg]",
  code: `
  $if[$isBot!=true]
  $channelSendMessage[$getServerVar[ehg];{color:RANDOM}{thumbnail:$userAvatar}{description:☆Sunucuya Bir Kişi Giriş Yaptı(\`\$authorID\`\) ☆ Başarıyla <@&$getServerVar[erl]> Rolü Verildi}
  $giveRoles[$authorID;$getServerVar[erl]]                                            
  $endif
  $if[$isBot!=false]
  $channelSendMessage[$getServerVar[ehg];{color:RANDOM}{thumbnail:$userAvatar}{description:☆Sunucuya Bir Bot Giriş Yaptı(\`\$authorID\`\) ☆ Başarıyla <@&$getServerVar[brl]> Rolü Verildi }
  $giveRoles[$authorID;$getServerVar[brl]]                                                 
  $endif
  
  
  `
});

bot.leaveCommand({
  channel: "$getServerVar[ebg]",
  code: `
  $color[RANDOM]
  $thumbnail[$userAvatar[$authorID]]
  $addTimestamp
  $footer[$getServerVar[anaisim]]
  $description[
  ☆Sunucudan $userTag[$authorID] Çıkış Yaptı
☆Böylece Sunucumuz \`\$membersCount\`\ Kişi Kaldık
]
`
});

////////////////Snipe

bot.deletedCommand({
  channel: "$channelID",
  code: `
  $setServerVar[snipe1;$authorID]
  $setServerVar[snipe2;$message]
  $setServerVar[snipe3;$channelID]
  $setServerVar[snipe4;$day $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$month;January;Ocak];February;Şubat];March;Mart];April;Nisan];May;Mayıs];June;Haziran];July;Temmuz];August;Ağustos];September;Eylül];October;Ekim];November;Kasım];December;Aralık] $year - $sum[3;$hour]:$minute]
  $onlyIf[$isBot[$authorID]==false;]
  `
});

////////////////Otoban

bot.leaveCommand({
  channel: "$getServerVar[otobanlog]",
  code: `
  $ban[$authorID]
  $color[RANDOM]
  $title[***Otoban-Sistemi***]
  $thumbnail[$userAvatar[$authorID]]
  $description[
  ☆ $userTag[$authorID] Sunucudan Çıkış Yaptığı İçin Ban Yedi]
  $onlyIf[$getServerVar[otoban]!=kapalı;]
  `
});

////////////Herkese-Rol-Ver/Al

//////Ver

bot.awaitedCommand({
  name: "herkeserver",
  code: `
  $giveRoles[$authorID;$mentionedRoles[1]]
  `
});

bot.awaitedCommand({
  name: "herkeseral",
  code: `
  $takeRoles[$authorID;$mentionedRoles[1]]
  `
});

/////////Toplu-Ban

bot.awaitedCommand({
  name: "extrax",
  code: `
$suppressErrors
  $ban[$authorID]
`
});

//////////Çekiliş


bot.command({
name:"çekiliş",
code:`$editmessage[$get[e];{author:🎉 Çekiliş (Bitti) 🎉:}{thumbnail:$servericon}{title:$get[prize]}{description:**Çekilişi Başlatan: #COLON#** <@$authorid>\n**Kazanan:** <@$get[winner]>\n**Bitiş Tarihi** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**$get[participated]** Kullnaıcı çekilişe katıldı.}{footer:Ended at:}{timestamp:$get[endstamp]}{color:BLUE}]
$sendmessage[**Tebrikler** <@$get[winner]> Sen Kazandın!\n **Ödülün:** \`$get[prize]\`;no]
$onlyif[$getmessagevar[ended]==false;]
$onlyif[$get[winner]!=;Kimse kazanmadı!]
$setmessagevar[ended;true;$get[e]]
$let[winner;$randomtext[$joinsplittext[;]]]
$removetextsplitelement[$gettextsplitlength]
$textsplit[$getmessagevar[joinedusers;$get[e]];@]
$let[participated;$getmessagevar[joined;$get[e]]]
$wait[$get[time]]
$setmessagevar[endstamp;$get[endstamp];$get[e]]
$setmessagevar[hoster;$authorid;$get[e]]
$setmessagevar[prize;$get[prize];$get[e]]
$let[e;$apimessage[$channelid;;{author:🎉 Çekiliş 🎉:}{thumbnail:$servericon}{title:$get[prize]}{description:**Çekilişi Başlatan: #COLON#** <@$authorid>\n**Nº Kazanan:** 1\n**Bitiş Tarihi** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**Kimse** bu çekilişe katılmadı.}{footer:Bitiş Tarihi:}{timestamp:$get[endstamp]}{color:BLUE};{actionRow:🎊 Katıl 🎊,2,3,join:🔁 Tekrar Çek 🔁,2,1,reroll:🔚 Bitir 🔚,2,4,end};;yes]]
$let[endstamp;$sum[$datestamp;$ms[$get[time]]]]
$let[prize;$messageslice[1]]
$onlyif[$ms[$get[time]]!=undefined;Geçersiz süre sağlandı.]
$let[time;$message[1]]
$onlyif[$message[2]!=;
Bir zaman ve bir ödül girin.]`}) 
bot.onInteractionCreate()
bot.interactionCommand({
name:"join",
prototype:"button",
code:`$editmessage[$get[msg];{author:🎉 Çekiliş 🎉:}{thumbnail:$servericon}{title:$get[prize]}{description:**Çekilişi Başlatan: #COLON#** <@$get[host]>\n**Nº Kazanan:** 1\n**Bitiş Tarihi** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**$get[participated]** Kullanıcı bu çekilişe katıldı.}{footer:Bitiş Tarihi:}{timestamp:$get[endstamp]}{color:BLUE}]
$setmessagevar[joinedusers;$getmessagevar[joinedusers;$get[msg]]$authorid@;$get[msg]]
$setmessagevar[joined;$get[participated];$get[msg]]
$onlyif[$get[condition]==false;]
$interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];false;<@$authorid> Çekilişe katıldın];true;Çekilişe zaten katıldınız];ended;Çekiliş sona erdi];;;64]
$let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];true;ended];false;$get[condition]]]
$let[condition;$checkcontains[$getmessagevar[joinedusers;$interactiondata[message.id]];$authorid]]
$let[participated;$sum[$getmessagevar[joined;$get[msg]];1];$get[msg]]
$let[host;$getmessagevar[hoster;$get[msg]]]
$let[endstamp;$getmessagevar[endstamp;$get[msg]]]
$let[prize;$getmessagevar[prize;$get[msg]]]
$let[msg;$interactiondata[message.id]]`}) 
bot.interactionCommand({
name:"reroll",
prototype:"button",
code:`$editmessage[$get[e];{author:🎉 Çekiliş (YENİDEN ÇEKİLDİ) 🎉:}{thumbnail:$servericon}{title:$get[prize]}{description:**Çekilişi Başlatan: #COLON#** <@$authorid>\n**Tekrar Çekildi Yeni Kazanan:** <@$get[winner]>\n**Bitiş Tarihi** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**$get[participated]** 
Kullanıcı bu çekilişe katıldı}{footer:Bitiş Tarihi:}{timestamp:$get[endstamp]}{color:BLUE}]
$sendmessage[**Tebrikler** <@$get[winner]> Tekrar çekildi ve sen kazandın!\n **Ödülün:** \`$get[prize]\`;no]
$onlyif[$get[winner]!=;Katılım eksikliği nedeniyle kazanan belirlenmedi]
$setmessagevar[ended;true;$get[e]]
$let[winner;$randomtext[$joinsplittext[;]]]
$removetextsplitelement[$gettextsplitlength]
$textsplit[$getmessagevar[joinedusers;$get[e]];@]
$let[participated;$getmessagevar[joined;$get[e]]]
$let[e;$get[msg]]
$onlyif[$get[condition]==perform;]
$interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];perform;Çekilişi yeniden düzenlendi];true;Bu çekiliş henüz bitmedi];false;Yeterli izniniz yok];;;64]
$let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];true;$replacetext[$replacetext[$get[condition];true;perform];false;false]];false;$get[condition]]]
$let[condition;$hasperms[$authorid;manageserver]]
$let[host;$getmessagevar[hoster;$get[msg]]]
$let[endstamp;$getmessagevar[endstamp;$get[msg]]]
$let[prize;$getmessagevar[prize;$get[msg]]]
$let[msg;$interactiondata[message.id]]`}) 
bot.interactionCommand({
name:"end",
prototype:"button",
code:`$editmessage[$get[e];{author:🎉 Çekiliş (SONA ERDİRİLDİ) 🎉:}{thumbnail:$servericon}{title:$get[prize]}{description:**Çekilişi Başlatan: #COLON#** <@$authorid>\n**Çekiliş Sona Erdirildi Kazanan:** <@$get[winner]>\n**Bitiş Tarihi** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**$get[participated]** 
Kullanıcı bu çekilişe katıldı}{footer:Bitiş Tarihi:}{timestamp:$get[endstamp]}{color:BLUE}]
$sendmessage[**Tebrikler** <@$get[winner]> Sen kazandın!\n **Ödülün:** \`$get[prize]\`;no]
$onlyif[$get[winner]!=;Katılım eksikliği nedeniyle kazanan belirlenmedi]
$setmessagevar[ended;true;$get[e]]
$let[winner;$randomtext[$joinsplittext[;]]]
$removetextsplitelement[$gettextsplitlength]
$textsplit[$getmessagevar[joinedusers;$get[e]];@]
$let[participated;$getmessagevar[joined;$get[e]]]
$let[e;$get[msg]]
$onlyif[$get[condition]==perform;]
$interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];perform;Çekiliş Bitirildi];true;Bu çekiliş zaten bitmiş];false;Yeterli iznin yok.];;;64]
$let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];false;$replacetext[$replacetext[$get[condition];true;perform];false;false]];true;$get[condition]]]
$let[condition;$hasperms[$authorid;manageserver]]
$let[host;$getmessagevar[hoster;$get[msg]]]
$let[endstamp;$getmessagevar[endstamp;$get[msg]]]
$let[prize;$getmessagevar[prize;$get[msg]]]
$let[msg;$interactiondata[message.id]]`}) 




  





///////////Ticket Sistemi

bot.command({
  name: "$alwaysExecute",
  code: `
  $useChannel[$get[ticket]]
  $clear[1]
  $wait[1s]
  $setServerVar[ticket;$sum[$getServerVar[ticket];1]]
  $reactionCollector[$get[kapat];everyone;24d;❌;eminmisin;yes]
$pinMessage[$get[ticket];$get[kapat]]
$let[kapat;$channelSendMessage[$get[ticket];$replaceText[$getServerVar[tmesaj1];-etiket-;<@$authorID>;-1]{description:
**$replaceText[$getServerVar[tmesaj2];-etiket-;<@$authorID>;-1]**

**Ticket'ı açarken şu mesajı girdin:** $message

**Ticket'ı kapatmak için aşşağıdaki <:zt_red:852916499584122920> tepkisine basınız ya da \`zt.ticket-kapat\` kodunu giriniz.**}{color:ffdbfe};yes]]
$modifyChannelPerms[$get[ticket];-viewchannel;$guildID]
$let[ticket;$newTicket[$username・$sum[$getServerVar[ticket];1];.{delete:1s};$getServerVar[ticketk2];yes;<:zt_red:852916499584122920> **!!HATA!!**]]

  $wait[1s]
    $deletecommand
     
$onlyForChannels[$getServerVar[ticketk];]
`
});
bot.awaitedCommand({
  name: "eminmisin",
  code: `
$reactionCollector[$get[id];$authorID;24d;☑️,❌;evet,hayır;yes]
$let[id;$channelSendMessage[$channelID;{description:
 **Eğer Kapatmak İstiyorsanız ☑️ Tepkisine Basınız.**
 
 **Eğer Kapatmak İstemiyorsanız ❌ Tepkisine Basınız.**}{color:ffdbfe}
 ;yes]]


 `
});
bot.awaitedCommand({
  name: "evet",
  code: `
$channelSendMessage[$channelID;**Sayın Yetkililer Ticket Kullanıcıya Kapatılmıştır Lütfen \`.ticket kapat\` komudunu kullanın.**]
$wait[1s]
$modifyChannelPerms[$channelID;-viewchannel;-sendmessages;$authorID]
 $wait[3s]
 $channelSendMessage[$channelID;☑️ Ticket 3 saniye içerisinde kapanacak!;no]


 `
});
bot.awaitedCommand({
  name: "hayır",
  code: `
 $channelSendMessage[$channelID;☑️ İşlem iptal edildi.;no]
 `
});
bot.command({
  name: "ticket",
  code: `
$if[$message[1]==kapat]
 $closeTicket[❌ Hata! Ticket'ı Kapatamadım!]
 $wait[3s]
 $channelSendMessage[$channelID;☑️ Ticket 3 saniye içerisinde kapanacak!;no]
  $else
  $description[❌ \`$getServetVar[prefix]ticket kapat\`]
  $color[ffdbfe]
  $endif
  $onlyIf[$hasPerms[$authorID;admin]!=false;❌ Lütfen \`zt.ticket-kapat\` komutunu kullanınız.]
  $onlyIf[$isTicket[$channelID]!=false;❌ Burası ticket kanalı değil.]
`
});
bot.command({
  name: "ticket-kapat",
  code: `
$reactionCollector[$get[id];$authorID;24d;☑️,❌;evet1,hayır1;yes]
$let[id;$channelSendMessage[$channelID;{description:
 **Eğer Kapatmak İstiyorsanız ☑️ Tepkisine Basınız.**
 
 **Eğer Kapatmak İstemiyorsanız ❌ Tepkisine Basınız.**}{color:ffdbfe}
 ;yes]]


 `
});
bot.awaitedCommand({
  name: "evet1",
  code: `
$channelSendMessage[$channelID;**Sayın Yetkililer Ticket Kullanıcıya Kapatılmıştır Lütfen \`.ticket kapat\` komudunu kullanın.**]
$wait[1s]
$modifyChannelPerms[$channelID;-viewchannel;-sendmessages;$authorID]
 $wait[3s]
 $channelSendMessage[$channelID;☑️ Ticket 3 saniye içerisinde kapanacak!;no]


 `
});
bot.awaitedCommand({
  name: "hayır1",
  code: `
 $channelSendMessage[$channelID;☑️ İşlem iptal edildi.;no]
 `
});
bot.command({
  name: "ticket-kanal",
  code: `
   $if[$message[1]==ayarla]
$setServerVar[ticketk;$mentionedChannels[1]]
$description[☑️ Ticket kanalı <#$mentionedChannels[1]> olarak ayarlandı.]
$color[ffdbfe]
$onlyIf[$mentionedChannels[1]!=;❌ Bir kanal etiketlemelisin]
$onlyIf[$hasPerms[$authorID;admin]!=false;❌ Üzgünüm Bu Komut İçin \`Yönetici\` yetkin olması lazım.]
$endif
$if[$message[1]==sıfırla]
$setServerVar[ticketk;]
$description[☑️ Ticket kanalı sıfırlandı.]
$color[ffdbfe]
$onlyIf[$hasPerms[$authorID;admin]!=false;❌ Üzgünüm Bu Komut İçin \`Yönetici\` yetkin olması lazım.]
$endif
$onlyIf[$message[1]!=;❌ \`.ticket-kanal ayarla | .ticket-kanal sıfırla\`]
     $suppressErrors
     $onlyIf[$getglobalUserVar[kural]!=no;{description:$customEmoji[selam] Lütfen Önce Kurraları Onayla!}{color:ffb0ff}{execute:kitap2}{delete:5s}]

`
});
bot.command({
  name: "ticket-kategori",
  code: `
  $if[$message[1]==ayarla]
$setServerVar[ticketk2;$message[2]]
$description[☑️ Ticket kategorisi ayarlandı.]
$color[ffdbfe]
$onlyIf[$message[2]!=;❌ Bir kategori idsi girmelisin]
$onlyIf[$hasPerms[$authorID;admin]!=false;❌ Üzgünüm Bu Komut İçin \`Yönetici\` yetkin olması lazım.]
$endif
$if[$message[1]==sıfırla]
$setServerVar[ticketk2;]
$description[☑️ Ticket kanalı sıfırlandı.]
$color[ffdbfe]
$onlyIf[$hasPerms[$authorID;admin]!=false;❌> Üzgünüm Bu Komut İçin \`Yönetici\` yetkin olması lazım.]
$endif
$onlyIf[$message[1]!=;❌ \`.ticket-kategori ayarla | .ticket-kategori sıfırla\`]
     $suppressErrors
     $onlyIf[$getglobalUserVar[kural]!=no;{description:$customEmoji[selam] Lütfen Önce Kurraları Onayla!}{color:ffb0ff}{execute:kitap2}{delete:5s}]

`
});
bot.command({
  name: "ticket-sistemi",
  code: `
  $author[Ticket Sistemi;$authorAvatar]
  $addField[Kelimeler;\`-etiket-\` > <@$authorID>;yes]
  $addField[Embed Mesaj;\`.ticket-embed-mesaj ayarla | .ticket-embed-mesaj sıfırla\`;yes]
  $addField[Mesaj;\`.ticket-mesaj ayarla | .ticket-mesaj sıfırla\`;yes]
  $addField[Ticket Kategori;\`.ticket-kategori ayarla | .ticket-kategori sıfırla\`;yes]
  $addField[Ticket Kanal;\`.ticket-kanal ayarla | .ticket-kanal sıfırla\`;yes]
   $color[ffdbfe]
        $thumbnail[$serverIcon]
        $onlyIf[$getglobalUserVar[kural]!=no;{description:$customEmoji[selam] Lütfen Önce Kurraları Onayla!}{color:ffb0ff}{execute:kitap2}{delete:5s}]

  `
});
bot.command({
  name: "ticket-mesaj",
  code: `
   $if[$message[1]==ayarla]
$setServerVar[tmesaj1;$messageSlice[1]]
$description[☑️ Ticket  mesajı \`$messageSlice[1]\` olarak ayarladım.]
$color[ffdbfe]
$onlyIf[$messageSlice[1]!=;❌ Bir mesaj girmelisin.]
$onlyIf[$hasPerms[$authorID;admin]!=false;❌ Üzgünüm Bu Komut İçin \`Yönetici\` yetkin olması lazım.]
$endif
$if[$message[1]==sıfırla]
$resetServerVar[tmesaj1]
$description[☑️ Ticket  mesajı sıfırlandı.]
$color[ffdbfe]
$onlyIf[$hasPerms[$authorID;admin]!=false;❌ Üzgünüm Bu Komut İçin \`Yönetici\` yetkin olması lazım.]
$endif
$onlyIf[$message[1]!=;❌ \`.ticket-mesaj ayarla | .ticket-mesaj sıfırla\`]
     $suppressErrors
     $onlyIf[$getglobalUserVar[kural]!=no;{description:$customEmoji[selam] Lütfen Önce Kurraları Onayla!}{color:ffb0ff}{execute:kitap2}{delete:5s}]

`
});
bot.command({
  name: "ticket-embed-mesaj",
  code: `
   $if[$message[1]==ayarla]
$setServerVar[tmesaj2;$messageSlice[1]]
$description[☑️ Ticket embed mesajı \`$messageSlice[1]\` olarak ayarladım.]
$color[ffdbfe]
$onlyIf[$messageSlice[1]!=;❌ Bir mesaj girmelisin.]
$onlyIf[$hasPerms[$authorID;admin]!=false;❌ Üzgünüm Bu Komut İçin \`Yönetici\` yetkin olması lazım.]
$endif
$if[$message[1]==sıfırla]
$resetServerVar[tmesaj2]
$description[☑️ Ticket embed mesajı sıfırlandı.]
$color[ffdbfe]
$onlyIf[$hasPerms[$authorID;admin]!=false;❌ Üzgünüm Bu Komut İçin \`Yönetici\` yetkin olması lazım.]
$endif
$onlyIf[$message[1]!=;❌ \`.ticket-embed-mesaj ayarla | .ticket-embed-mesaj sıfırla\`]
     $suppressErrors
     $onlyIf[$getglobalUserVar[kural]!=no;{description:$customEmoji[selam] Lütfen Önce Kurraları Onayla!}{color:ffb0ff}{execute:kitap2}{delete:5s}]

`
});
//////Bot-Engel

/////Spam Engel

bot.command({
  name: "$alwaysExecute",
  code: `
$setServerVar[spammessage;$message;$authorID]
$onlyIf[$getServerVar[spam]!=kapalı;]
`
});

bot.command({
  name: "$alwaysExecute",
  code: `
$setServerVar[spamsayı;$math[$getServerVar[warn;$authorID]+1];$authorID]
$onlyIf[$getServerVar[spamsayı;$authorID]<=5;{execute:spam}]
$onlyIf[$message==$getServerVar[spammessage;$authorID];]
$onlyIf[$getServerVar[spam]!=kapalı;]
`
});

bot.awaitedCommand({
  name: "spam",
  code: `
$setServerVar[spamsayı;0;$authorID]
$color[ffb0ff]
$thumbnail[$userAvatar[$authorID]]
$addTimestamp
$footer[$userTag[$authorID] Kişisinin Tam \`\$getServerVar[spamuyarı;$authorID]\`\ Uyarısı Oldu]
$description[
$customEmoji[anime] Spam Yaptığından Dolayı Seni Uyardım!
]
$setServerVar[$math[$getServerVar[warn;$authorID]+1];$authorID]
$setServerVar[$math[$getServerVar[spamuyarı;$authorID]+1];$authorID]

`
});
///////Kayıt-Sistemi

bot.joinCommand({
  channel: "$getServerVar[kkanal]",
  code: `$if[$getServerVar[otorol]==aç]
$giveRole[$authorID;$getServerVar[kayıtsız]]
$endif
$if[$getServerVar[otoisim2]==evet]
$elseIf[$getServerVar[otoisim]==1]
$changeNickname[$authorID;$getServerVar[tag] Kayıtsız]
$endelseIf
$elseIf[$getServerVar[otoisim]==2]
$changeNickname[$authorID;$getServerVar[tag] İsim $getServerVar[sembol] Yaş]
$endelseIf
$endif
$replaceText[$replaceText[$getServerVar[özelmesaj];-isim-;$username;-1];-etiket-;<@$authorID>]
$setUserVar[kt1;$day/$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$month;January;01;-1];February;02;-1];March;03;-1];April;04;-1];May;05;-1];June;06;-1];July;07;-1];August;08;-1];September;09;-1];October;10;-1];November;11;-1];December;12;-1]/$year $sum[3;$hour]:$minute:$second;$authorID]
`
});
bot.awaitedCommand({
  name: "kayıtsayı",
  code: `$setUserVar[kayıtsayı;0;$authorID]
$setUserVar[sonkayıt;Yok;$authorID]`
});


//////////Apili-HgBb

bot.joinCommand({
  channel: "$getServerVar[hgbb2]",
  code: `$attachment[https://ieleseno.sirv.com/anycard?text.0.text=$uri[encode;$userTag]&text.0.position.x=-50%25&text.0.position.y=-63%25&text.0.size=45&text.0.color=ffffff&text.0.font.family=Neucha&text.0.font.weight=600&text.1.text=Welcome&text.1.position.x=-50%25&text.1.position.y=-44%25&text.1.size=45&text.1.color=ffffff&text.1.font.family=Neucha&text.1.font.weight=600&text.2.text=Members%0A$membersCount&text.2.position.x=-50%25&text.2.size=45&text.2.color=ffffff&text.2.font.family=Neucha&text.2.font.weight=600;welcome.png]`
});
bot.leaveCommand({
  channel: "$getServerVar[hgbb2]",
  code: `$attachment[https://ieleseno.sirv.com/anycard?text.0.text=$uri[encode;$userTag]&text.0.position.x=-50%25&text.0.position.y=-63%25&text.0.size=45&text.0.color=ffffff&text.0.font.family=Neucha&text.0.font.weight=600&text.1.text=Bay%20Bay&text.1.position.x=-50%25&text.1.position.y=-44%25&text.1.size=45&text.1.color=ffffff&text.1.font.family=Neucha&text.1.font.weight=600&text.2.text=Members%0A$membersCount&text.2.position.x=-50%25&text.2.size=45&text.2.color=ffffff&text.2.font.family=Neucha&text.2.font.weight=600;welcome.png]`
});

/////Pre Kodu Sunucuya  Özel HgBb

bot.joinCommand({
  channel: "9072747288382",
  code: `

  
  
      🎉   Valencia' ya hoş geldin <@$authorID>   🎉


••❯ Hesabın $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$authorID;time]; years; Yıl;-1]; year; Yıl;-1];months;Ay;-1];month;Ay;-1];weeks;Hafta;-1];week;Hafta;-1];days;Gün;-1];day;Gün;-1];hours;Saat;-1];hour;Saat;-1];minutes; Dakika;-1];minute; Dakika;-1];and; ve;-1];seconds; Saniye;-1];second; Saniye;-1] önce oluşturulmuş $customEmoji[extrax_tick]

••❯ Sunucu kurallarımız <#903366677264216064> kanalında belirtilmiştir. Unutma sunucu içerisinde ki ceza işlemlerin kuralları okuduğunu varsayarak gerçekleştirilecek.

••❯ Sunucumuzun $membersCount. üyesisin! Tagımızı (乡) alarak bizlere destek olabilirsin. Kayıt olmak için teyit odalarına girip ses teyit vermen gerekiyor yetkililerimiz seninle ilgilenecektir! İyi eğlenceler.


$customEmoji[yuklenio] #Registration Kanalına girerek saniyeler içerisinde kayıt olabilirsiniz. <

  
  
  $onlyForServers[859686735151154;]
  `
});

///////-------Tagrol------//////

bot.command({
  name: "$alwaysExecute",
  code: `
  $forEachMember[tagrol]
  $serverCooldown[5s]
  $onlyIf[$authorID!=;]
  $onlyIf[$getServerVar[tagk]!=kapalı;]
  `
});

bot.awaitedCommand({
  name: "tagrol",
  code: `
$if[$checkContains[$toLowercase[$userTag];$getServerVar[tag]]==true]
$channelSendMessage[$getServerVar[taglog];{author:$userTag:$authorAvatar}{description:<@$authorID> (\`$authorID\`) adlı üye tagımızı aldı ve <@&$getServerVar[tagrol]> rolü verildi!}{color:GREEN}{thumbnail:$authorAvatar}]

$giveRoles[$authorID;$getServerVar[tagrol]]
$onlyIf[$hasRole[$authorID;$getServerVar[tagrol]]==false;]
$endif

$if[$checkContains[$toLowercase[$userTag];$getServerVar[tag]]==false]
$channelSendMessage[$getServerVar[taglog];{author:$userTag:$authorAvatar}{description:<@$authorID> (\`$authorID\`) adlı üye tagımızı bıraktı ve <@&$getServerVar[tagrol]> rolü alındı!}{color:RED}{thumbnail:$authorAvatar}]

$takeRoles[$authorID;$getServerVar[tagrol]]
$onlyIf[$hasRole[$authorID;$getServerVar[tagrol]]==true;]
$endif
$onlyIf[$authorID!=;]
$onlyIf[$getServerVar[tagk]!=kapalı;]
`
});

//////Sayaç Sistemi

bot.joinCommand({
  channel: "$getServerVar[sk]",
  code: `
  $title[$customEmoji[selam] \`\$userTag[$authorID] Aramıza Katıldı Hedefimize \`\$math[$getServerVar[ss]-$membersCount]\`\ Kişi Kaldı]
  $image[$getServerVar[si]]
  $addTimestamp
  $onlyIf[$membersCount>$getServerVar[ss];{color:ffb0ff}<@$ownerID>{description:Uwu Hedefini Geçtin Lütfen Sistemi Tekrar Ayarla}{thumbnail:$userAvatar}]
  $onlyIf[$membersCount==$getServerVar[ss],{color:ffb0ff}<@$ownerID>{description:$customEmoji[parti] Tebrikler Hedefinize Ulaştınız Bu Yolda Devam Edin}{thumbnail:$userAvatar}]
`
});

//////Ses Log

bot.voiceStateUpdateCommand({
channel:"$getServerVar[seslog]",
code:`
<#$newState[channelID]>
$author[$userTag[$newState[id]];$serverIcon]
$description[<@$newState[id]> Adlı üye **$newState[channelName] ( \`$newState[channelID]\` )** adlı ses kanalına giriş yaptı.]
$color[$getServerVar[hex]]
$thumbnail[$userAvatar[$newState[id]]]
$onlyIf[$newState[channelID]!=;]
$onlyIf[$oldState[channelID]==;]
`
})

bot.voiceStateUpdateCommand({
channel:"$getServerVar[seslog]",
code:`
<#$oldState[channelID]>
$author[$userTag[$oldState[id]];$serverIcon]
$description[<@$oldState[id]> Adlı üye **$oldState[channelName] ( \`$oldState[channelID]\` )** adlı ses kanalından çıkış yaptı.]
$color[$getServerVar[hex]]
$thumbnail[$userAvatar[$oldState[id]]]
$onlyIf[$newState[channelID]==;]
$onlyIf[$oldState[channelID]!=;]
`
})


bot.channelDeleteCommand({
channel:"$getServerVar[guardlog]",
code:`$createChannel[$oldChannel[name];$oldChannel[type];no;$oldChannel[categoryID]]
$author[$oldChannel[name];$serverIcon]
$description[Bir kanal silindi ve geri ekledim

> Silinen kanal: **$oldChannel[name]**

> Silinen kanal ID: **$oldChannel[id]]
$footer[$serverName;$serverIcon]
$color[$getServerVar[hex]]
$thumbnail[$serverIcon]

$onlyIf[$getServerVar[kk]!=kapalı;]
`
})


//////-------Emoji-Koruma------////


bot.emojiDeleteCommand({
channel:"$getServerVar[guardlog]",
code:`$addEmoji[$oldEmoji[url];$oldEmoji[name]]
$author[$oldEmoji[name];$oldEmoji[url]]
$description[Bir emoji silindi

> Emoji ismi: **$oldEmoji[name]**

> Emoji id'si: **$oldEmoji[id]**

> Emoji linki: ** [Tıkla]($oldEmoji[url]) **]
$footer[$serverName;$oldEmoji[url]]
$color[$getServerVar[hex]]
$thumbnail[$oldEmoji[url]]
$onlyIf[$getServerVar[ek]!=kapalı;]

`
}) 

//////-------Emoji-Koruma------////




//////-------Rol-Koruma------////


bot.roleDeleteCommand({
channel:"$getServerVar[guardlog]",
code:`$createRole[$oldRole[name];$oldRole[color];$oldRole[mentionable];$oldRole[hoist];$oldRole[position]]
$author[$oldRole[name];$serverIcon]
$description[Bir rol silindi ve geri ekledim

> Silinen rol: **$oldRole[name]**

> Rol rengi: **$oldRole[color]**

> Rol izinleri: **$oldRole[permissions]**]
$footer[$serverName;$serverIcon]
$color[$getServerVar[hex]]
$thumbnail[$serverIcon]
$onlyIf[$getServerVar[rk]!=kapalı;]
`
}) 

//////-------Rol-Koruma------//// 



bot.status({
  text: "Nezuko-Chan",
  type: "COMPETING",
  status: "dnd",
  time: 12
});

bot.status({
  text: "Müjde! DB Sıfırlandı Sistemleri Yeniden Ayarlayın",
  type: "COMPETING",
  status: "dnd",
  time: 12
});



bot.status({
  text: "$userTag[$botOwnerID]",
  type: "WATCHING",
  status: "dnd",
  time: 12
});

bot.status({
  text:
    "Rick Code Gelirsim Dimi Efsane Kodlar Var? => https://discord.gg/phwj3NcMt5",
  type: "LISTENING",
  status: "dnd",
  time: 12
});

bot.status({
  text:
    "$serverCount Sunucu | $allMembersCount Kişi | Geliştiricim : $userTag[$botOwnerID]",
  type: "COMPETING",
  status: "dnd",
  time: 12
});
bot.variables({
  admin:"{color:$getServerVar[hex]}{description:> $getServerVar[rick_carpi] | Üzgünüm Ama Admin Yetkin Yok}{thumbnail:$userAvatar}",
  rick_tick:"<<:mtick:918491401631719485>918491401631719485>", ///Tik Emoji İD
  rick_carpi:"<a<a:yasak:856123802654998568>856123802654998568>",  ///Carpi Emoji İD
  rk:"kapalı", ///ELLEŞME_1
  kk:"kapalı", ///ELLEŞME_2
  ek:"kapalı", ///ELŞME_3
  guardlog:"",
  hex:"BDAAF9",
  bankap:"0",
  kredi:"0",
  level: "500",
  analvl: "0",
  şarkı: "",
  roll: "",
  seslog: "",
  sess: "kapalı",
  kprefix: "ex-",
  abonep: "0",
  aboney: "",
  aboner: "",
  abonel: "",
  abone: "0",
  ahban: "kapalı",
  ahrol: "",
  ahrolk: "kapalı",
  spamuyarı: "0",
  si: "",
  ss: "0",
  sk: "",
  avatar: "",
  yzkk: "",
  yzkayıtsız: "",
  yzüye: "",
  yzsohbetk: "",
  orhii: "0",
  meslekler: "",
  meslek: "",
  tagk: "kapalı",
  kural: "yes",
  help: "",
  cf: "$message[1] Kaybettin",
  psorumlusu: "",
  psorumlusuu: "hayır",
  ptext: "",
  ptextt: "hayır",
  pkanal: "",
  pkanall: "hayır",
  plog: "",
  plogg: "hayır",
  partner: "kapalı",
  ps: "no",
  para: "0",
  hgbb2: "",
  ahesap: "",
  ahg: "30",
  sayısayma: "0",
  sayıkanal: "",
  afks: "",
  afk: "hayır",
  afkss: "",
  afkmm: "0",
  afkc: "0",
  afkkk: "0",
  afkaa: "Kimse Etiketlememiş",
  tavsiyelog: "",
  tavsiyeyetkili: "",
  abonesistemi: "kapalı",
  abonerol: "", ////Abone Sistemi Seysi
  abonelog: "", //////""
  aboneyetkili: "", ////""
  spam: "kapalı", /////Spam Koruma
  spammessage: "",
  spamsayı: "0",
  nah: "", /////Renk Kodu Icin
  ticket: "0",
  ticketk: "",
  ticketk2: "",
  tmesaj1: "-etiket-",
  tmesaj2: "**`$usertag` birazdan bir yetkili gelip senle ilgilenecek.**",
  botizin: "", ////// Bot Izin
  botengelog: "", ////Bot Engel Log
  botengel: "kapalı", ////Bot Engel Ac Kapat
  warn: "0", /////Warn Sayısı Avi
  warny: "", ////// Warn Yetkili
  warnlog: "", /////Warn Log
  warnsistemi: "kapalı", ////Warn Sistemi Ac Gapa
  banlayan: "", ////Banlayan Abi
  bansebep: "", ////Ban Sebep
  banlog: "", /////Ban Sistemi Log
  banhummer: "", ///////Ban Sistemi Yetkili Rol
  dmduyuru: "", ///////Dm-Duyuru
  endstamp: "0", //////Çekiliş Sistemi
  hoster: "",
  prize: "",
  joined: "",
  joinedusers: "",
  ended: "false", ////////Cekiliş Sistem
  tagüyerol: "",
  tagrol: "", /////Tag Sistemi Icin Rol
  taglog: "", ///// "   "       "   Log
  tag: "🥰", ////Tag Sistemi Icin Tag
  otoban: "kapalı",
  otobanayarlayan: "", ///////Oto Ban Sistemi Açan/kapatan abi
  otobanlog: "", /////// Oto Ban Sistemi Log Kanalk
  otobanlogayarlayan: "", ///// Oto Ban Log Ayarlayan Abi
  snipe1: "", ////snipe mesaj
  snipe2: "", ///// snipe kanal
  snipe3: "", ///snipe silen
  snipe4: "",
  erl: "", /////embedli rol
  brl: "", /////bot rol
  ehg: "", ////embedli hg
  ebg: "", //// embedli bb
  saas: "kapalı", //////Sa-As Sistemi
  link: "linkkapalı", ///////Link Engel
  prefix: "ex!", //////prefix işte xd?
  anaisim: "Mizur4-Sama",////footerlar iste
  invite: "",
  gmesaj:
    "📥 -gçüye- sunucunuza katıldı onu **-daveteden-** davet etti gerçek davet sayısı `-gerçek-` sahte davet sayısı `-sahte-`",
  çmesaj:
    "📤 **-gçüye-** sunucunuzdan ayrıldı onu **-daveteden-** davet etti gerçek davet sayısı `-gerçek-` sahte davet sayısı `-sahte-`",
  irolsayı: "0",
  inviterol1: "",
  invite1: "",
  inviterol2: "",
  invite2: "",
  inviterol3: "",
  invite3: "",
  inviterol4: "",
  invite4: "",
  inviterol5: "",
  invite5: "",
  k: "hayır",
  ks: "",
  ks2: "hayır",
  kkanal: "",
  kkanal2: "hayır",
  kayıtsız: "",
  kayıtsız2: "hayır",
  erkek: "",
  erkek2: "hayır",
  kız: "",
  kız2: "hayır",
  üye: "",
  üye2: "hayır",
  kyetkili: "",
  kyetkili2: "hayır",
  sonkayıt: "Yok",
  kayıtsayı: "0",
  log: "",
  log2: "hayır",
  tag: "",
  tag2: "hayır",
  sembol: "|",
  sembol2: "hayır",
  özelmesaj:
    "-etiket- **Hoş geldin. Kayıt olmak için lütfen yetkili birisini etiketle ve adını yaşını yaz. Şimdididen iyi sohbetler ^ω^**",
  özelmesaj2: "hayır",
  ky: "",
  ky2: "hayır",
  otorol: "kapat",
  otoisim: "",
  otoisim2: "kapat",
  isim: "",
  kt1: "",
  kt2: "",
  ke: "",
  ke2: "",
  otorol2: ""
});

