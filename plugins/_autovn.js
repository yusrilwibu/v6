let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let lmafo = fs.readFileSync('./src/Assalamualaikum.mp3')
let jembut = fs.readFileSync('./src/Assalamualaikum.mp3')
conn.sendFile(m.chat, jembut, '', '', m, true)
setTimeout(() => {
conn.sendFile(m.chat, lmafo, '', '', m, true)
}, 1000)
}

handler.customPrefix = /^(assalamualaikum)$/i
handler.command = new RegExp

module.exports = handler
