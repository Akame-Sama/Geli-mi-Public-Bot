module.exports = ({
 name:'sayıkanal',
 code:`
$if[$message[1]==ayarla]
$setServerVar[sayıkanal;$mentionedChannels[1]]
$description[Başarıyla sayı saymaca kanalı <#$mentionedChannels[1]> olarak ayarlandı.]
$color[RANDOM]
$endif
$if[$message[1]==sıfırla]
$resetServerVar[sayıkanal]
$description[Başarıyla sayı saymaca kanalı sıfırlandı.]
$color[RANDOM]
$endif

`}) 
