module.exports = {
  name:"$alwaysExecute",
  code:`$if[$message[1]==$sum[1;$getServerVar[sayısayma]]
  
  $setServerVar[sayısayma;$sum[1;$getServerVar[sayısayma]]]
   $elseIf[$isNumber[$message[1]]==false]
   
  $color[RANDOM]
$description[Lütfen sayı dışında herhangi birşey yazmayınız.]
  
  $deleteIn[5s]
  
  $deletecommand
  
  $endelseIf
  
     $else
     
   $deletecommand
   
      $color[RANDOM]
 $description[Lütfen doğru sayıyı yazınız.]
   
  $endif
 
 $onlyForChannels[$getServerVar[sayıkanal];]
 
  `
} 
