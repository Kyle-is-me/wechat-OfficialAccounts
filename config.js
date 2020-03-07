'use strict'

var path = require('path')
var util = require('./libs/util')
var wechat_file = path.join(__dirname,'./config/wechat.txt')
var  config = {
    wechat:{
        appID:'wx7eddb04ddfe9b054',
        appSecret:'693e113b3231a4e710b4bf0406368b63',
        token:'myfirstwechatappwithnodejs',
        getAccessToken:function(){
            return util.readFileAsync(wechat_file,'utf-8')
        },
        saveAccessToken: function(data){
            data = JSON.stringify(data)
            return util.writeFileAsync(wechat_file,data)
        }
    }
}

module.exports = config