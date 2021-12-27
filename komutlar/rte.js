module.exports = ({
  name:"rte",
  code:`$argsCheck[>1;Lütfen en az bir kelime yazın.]
   $onlyIf[$message!=;Lütfen birşeyler yaz.]
  $attachment[https://cherrabl.sirv.com/twit.png?text.0.text=$replaceText[$message; ;%20;-1]&text.0.position.gravity=west&text.0.position.x=13%25&text.0.size=60&text.0.color=000000;rte.png]
  $deletecommand
  $onlyIf[$getglobalUserVar[kural]!=no;{description:$customEmoji[selam] Lütfen Önce Kurraları Onayla!}{color:ffb0ff}{execute:kitap2}{delete:5s}]

`}) 
