'use strict'


exports.reply = function* (next) {
    var message = this.weixin

    if (message.MsgType === 'event') {
        if (message.Event === 'subscribe') {
            if (message.EventKey) {
                console.log('扫二维码进来：' + message.EventKey + ' ' + message.ticket)
            };

            this.body = '嘿，你来啦~~~' 
        } else if (message.Event === 'unsubscribe') {
            console.log('无情取关');
            this.body = '';
        }
    } else {

    }
    yield next;
}