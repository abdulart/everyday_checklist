const TelegramBot = require('node-telegram-bot-api');
const token = '870996752:AAG5ajXAS5DRs48x-5bQincZHm_QQuAYD2c';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
  
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
  });