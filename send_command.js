"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendCommand = void 0;
const request = require('request');
async function sendCommand(JSESSIONID, controlList) {
    return new Promise((resolve, reject) => {
        request.post({
            url: `${process.env.URL_PREFIX}/control/deviceControl?boxId=https://db.cloudlabs.sharp.co.jp/clpf/key/${process.env.BOX_ID}&appSecret=${process.env.APP_SECRET}`,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Connection': 'keep-alive',
                'Accept': '*/*',
                'User-Agent': 'smartlink_v200i Mozilla/5.0 (iPad; CPU OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                'Accept-Language': 'ja-jp',
                'Cookie': `JSESSIONID=${JSESSIONID}`
            },
            json: {
                controlList
            },
        }, (error, body) => {
            if (body.statusCode === 200) {
                resolve(body);
            }
            else {
                reject(error);
            }
        });
    });
}
exports.sendCommand = sendCommand;
