module.exports = {
  name:"banlist",
  code:`
  $color[RANDOM]
  $thumbnail[$userAvatar[$clientID]]
  $addTimestamp
  $footer[$getServerVar[anaisim]]
  $description[
  Sunucuda Banlanan Kişi Sayısı : $banCount
  
  ==========Banlanan Kişiler========
  
  $joinSplitText[
  
  $textSplit[$usersbanned
  ]]
  =============================
  
  ]
  

  ` 
}