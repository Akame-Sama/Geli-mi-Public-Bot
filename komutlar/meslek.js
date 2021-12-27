module.exports = {
  name: "meslek",
  code: `
 $if[$message[1]==madenci]
 $channelSendMessage[$channelID;{color:ffb0ff}{description:👲Tebrikler Artık Bir Mesleğin Var Artık : \`\Madenci\`\ Olarak İşe Girdin}]
 $setGlobalUserVar[meslek;Madenci]
 $setGlobalUserVar[meslekler;-1 Madenci  ]
 $setGlobalUserVar[para;$math[$getGlobalUserVar[para]-100000]]
 $onlyIf[$getGlobalUserVar[para]>100000;{color:RED}{description:$customEmoji[yasak] Yeterli Paran Yok Gerekli Para : \`\ 100000\`\ Molar}]
 $onlyIf[$getGlobalUserVar[meslek]==Madenci;{color:RED}{description:$customEmoji[selam] Zaten Bu Mesleğe Sahipsin Neden Yeniden Böyle Bir İşe Kalkıştınki}]
 $endif
 $if[$message[1]==tamirci]
 $channelSendMessage[$channelID;{color:ffb0ff}{description:👨‍🔧Tebrikler Artık Bir Mesleğin Var Artık : \`\Tamirci\`\ Olarak İşe Girdin}]
 $setGlobalUserVar[meslek;Tamirci]
 $setGlobalUserVar[meslekler;-1 Madenci  |   2-Tamirci  ]
 $setGlobalUserVar[para;$math[$getGlobalUserVar[para]-250000]]
 $onlyIf[$getGlobalUserVar[para]>250000;{color:RED}{description:$customEmoji[yasak] Yeterli Paran Yok Gerekli Para : \`\ 250000\`\ Molar}]
 $onlyIf[$getGlobalUserVar[meslek]==Madenci;{color:ffb0ff}{description:$customEmoji[yasak] Kankam Üzgünum Ama Önce Madenci Olman Lazım}]
 $onlyIf[$getGlobalUserVar[meslek]==Tamirci;{color:RED}{description:$customEmoji[selam] Zaten Bu Mesleğe Sahipsin Neden Yeniden Böyle Bir İşe Kalkıştınki}] 
 $endif
 $if[$message[1]==bahçıvan]
 $channelSendMessage[$channelID;{color:ffb0ff}{description:👩‍🌾Tebrikler Artık Bir Mesleğin Var Artık : \`\Bahçıvan\`\ Olarak İşe Girdin}]
 $setGlobalUserVar[meslek;Bahçıvan]
 $setGlobalUserVar[para;$math[$getGlobalUserVar[para]-500000]]
 $setGlobalUserVar[meslekler;-1 Madenci  |   2-Tamirci  |  3-Bahçıvan  ]
 $onlyIf[$getGlobalUserVar[para]>500000;{color:RED}{description:$customEmoji[yasak] Yeterli Paran Yok Gerekli Para : \`\ 500000\`\ Molar}]
 $onlyIf[$getGlobalUserVar[meslek]==Tamirci;{color:ffb0ff}{description:$customEmoji[yasak] Üzgünüm Ama Önce Tamirci Olman Lazım}]
 $onlyIf[$getGlobalUserVar[meslek]==Bahçıvan;{color:RED}{description:$customEmoji[selam] Zaten Bu Mesleğe Sahipsin Neden Yeniden Böyle Bir İşe Kalkıştınki}]
 $endif
 $if[$message[1]==pilot]
 $channelSendMessage[$channelID;{color:ffb0ff}{description:👨‍✈️Tebrikler Artık Bir Mesleğin Var Artık : \`\Pilot\`\ Olarak İşe Girdin}]
 $setGlobalUserVar[meslek;Pilot]
 $setGlobalUserVar[meslekler;-1 Madenci  |   2-Tamirci  |  3-Bahçıvan   |  4-Pilot  ]
 $setGlobalUserVar[para;$math[$getGlobalUserVar[para]-750000]]
 $onlyIf[$getGlobalUserVar[para]>750000;{color:RED}{description:$customEmoji[yasak] Yeterli Paran Yok Gerekli Para : \`\ 750000\`\ Molar}]
 $onlyIf[$getGlobalUserVar[meslek]==Bahçıvan;{color:ffb0ff}{description:$customEmoji[yasak] Üzgünüm Ama Önce Bahçıvan Olman Lazım}]
 $onlyIf[$getGlobalUserVar[meslek]==Pilot;{color:RED}{description:$customEmoji[selam] Zaten Bu Mesleğe Sahipsin Neden Yeniden Böyle Bir İşe Kalkıştınki}]
 $endif 
 $if[$message[1]==aşçı]
 $channelSendMessage[$channelID;{color:ffb0ff}{description:👨‍🍳Tebrikler Artık Bir Mesleğin Var Artık : \`\Aşçı\`\ Olarak İşe Girdin}]
 $setGlobalUserVar[meslek;Aşçı]
 $setGlobalUserVar[para;$math[$getGlobalUserVar[para]-1000000]]
  $setGlobalUserVar[meslekler;-1 Madenci  |   2-Tamirci  |  3-Bahçıvan   |  4-Pilot  |  5-Aşçı  ]
 $onlyIf[$getGlobalUserVar[para]>1000000;{color:RED}{description:$customEmoji[yasak] Yeterli Paran Yok Gerekli Para : \`\ 1000000\`\ Molar}]
 $onlyIf[$getGlobalUserVar[meslek]==Pilot;{color:ffb0ff}{description:$customEmoji[yasak] Üzgünüm Ama Önce Pilot Olman Lazım}]
 $onlyIf[$getGlobalUserVar[meslek]==Aşçı;{color:RED}{description:$customEmoji[selam] Zaten Bu Mesleğe Sahipsin Neden Yeniden Böyle Bir İşe Kalkıştınki}]
 $endif
 $if[$message[1]==doktor]
 $channelSendMessage[$channelID;{color:ffb0ff}{description:Tebrikler Artık Bir Mesleğin Var Artık : \`\Doktor\`\ Olarak İşe Girdin}]
 $setGlobalUserVar[meslek;Doktor]
 $setGlobalUserVar[meslekler;-1 Madenci  |   2-Tamirci  |  3-Bahçıvan   |  4-Pilot  |  5-Aşçı  | 6-Doktor]
 $setGlobalUserVar[para;$math[$getGlobalUserVar[para]-2000000]]
 $onlyIf[$getGlobalUserVar[para]>2000000;{color:RED}{description:$customEmoji[yasak] Yeterli Paran Yok Gerekli Para : \`\ 2000000\`\ Molar}]
 $onlyIf[$getGlobalUserVar[meslek]==Aşçı;{color:ffb0ff}{description:$customEmoji[yasak] Üzgünüm Ama Önce Aşçı Olman Lazım}]
 $onlyIf[$getGlobalUserVar[meslek]==Doktor;{color:RED}{description:$customEmoji[selam] Zaten Bu Mesleğe Sahipsin Neden Yeniden Böyle Bir İşe Kalkıştınki}]
 $endif
 
 
 
 
 
 
  
`
};
