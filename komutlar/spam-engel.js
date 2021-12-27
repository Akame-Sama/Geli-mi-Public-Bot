module.exports = {
  name: "spam-engel",
  code: `
$if[$message[1]==aç]
$description[✔ Spam engel sistemini açtım. $getServerVar[spamsayı] adet spam yaptıktan sonra kullanıcıyı uyaracam.]
$color[RANDOM]
$setServerVar[spam;açık]
$onlyIf[$getServerVar[spam]!=açık;✘ Sistem zaten açık.]
$endif
$if[$message[1]==kapat]
$description[✔ Spam engel sistemini kapattım.]
$color[RANDOM]
$setServerVar[spam;kapalı]
$onlyIf[$getServerVar[spam]!=kapalı;✘ Sistem zaten kapalı.]
$endif
$if[$message[1]==sayı]
$description[✔ $message[2] adet spam yaptıktan sonra kullanıcıyı uyaracam.]
$color[RANDOM]
$setServerVar[spam;$message[2]]
$onlyIf[$isNumber[$message[2]]!=false;✘ Lütfen gerçek bir sayı girin _\`$message[2]\`_ gerçek bir sayı değil çünkü.]
$onlyIf[$message[2]!=;✘ Lütfen bir sayı girin.]
$onlyIf[$getServerVar[spam]!=kapalı;✘ Sistem kapalı lütfen sistemi aç ve sonra bu komutu tekrar kullan.]
$endif
$onlyIf[$hasPerms[$authorID;admin]!=false;✘ Bunun için _\`YÖNETİCİ\`_ izninin olması lazım.]
$onlyIf[$getglobalUserVar[kural]!=no;{description:$customEmoji[selam] Lütfen Önce Kurraları Onayla!}{color:ffb0ff}{execute:kitap2}{delete:5s}]

     `
} 

