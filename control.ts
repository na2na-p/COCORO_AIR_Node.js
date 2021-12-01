const dotenv = require('dotenv');
const request = require('request');
import { get_JSESSIONID } from "./get_JSESSIONID";
import { sendCommand } from "./send_command";
const state = require('./state.json');

dotenv.config();

//メイン
get_JSESSIONID().then(JSESSIONID => {
    return sendCommand(JSESSIONID, state['power_off']['controlList']);
}).then(result => {
    console.log("送信に成功しました");
}).catch(error => {
    console.log("送信に失敗しました");
});