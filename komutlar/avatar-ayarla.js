module.exports = {
  name:"avatar-ayarla",
  code:`
  $setGlobalUserVar[avatar;$message]
  $color[$getServerVar[hex]]
  $thumbnail[$message]
  $description[
  $customEmoji[anime] Başarıyla Avatarın Ayarlandı]
  $onlyIf[$message[1]!=;{color:ffb0ff}{description:$customEmoji[yasak] Lutfen Bir Link Giriniz!}]
  $addTimestamp
  
  `}