module.exports = {
  name:"reverse",
  aliases:["ters-çevir"],
  code:`$reply[$messageID;$jsonRequest[https://api.popcat.xyz/reverse?text=$replaceText[$message; ;+;-1];text;];yes]
  $onlyIf[$message!=;:x: Bir şeyler yazmalısın.]
  

  `
} 
