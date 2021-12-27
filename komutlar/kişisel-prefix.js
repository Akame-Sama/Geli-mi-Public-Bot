module.exports = {
  name:"kişisel-prefix",
  code:`
  $color[ffb0ff]
  $thumbnail[$userAvatar[$authorID]]
  $addTimestamp
  $footer[$userTag[$authorID]]
  $description[
  $customEmoji[selam] Bundan Sonra Senin İçin Prefixim \`\$message[1]\`\
  ]
  $setGlobalUserVar[kprefix;$message[1]]
  $onlyIf[$message[1]!=;{color:ffb0ff}{description:$customEmoji[yasak] Lütfen Bir Ön Ek Gir}{thumbnail:$userAvatar}]
  $globalCooldown[1d;{color:ffb0ff}{description:Kankam Prefiximi Günde 1 Defa Değistirebilirsin... Kalan Zamanın %time% }{thumbnail:$userAvatar}]
  `}