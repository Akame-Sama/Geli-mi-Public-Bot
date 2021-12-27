module.exports = ({
    name:"function",
    code:`
$title[$message;https://aoi.leref.ga/functions/iusd$toLowercase[$replaceText[$get[msg];$;;-1]]]
$let[msg;$filterMessage[$message;$]]
$description[\`\`\`
$jsonRequest[https://api.popcat.xyz/translate?text=$jsonRequest[https://dbdjs.leref.ga/functions/$message;description]&to=turkish;translated;]
\`\`\`
$addField[Kullanım:;\`\`\`
$jsonRequest[https://dbdjs.leref.ga/functions/$message;usage]
\`\`\`
[Aoi.JS Belgeler](https://aoi.leref.ga/) | [Aoi.JS Api](https://dbdjs.leref.ga/)
[Aoi.JS Github](https://github.com/aoijs/aoi.js) | [Aoi.JS NPM](https://www.npmjs.com/package/aoi.js)
[Aoi.JS Resmi Discord Sunucusu](https://discord.gg/r2qUbuvqMr)]]
$thumbnail[https://cdn.discordapp.com/attachments/854330773285109771/854333082827882496/aoijs.png]
$color[ffb0ff]
$onlyif[$jsonRequest[https://dbdjs.leref.ga/functions/$message;name]!=;$customEmoji[yasak] Hata, komut bulunamadı]

`
}) 
