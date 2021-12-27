 module.exports = {
  name:"kayıt",
  code:`$if[$message[1]==aç]
  $addField[✓ | Kayıt sistemi açılmıştır;**Sıradaki Komutlar**
 
\`$getServerVar[prefix]kayıt-kanal ayarla #kanal\`
  
\`$getServerVar[prefix]kayıt-türü normal/cinsiyet\`
  
\`$getServerVar[prefix]üye-rol ayarla @rol\`**(\`Kayıt sistemini seçeneğini normal seçtiyseniz bu komutu kullanın.\`)**
  
\`$getServerVar[prefix]kız-rol ayarla @rol\`**(\`Kayıt sistemini seçeneğini cinsiyet seçtiyseniz bu komudu kullanın.\`)**
  
\`$getServerVar[prefix]erkek-rol ayarla @rol\`**(\`Kayıt sistemini seçeneğini cinsiyet seçtiyseniz bu komudu kullanın.\`)**
  
\`$getServerVar[prefix]kayıtsız-rol ayarla @rol\`
  
\`$getServerVar[prefix]kayıt-yetkilisi olsun/olmasın\`
  
\`$getServerVar[prefix]kayıt-yetkili ayarla @rol\`**(\`Kayıt yetkilisi seçeneğini olsun diye seçtiyseniz bu komudu kullanın.\`)**
  
\`$getServerVar[prefix]kayıt-mesaj-kanal ayarla #kanal\`**(\`Kayıttan sonra hangi kanala mesaj atacağını ayarlarsınız.\`)**

\`$getServerVar[prefix]tag-ayarla <tag>\`
  
\`$getServerVar[prefix]sembol-ayarla <sembol>\`**(\`Hiç birşey yazmazsanız sembol otomatik olarak "╏" olarak ayarlanacaktır.\`)**

\`$getServerVar[prefix]otorol aç/kapat\`
  
\`$getServerVar[prefix]isim-değiştirme aç/kapat\`
  
\`$getServerVar[prefix]özel-mesaj ayarla <özel_mesajınız>\`
  ;yes]
  $reply[$messageID;
  **NOT:** \`\`\`fix
  - Lütfen Komutları Burdaki Sıraya Göre Yazınız.  \`\`\`]
  $image[https://media.discordapp.net/attachments/697145772801785876/831537189334155324/cizgi-1.gif?width=460&height=20]
  $color[BLACK]
  $setServerVar[k;açık]

  $onlyIf[$getServerVar[k]!=açık;{description:**╳ | Kayıt sistemi zaten açık.**}{color:BLACK}]
  $endif
  $if[$message[1]==kapat]
  $description[**✓ | Kayıt sistemi kapatıldı.**]
  $image[https://media.discordapp.net/attachments/697145772801785876/831537189334155324/cizgi-1.gif?width=260&height=6]
  $color[BLACK]
  $setServerVar[k;kapalı]
  $setServerVar[ks;]
  $setServerVar[ks2;hayır]
  $setServerVar[kkanal;]
  $setServerVar[kkanal2;hayır]
  $setServerVar[kayıtsız;]
  $setServerVar[kayıtsız2;hayır]
  $setServerVar[kız;]
  $setServerVar[kız2;hayır]
  $setServerVar[erkek;]
  $setServerVar[erkek2;hayır]
  $setServerVar[üye;]
  $setServerVar[üye2;hayır]
  $setServerVar[kyetkili;]
    $setServerVar[ky;]
  $setServerVar[kyetkili2;hayır]
  $forEachMember[kayıtsayı]
  $setServerVar[log;]
  $setServerVar[log2;hayır]
  $setServerVar[tag;]
  $setServerVar[tag2;hayır]
  $setServerVar[sembol;]
  $setServerVar[sembol2;hayır]
  $setServerVar[özelmesaj;]
  $setServerVar[özelmesaj2;hayır]
  $onlyIf[$getServerVar[k]!=kapalı;{descriprtion:**╳ | Kayıt sistemi zaten kapalı.**}{color:BLACK}]
  $endif
  $onlyIf[$hasPerms[$authorID;admin]!=false;{description:**╳ | Bu komutu kullanabilmek için *\`Yönetici\`* yetkinizin olması lazım.**}{color:BLACK}]
  `
}