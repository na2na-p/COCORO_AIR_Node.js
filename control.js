"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require('dotenv');
const request = require('request');
const get_JSESSIONID_1 = require("./get_JSESSIONID");
const send_command_1 = require("./send_command");
const state = require('./state.json');
dotenv.config();
//メイン
(0, get_JSESSIONID_1.get_JSESSIONID)().then(JSESSIONID => {
    return (0, send_command_1.sendCommand)(JSESSIONID, state['power_off']['controlList']);
}).then(result => {
    console.log("送信に成功しました");
}).catch(error => {
    console.log("送信に失敗しました");
});
