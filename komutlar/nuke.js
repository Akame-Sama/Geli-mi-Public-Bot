module.exports = ({
    name: "nuke",
    code: `
$deleteChannels[$channelID]
$cloneChannel
$wait[7s]
$channelSendMessage[$channelID;{color:RANDOM}{description:Kanal \`7\` saniye içinde nukelenecek.}{image:https://thumbs.gfycat.com/OffbeatLeafyAustraliancurlew-size_restricted.gif}]
$onlyPerms[admin;{color:ffb0fff}{description:$customEmoji[yasak] Üzgünüm Ama \`\admin\`\ Yetkin Yok}]
`
}) 
