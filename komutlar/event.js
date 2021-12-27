module.exports = {
    name:"event",
    code:`
    $if[$message[1]==youtube]
    $djseval[
        const { DiscordTogether } = require('discord-together');
        
        client.discordTogether = new DiscordTogether(client);
        client.discordTogether.createTogetherCode('$voiceID', 'youtube').then(async invite => {
         return message.channel.send(invite.code);
         });]
         
         $onlyIf[$voiceID!=;**Youtube** izlemek için sese girmelisin!]
    $endif
    $if[$message[1]==betrayal]
    $djseval[
        const { DiscordTogether } = require('discord-together');
        
        client.discordTogether = new DiscordTogether(client);
        client.discordTogether.createTogetherCode('$voiceID', 'betrayal').then(async invite => {
         return message.channel.send(invite.code);
         });
         ]
         $onlyIf[$voiceID!=;**Betrayal** oynamak için sese girmelisin!]
    $endif
    $if[$message[1]==fishing]
    $djseval[
        const { DiscordTogether } = require('discord-together');
        
        client.discordTogether = new DiscordTogether(client);
        client.discordTogether.createTogetherCode('$voiceID', 'fishing').then(async invite => {
         return message.channel.send(invite.code);
         });
         ]
         $onlyIf[$voiceID!=;**Fishing** oynamak için sese girmelisin!]
    $endif
    $if[$message[1]==poker]
    $djseval[
        const { DiscordTogether } = require('discord-together');
        
        client.discordTogether = new DiscordTogether(client);
        client.discordTogether.createTogetherCode('$voiceID', 'poker').then(async invite => {
         return message.channel.send(invite.code);
         });
         ]
         $onlyIf[$voiceID!=;**Poker** oynamak için sese girmelisin!]
         $endif        $onlyIf[$checkContains[$toLowercase[$message];youtube;fishing;poker;betrayal]==true;{color:RANDOM}{description:Lütfen \`poker\` , \`fishing\` , \`youtube\` veya \`betrayal\` seçeneklerini seçin.}]
 `
} 
