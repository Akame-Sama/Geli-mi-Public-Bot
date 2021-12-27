module.exports = {
  name: "ban",
  code: `
  $ban[$mentioned[1];$noMentionMessage;1]
  $channelSendMessage[$getServerVar[banlog];
  {color:RANDOM}{description:
  ***$userTag[$mentioned[1]] Yasaklandı***

Yasaklayan Yetkili : <@$authorID>
Yasaklanan Kullanıcı : $userTag[$mentioned[1]]
Yasaklama Sebebi : $noMentionMessage
}
{thumbnail:$userAvatar[$authorID]}
]
  $onlyIf[$mentioned[1]!=;***Lutfen Birini Etiketle***]
  $onlyIf[$hasRole[$authorID;$getServerVar[banhummer]]==true;{color:RANDOM}{description:Üzgünüm Ama <@&$getServerVar[banhummer]> Yetkin Yok}]
  $onlyIf[$mentioned[1]!=$authorID;😐]
  $onlyIf[$noMentionMessage!=;{color:RANDOM}{description: Bir Sebep Girmen Lazım Kanka ; Kullanım : $getServerVar[prefix] Bansebep @kullanıcı}]
  $setServerVar[bansebep;$noMentionMessage]
  $setServerVar[banlayan;$authorID]
  
  `
};
