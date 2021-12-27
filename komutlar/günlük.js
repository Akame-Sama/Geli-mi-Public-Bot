module.exports = {
  name:"günlük",
  code:`
  $setGlobalUserVar[para;$math[$getGlobalUserVar[para]+20000]]
 $globalCooldown[12h;$customEmoji[yasak]**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getCooldownTime[12h;globalUser;günlük;$authorID];minute;Dakika];second;Saniye];s;];and;ve];hour;Saat]** sonra deneyebilirsin.]      

  
  $customEmoji[coin] ***$userTag[$authorID]*** Tebrikler Günlük Ödulun Olan 20k MZpara yı Aldın 12 Saat Sonra Tekrar Uğra!
  

  
  
  `}