module.exports = {
  name:"profil",
  code:`
  $color[BDAAF9]
  $thumbnail[$userAvatar[$mentioned[1]]]
  $description[ 
 $addField[__Kullanıcı Bilgileri__;
   👤 AD
  **$userTag[$authorID]**
  
  🔗 ID
  **$authorID**
  
  🎮 Durumu
  **$replaceText[$replaceText[$replaceText[$replaceText[$status;online;💠Çevrimiçi;-1];idle;⚪Boşta;-1];dnd;🔴Rahatsız Etmeyin;-1];offline;⚫Çevrimdışı;-1]**
  
  🗓 Hesabın Kuruluş Tarihi
  **$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$authorID;time]; years; Yıl;-1]; year; Yıl;-1];months;Ay;-1];month;Ay;-1];weeks;Hafta;-1];week;Hafta;-1];days;Gün;-1];day;Gün;-1];hours;Saat;-1];hour;Saat;-1];minutes; Dakika;-1];minute; Dakika;-1];and; ve;-1];seconds; Saniye;-1];second; Saniye;-1]**

  📖 Hakkımda
  $replaceText[$getCustomStatus[$authorID];none;Bir Şey Bulunmuyor;-1]
  ;yes]]
  
 ` }