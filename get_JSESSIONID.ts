const request = require('request');

//ヘッダーに必ずUser-Agentを設定すること。
export async function get_JSESSIONID(): Promise<any> {
    return new Promise((resolve, reject) => {
        request.post(
            {
                url: `${process.env.URL_PREFIX}/setting/login/?appSecret=${process.env.APP_SECRET}&serviceName=iClub`,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Connection': 'keep-alive',
                    'Accept': '*/*',
                    'User-Agent': 'smartlink_v200i Mozilla/5.0 (iPad; CPU OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                    'Accept-Language': 'ja-jp'
                },
                json: {
                    "terminalAppId": `https://db.cloudlabs.sharp.co.jp/clpf/key/${process.env.TERMINALAPPIDKEY}`
                },
            },
            (error: any, response: { headers: { [x: string]: any; }; }) => {
                if (error) {
                    reject(error);
                } else {
                    //Cookieをパースして、JSESSIONIDを取得する
                    const cookie = response.headers['set-cookie'];
                    const JSESSIONID = cookie[0].split(';')[0].split('=')[1];
                    //console.log(JSESSIONID);
                    resolve(JSESSIONID);
                }
            }
        );
    })
};