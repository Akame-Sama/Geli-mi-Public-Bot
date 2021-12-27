module.exports = ({
  name:'8ball',
  aliases:['eightball'],
  bkz:["8Ball Oynamanıza Yarayan Bir Koddur!"],
  code:`$color[RANDOM]
   $description[$jsonRequest[https://api.popcat.xyz/translate?text=$jsonRequest[https://api.popcat.xyz/8ball;answer;]&to=turkish;translated;]]


`
}) 
