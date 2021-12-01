const request = require('request');

//POSTリクエストを送信するメソッド
//ヘッダーに必ずUser-Agentを設定すること
//CookieにJSESSIONIDを設定すること
export async function sendCommand(URL_PREFIX:string, BOX_ID:string, JSESSIONID: string, APP_SECRET:string, controlList: any) {
    return new Promise((resolve, reject) => {
        request.post(
        {
            url: `${URL_PREFIX}/control/deviceControl?boxId=https://db.cloudlabs.sharp.co.jp/clpf/key/${BOX_ID}&appSecret=${APP_SECRET}`,
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
        },
        (error:any, response:any, body:any) => {
            if (error) {
            reject(error);
            } else {
            resolve(body);
            }
        }
        );
    });
    }