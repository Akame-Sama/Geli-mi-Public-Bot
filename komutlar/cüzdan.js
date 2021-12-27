module.exports = {
  name:"cüzdan",
  code:`
  $color[$getServerVar[hex]]
  $title[$userTag[$authorID] Kişisinin Hesap Bilgileri]
  $thumbnail[$userAvatar]
  $addTimestamp
  $description[
  💸 ___Cüzdan___                             
  \`\
  $getGlobalUserVar[para]
  \`\
  
💵 ___Banka___
  \`\
  $getGlobalUserVar[bankap]
  \`\
  
💳 ___Kredi___
  \`\
  $getGlobalUserVar[kredi]
  \`\
  
  ]
  `}
  
  