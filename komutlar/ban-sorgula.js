module.exports = {
  name:"ban-sorgula",
  code:`
  $thumbnail[$userAvatar[$authorID]]
  $color[ff0000]
  $addTimestamp
  $footer[$userTag[$message[1]] Kişisinin Banını Sorguladı]
  $title[$userTag[$message[1]] Kişisinin Banı Sorgulaniyor]
  $description[
   Banlayan Yetkili :<@$getServerVar[banlayan]>
  Banlanan Kullanıcı : $userTag[$message[1]]
  Banlanma Nedeni : \`\$getServerVar[bansebep]\`\
  
  
  ]
  

  
  `
  
  }