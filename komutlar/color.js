module.exports = ({
name: "color-info",
aliases: ['colourinfo', 'colour-info', 'color-info'],
code: `$title[Color info]
$addField[Brighter Shade;$get[bright];yes]
$addField[RGB;$get[rgb];yes]
$addField[Hex Code;$get[hex];yes]
$addField[Name;$get[name];yes]
$image[attachment://color.png]
$attachment[$get[img];color.png]
$color[$message]
$let[name;$jsonRequest[https://api.popcat.xyz/color/$message;name]]
$let[hex;$jsonRequest[https://api.popcat.xyz/color/$message;hex]]
$let[rgb;$jsonRequest[https://api.popcat.xyz/color/$message;rgb]]
$let[bright;$jsonRequest[https://api.popcat.xyz/color/$message;brightened]]
$let[img;$jsonRequest[https://api.popcat.xyz/color/$message;color_image]]
$onlyIf[$isValidHex[$message]==true;{color:ffb3f0}{description:$customEmoji[selam] Üzgünüm Ama Bu Renk Kodunu Tanimlayamadım}]
$argsCheck[>1;$getVar[nah] {color:ffb3f0}{description:$customEmoji[selam] Üzgünüm Ama Bu Renk Kodunu Tanimlayamadım}]


`
})