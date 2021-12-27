module.exports = {
name : "korona",
code : `
$title[Türkiye Covid-19 Virüs İstatistikleri]
$color[ffb0ff]
$thumbnail[$userAvatar[$clientID]]
$description[

**GÜNLÜK**

Günlük Vaka Sayısı : $jsonRequest[https://api.apify.com/v2/key-value-stores/28ljlt47S5XEd1qIi/records/LATEST?disableRedirect=true;dailyInfected]


Günlük Ölü Sayısı : $jsonRequest[https://api.apify.com/v2/key-value-stores/28ljlt47S5XEd1qIi/records/LATEST?disableRedirect=true;dailyDeceased]

Günlük İyileşen Hasta Sayısı : $jsonRequest[https://api.apify.com/v2/key-value-stores/28ljlt47S5XEd1qIi/records/LATEST?disableRedirect=true;dailyRecovered]

Günlük Test Sayısı : $jsonRequest[https://api.apify.com/v2/key-value-stores/28ljlt47S5XEd1qIi/records/LATEST?disableRedirect=true;dailyTested]

**VERİLER**

Son Güncelleme : $jsonRequest[https://api.apify.com/v2/key-value-stores/28ljlt47S5XEd1qIi/records/LATEST?disableRedirect=true;lastUpdatedAtApify]

Son Kaynak Güncellemesi : $jsonRequest[https://api.apify.com/v2/key-value-stores/28ljlt47S5XEd1qIi/records/LATEST?disableRedirect=true;lastUpdatedAtSource]]

$footer[Kaynak : https://covid19.saglik.gov.tr;$authorAvatar]


`
}





    
    