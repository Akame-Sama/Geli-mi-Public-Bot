module.exports = ({
  name:"çalış",
  code:`
  $if[$getGlobalUserVar[meslek]==Madenci]
  $channelSendMessage[$channelID;{color:ffb0ff}{description:$customEmoji[anime] Hm Kankam Sanırım Sen Madenci Olarak İşe Girmistin Peki Çalıştin Ve Yoruldunmu? O Zaman İşte Paran :  100000 }]
  $setGlobalUserVar[para;$math[$getGlobalUserVar[para]+100000]]
  $globalCooldown[1h;$customEmoji[yasak]**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getCooldownTime[1h;globalUser;meslek;$authorID];minute;Dakika];second;Saniye];s;];and;ve];hour;Saat]** sonra deneyebilirsin.]      
  $endif
  $if[$getGlobalUserVar[meslek]==Tamirci]
  $channelSendMessage[$channelID;{color:ffb0ff}{description:$customEmoji[anime] Hm Kankam Sanırım Sen Tamirci Olarak İşe Girmistin Peki Çalıştin Ve Yoruldunmu?  O Zaman İşte Paran :  250000}]
  $setGlobalUserVar[para;$math[$getGlobalUserVar[para]+250000]]
  $globalCooldown[1h;$customEmoji[yasak]**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getCooldownTime[1h;meslek;günlük;$authorID];minute;Dakika];second;Saniye];s;];and;ve];hour;Saat]** sonra deneyebilirsin.]      
  $endif
  $if[$getGlobalUserVar[meslek]==Bahçıvan]
  $channelSendMessage[$channelID;{color:ffb0ff}{description:$customEmoji[anime] Hm Kankam Sanırım Sen Bahçıvan Olarak İşe Girmistin Peki Çalıştin Ve Yoruldunmu? O Zaman İşte Paran : 500000 }]
  $setGlobalUserVar[para;$math[$getGlobalUserVar[para]+500000]
  $globalCooldown[1h;$customEmoji[yasak]**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getCooldownTime[1h;globalUser;meslek;$authorID];minute;Dakika];second;Saniye];s;];and;ve];hour;Saat]** sonra deneyebilirsin.]      
  $endif
  $if[$getGlobalUserVar[meslek]==Pilot]
  $channelSendMessage[$channelID;{color:ffb0ff}{description:$customEmoji[anime] Hm Kankam Sanırım Sen Pilot Olarak İşe Girmistin Peki Çalıştin Ve Yoruldunmu?  O Zaman İşte Paran : 750000}]
  $setGlobalUserVar[para;$math[$getGlobalUserVar[para]+750000]]
  $globalCooldown[1h;$customEmoji[yasak]**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getCooldownTime[1h;globalUser;meslek;$authorID];minute;Dakika];second;Saniye];s;];and;ve];hour;Saat]** sonra deneyebilirsin.]      
  $endif
  $if[$getGlobalUserVar[meslek]==Aşçı]
  $channelSendMessage[$channelID;{color:ffb0ff}{description:$customEmoji[anime] Hm Kankam Sanırım Sen Aşçı Olarak İşe Girmistin Peki Çalıştin Ve Yoruldunmu? O Zaman İşte Paran : 1000000 }]
  $setGlobalUserVar[para;$math[$getGlobalUserVar[para]+1000000]]
  $globalCooldown[1h;$customEmoji[yasak]**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getCooldownTime[1h;globalUser;meslek;$authorID];minute;Dakika];second;Saniye];s;];and;ve];hour;Saat]** sonra deneyebilirsin.]      
  $endif
  $if[$getGlobalUserVar[meslek]==Doktor]
  $channelSendMessage[$channelID;{color:ffb0ff}{description:$customEmoji[anime] Hm Kankam Sanırım Sen Madenci Olarak İşe Girmistin Peki Çalıştin Ve Yoruldunmu? O Zaman İşte Paran : 2000000 }]
  $setGlobalUserVar[para;$math[$getGlobalUserVar[para]+2000000]]
  $globalCooldown[1h;$customEmoji[yasak]**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getCooldownTime[1h;globalUser;meslek;$authorID];minute;Dakika];second;Saniye];s;];and;ve];hour;Saat]** sonra deneyebilirsin.]      
  $endif
  `
})

////bu kod çalismio siktigimin
