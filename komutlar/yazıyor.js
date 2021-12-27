module.exports = {
  name: "yazıyor",
  code:`
  $if[$message[1]==aç]
  $djsEval[client.channels.cache.get("$channelID").startTyping()]
$endif
$if[$message[1]==kapat]
$djsEval[client.channels.cache.get("$channelID").stopTyping()]
$endif
$onlyPerms[admin;{color:ffb0ff}{description:$customEmoji[yasak] Uzgünüm Ama Admin Yetkin Yok}]
$onlyIf[$checkContains[$tolowerCase[$message[1];aç;kapat]]==true;{color;ffb0ff}{description:$customEmoji[yasak] Bir Argüman Gir Lütfen : \`\aç,kapat\`\ }]
$addCmdReactions[$customEmoji[tick_1]]


`}
