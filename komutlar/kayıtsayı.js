module.exports = {
  name:"kayıtsayı",
  code:`$author[Kayıt Sayı Ve Son Kayıt;$userAvatar[$clientID]]
$description[<@$mentioned[1;yes]> kişisinin kayıt sayısı ve son kayıtı.]
$addField[Kayıt Sayı;$getUserVar[kayıtsayı;$mentioned[1;yes]];yes]
$addField[Son Kayıt;$getUserVar[sonkayıt;$mentioned[1;yes]];yes]
  $thumbnail[$userAvatar[$mentioned[1;yes]]]
  $color[BLACK]
$footer[$username tarafından istendi;$authorAvatar]`
}