module.exports = {
  name:"prefix",
  code:`
  $color[RANDOM]
  $thumbnail[$userAvatar[$authorID]]
  $addTimestamp
  $footer[$getServerVar[anaisim]]
  $description[
  Prefixi Başarıyla \`\$message[1]\` Olarak Ayarladın
  

]
$onlyIf[$message[1]!=;{color:RANDOM}{description:Lütfen Bir Prefix Gir Örneğin \`\ o! ; ex- ; \`\ :)}]
$onlyPerms[admin;{color:RANDOM}{description: ⛔Uzgunum Yetkin Yok}]
$setServerVar[prefix;$message[1]]

  `
  
}