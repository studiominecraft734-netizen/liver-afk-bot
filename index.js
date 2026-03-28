const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'mc.cwresports.lk',
  port: 25565,
  username: 'LiverMC',
  version: false
})

bot.on('spawn', () => {
  bot.chat('/login liver12345')
  
  setTimeout(() => {
    bot.chat('/lifesteal')
  }, 60000)

  setTimeout(() => {
    bot.chat('/afk')
  }, 120000)
})

bot.on('end', () => {
  setTimeout(() => {
    process.exit()
  }, 5000)
})

setInterval(() => {
  bot.setControlState('jump', true)
  setTimeout(() => bot.setControlState('jump', false), 500)
}, 60000)

bot.on('error', err => {})
