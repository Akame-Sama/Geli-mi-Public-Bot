module.exports = {
  name:"yanıtla",
  bkz:["Bir Mesajı Yanıtlarsınız"],
  code:`
  $reply[$message[1];$message[2] $message[3] $message[4] $message[5] $message[6] $message[7] $message[8] $message[9] $message[10] $message[11] $message[12] $message[13]$message[14] $message[15] $message[16] $message[17] $message[18] $message[19] $message[20] $message[21] $message[22] $message[23] $message[24] $message[25] $message[26] $message[27] $message[28] $message[29] $message[30] $message[31] $message[32] $message[33] $message[34] $message[35] $message[36] $message[37];yes]
  $onlyIf[$message[2]!=;{color:$getServerVar[hex]}{thumbnail:$userAvatar}{description:$customEmoji[yasak] Lütfen Bir Mesaj Gir Ğ}]
  $onlyIf[$isNumber[$message[1]]==true;{color:$getServerVar[hex]}{description:$customEmoji[yasak] Lütfen Bir Mesaj İDsi Gir}]
  $onlyIf[$message[1]!=;{color:$getServerVar[hex]}{thumbnail:$userAvatar}{description:$customEmoji[yasak] Lütfen Bir İD Si Gir}]
  $suppressErrors[> $customEmoji[yasak] Mesaj İDsi Algılanamadı]
  $deletecommand
  `}