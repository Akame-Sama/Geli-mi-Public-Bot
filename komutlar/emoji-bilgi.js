module.exports = {
  name:"emoji",
  code:`
$addTimestamp
$thumbnail[$userAvatar[$clientID]]
$color[$getServerVar[hex]]
$description[
**İsmi:** \`$emoji[$get[id];name]\`
**ID:** _\`$get[id]\`_
**Oluşturma Tarihi:** _\`$replaceText[$replaceText[$replaceText[$creationDate[$get[id];date];PM;];AM;];,; | ]\`_
]
  $image[$emoji[$get[id];url]]

$let[id;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];<;];:;];>;];_;];a;];b;];c;];d;];e;];f;];g;];h;];i;];j;];k;];l;];m;];n;];o;];p;];r;];s;];q;];x;];w;];t;];u;];v;];y;];z;];A;];B;];C;];D;];E;];F;];G;];H;];I;];J;];K;];L;];M;];N;];O;];P;];R;];S;];Q;];X;];W;];T;];U;];V;];Y;];Z;]]
  $onlyIf[$message[1]!=;Lütfen bir emoji yazın.]
  $suppressErrors[Bu emoji discordun kendi emojisi ya da başka sunucuya ait.]
  `
} 
