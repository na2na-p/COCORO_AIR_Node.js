const dotenv = require('dotenv');
const request = require('request');
import { get_JSESSIONID } from "./get_JSESSIONID";
import { sendCommand } from "./send_command";
const state = require('./state.json');

//.envから引っこ抜いてくる
dotenv.config();
const BOX_ID:any = process.env.BOX_ID;
const URL_PREFIX:any = process.env.URL_PREFIX;
const TERMINALAPPIDKEY:any = process.env.TERMINALAPPIDKEY;
const APP_SECRET:any = process.env.APP_SECRET;


get_JSESSIONID(URL_PREFIX, APP_SECRET, TERMINALAPPIDKEY).then(JSESSIONID => {
    return sendCommand(URL_PREFIX, BOX_ID, JSESSIONID, APP_SECRET, state['power_off']['controlList']);
}).then(result => {
    console.log("送信に成功しました");
}).catch(error => {
    console.log("送信に失敗しました");
});