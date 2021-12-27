module.exports = {
  name:"rol",
  code:`
  $if[$message[1]==al]
  $channelSendMessage[$getServerVar[roll];{color:BLUE}{thumbnail:$userAvatar}{description:$customEmoji[selam] <@$mentioned[1]> Kisisinden Başariyla <@&$roleID[$messageSlice[2]]> Rolü Alındı!}]
  $takeRoles[$authorID;$roleID[$messageSlice[2]]]
  $onlyIf[$hasRole[$mentioned[1];$roleID[$messageSlice[2]]]!=false;{color:ffb0ff}{description:$customEmoji[yasak] Zaten Etiketlenen Kiside Bu Rol Yok}]
  $onlyIf[$mentioned[1]!=;{color:RED}{description:$customEmoji[yasak] Lutfen Birini Etiketle!}{thumbnail:$userAvatar}]
  $onlyIf[$messageSlice[2]!=;{color:ffb0ff}{description:$customEmoji[yasak] Lutfen Bir Rol İsmi Giriniz!}]
  $suppressErrors[\`\`\`js
  Üzgünüm Ama Girilen Rol İsminde Bir Rol Bulamadım!
  \`\`\`]
  $endif
  $if[$message[1]==ver]
  $channelSendMessage[$getServerVar[roll];{color:BLUE}{thumbnail:$userAvatar}{description:$customEmoji[selam] <@$mentioned[1]> Kisisine Başariyla <@&$roleID[$messageSlice[2]]> Rolünu Verdim!}]
  $giveRoles[$authorID;$roleID[$messageSlice[2]]]
  $onlyIf[$hasRole[$mentioned[1];$roleID[$messageSlice[2]]]!=true;{color:ffb0ff}{description:$customEmoji[yasak] Zaten Etiketlenen Kiside Bu Rol Var}]
  $onlyIf[$mentioned[1]!=;{color:RED}{description:$customEmoji[yasak] Lutfen Birini Etiketle!}{thumbnail:$userAvatar}]
  $onlyIf[$messageSlice[2]!=;{color:ffb0ff}{description:$customEmoji[yasak] Lutfen Bir Rol İsmi Giriniz!}]
  $suppressErrors[\`\`\`js
  Üzgünüm Ama Girilen Rol İsminde Bir Rol Bulamadım!
  \`\`\`]
  $endif
  $addCmdReactions[$customEmoji[tick_1]]
  
  `}