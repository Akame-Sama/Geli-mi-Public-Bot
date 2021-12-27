module.exports = {
  name: "hesapla",
  code: `
$color[BLUE]
$thumbnail[$userAvatar[$authorID]]
$footer[$userTag[$authorID] Tarafından İstendi]
$addTimestamp
$description[
$addField[🖋Toplama Durumunda;
\`\
$math[$message[1]+$message[2]]
\`\
;yes]
$addField[🖋Çıkarma Durumunda;
\`\
$math[$message[1]-$message[2]]
\`\
;yes]
$addField[🖋Bölme Durumunda;
\`\
$math[$message[1]/$message[2]]
\`\
;yes]
$addField[🖋Çarpma Durumundayken;
\`\
$math[$message[1]*$message[2]]
\`\
;yes]
]
$onlyIf[$message[2]!=;{color:RED}{description:Lütfen 2 Sayı Giriniz!}]
`
};
