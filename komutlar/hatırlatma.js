module.exports = {
name:"hatırlatma",
code:`
<@$authorID>
$dm[$authorID]

$color[GREEN]
$title[Zaman Doldu !]
$description[
$replaceText[$replaceText[$replaceText[$replaceText[$message[1];s; Saniye ;-1];m; Dakika ;-1];h; Saat ;-1];d; Gün ;-1] Önce Hatırlatma Kuruldu.
Hatırlatma Sebebi : $replaceText[$message;$message[1];;-1] 

Hadi Kolay Gelsin !]
$wait[$message[1]]
$channelSendMessage[$channelID;
{color:RED}{title: Zamanlayıcı Kuruldu !}{description:$replaceText[$message;$message[1];;-1] Sebebi İle $replaceText[$replaceText[$replaceText[$replaceText[$message[1];s; Saniye ;-1];m; Dakika ;-1];h; Saat ;-1];d; Gün ;-1] Zaman Sonrasına Hatırlatma Kuruldu.

Hadi Zaman Geldiğinde Görüşürüz !}]
$onlyIf[$message[2]!=; Hatırlatma Sebebi Nedir ?]
$onlyIf[$checkContains[$message[1];s;m;h;d]!=false;Zaman Birimi s= Saniye m= Dakika h= Saat Yada d= Gün Olmalıdır]
`
}