module.exports = ({
  name:"trump",
  code:`$argsCheck[>1;Lütfen en az bir kelime yazın.]
  $onlyIf[$message!=;Lütfen birşeyler yaz.]
$attachment[https://api.no-api-key.com/api/v2/trump?message=$replaceText[$message; ;+;-1];trump.png]
$deletecommand

`
}) 
