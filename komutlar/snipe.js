module.exports = {
  name:"snipe",
  code:`
  $author[Selamlar $username;$authorAvatar]
  $addField[__Mesaj Sahibi:__;**_\`\`\`js
  $userTag[$getServerVar[snipe1]] • $getServerVar[snipe1]\`\`\`_**]
  $addField[__Silinen Mesaj:__;**_\`\`\`js
  $getServerVar[snipe2]\`\`\`_**]
  $addField[__Silinen Mesajın Kanalı:__;**_\`\`\`js
  $channelName[$getServerVar[snipe3]]\`\`\`_**]
  $addField[__Silinme Tarihi:__;**_\`\`\`js
  $getServerVar[snipe4]\`\`\`_**]
  $color[ffb0ff]
  $thumbnail[$userAvatar[$getServerVar[snipe1]]]
  $onlyIf[$getServerVar[snipe1]!=; Silinen bir mesaj yok]
  $onlyPerms[admin; Bunun için __YÖNETİCİ__ iznin olmalı!]
 

 `
  }