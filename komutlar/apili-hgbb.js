module.exports = {
        name: "apili-hgbb",
        code: `$if[$message[1]==aç]
$description[✔ HGBB sistemini açtım.]
$color[RANDOM]
$setServerVar[hgbb2;$mentionedChannels[1]]
$onlyIf[$mentionedChannels[1]!=;✘ Bir Kanal Etiketlemelisin.]
$endif
$if[$message[1]==kapat]
$description[✔ HGBB sistemini sıfırladım.]
$color[RANDOM]
$setServerVar[hgbb2;]
$endif
$onlyIf[$hasPerms[$authorID;admin]!=false;✘ Bunun için _\`YÖNETİCİ\`_ izninin olması lazım.]


     `
}