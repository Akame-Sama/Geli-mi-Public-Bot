module.exports = {
  name:"biden",
  code:`
  $color[ffb0ff]
  $image[https://someapi.dragonroyale.repl.co/biden?text=$replaceText[$message; ;+;-1]]
  $onlyIf[$message[1]!=;{color:RANDOM}{description:$customEmoji[yasak] Lütfen Bir Mesaj Girin}]
  $deletecommand


  `
  
  }