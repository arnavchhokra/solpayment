
const app = express();
const CryptoJS = require('crypto-js');
const axios = require('axios');
async function createOrder() {
  try {
        let body = {
          coinId: '54',         //required
          chainId: '3',         //required
          coinAmount: '2.00',   //required
      }
    let payload = {
      timestamp: new Date().getTime(),
      body
    }

    payload = Buffer.from(JSON.stringify(payload)).toString('base64');
    let signature = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA512(payload, apiSecret));
    let options = {
      url: 'https://api.onramp.money/onramp-merchants/widget/createOrder',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'X-ONRAMP-SIGNATURE': signature,
        'X-ONRAMP-APIKEY': apiKey,
        'X-ONRAMP-PAYLOAD': payload
      },
      data: body
    };
    let response = await axios(options)
    console.log(response?.data);
  } catch (error) {
    console.log(error?.response?.data)
  }
}

createOrder()

app.listen(3000, () =>
  console.log('Listening on port 3000!'),
);