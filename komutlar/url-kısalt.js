module.exports = ({
    name: "url-kısalt",
    code: `
$title[URL Kısaltıldı]
$thumbnail[$authorAvatar]
$addField[🔗 | Kısaltılan Url;> \`\`\`$jsonRequest[https://is.gd/create.php?format=simple&url=$message]\`\`\`]
$description[[**Url'yi görüntüle**]($jsonRequest[https://is.gd/create.php?format=simple&url=$message])]
$addField[ 🔗 | Normal Url;> \`\`\`$message[1]\`\`\`;no]
$addTimestamp
$color[BLUE]
$onlyIf[$message[1]!=;{color:RED} {title:Hatalı Kullanım}
{description:Lütfen alttaki örnekten yola çıkarak kullanın.
\`\`\`
$getServerVar[prefix]url-kısalt <link>\`\`\`}]
`}) 

