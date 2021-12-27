module.exports = {
  name:"kayıt-bilgi",
  code:`
  $author[Kayıt Bilgisi;$userAvatar[$clientID]]
  $description[<@$mentioned[1]> **Kullanıcısının Kayıt Bilgileri**
  
  **Üye:**
  $getUserVar[isim;$mentioned[1]]
  
  **Katılım Tarihi:**
  $getUserVar[kt1;$mentioned[1]]
  
  **Kayıt Eden:**
  <@$getUserVar[ke;$mentioned[1]]>
  
  **Kayıt Tarihi:**
  $getUserVar[kt2;$mentioned[1]]
<#$getServerVar[kkanal]>
  ]
  $thumbnail[$userAvatar[$mentioned[1]]]
$footer[$username tarafından istendi;$authorAvatar]
$color[BLACK]
$onlyIf[$mentioned[1]!=;{description:**╳ | Önce birini etiketlemelisin.**}{color:BLACK}]
`}