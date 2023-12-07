const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber =  "254776436960"
global.ownername = "⁖℘༒∂ลяк เи†эи† ☠︎︎𓀚"
global.ytname = "YT: AyushBotz.inc"
global.socialm = "GitHub: zandat3"
global.location = "Kenya"

global.ownername = '⁖℘༒∂ลяк เи†эи† ☠︎︎𓀚' //owner name
global.botname = '𝐝𝐫𝐞𝐱_𝐦𝐨𝐬𝐞-𝐌𝐃' //name of the bot

//sticker details
global.stickername = '💙𓆩⁖℘༒∂ลяк เи†эи† ☠︎︎𓀚'
global.packname = 'Sticker By'
global.author = '𝐝𝐫𝐞𝐱_𝐦𝐨𝐬𝐞'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Ayush botz inc."

//theme link
global.link = 'https://chat.whatsapp.com/Jllsl2OaQNoBjepxzuVsZM'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.autoRecording = true //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
