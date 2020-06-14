import axios from 'axios';
const qs = require('querystring');

axios.defaults.timeout = 5000;
axios.defaults.withCredentials = true;

export async function translateSrc() {
  console.log('translateSrc 000');
  const params = qs.stringify({
    source: 'en',
    target: 'ko',
    text: "Python is an easy to learn, powerful programming language.",
  });

  console.log('translateSrc 111');

  const config = {
    baseURL: 'https://openapi.naver.com/v1/',
    headers: {
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'x-naver-client-id': 'U_1WgWNOSP9twnRpIlzs',
      'x-naver-client-secret': 'DjOsHVmHWH',
    },
  };

  console.log('translateSrc 222');

  const response = await axios.post('papago/n2mt', params, config);

  console.log('translateSrc 333');
  return response.data.message.result.translatedText;

  // return axios.post('papago/n2mt', params, config)
  //   .then((res) => {
  //     console.log('>>> ',res);

  //     return res.data.message.result.translatedText;
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
}

export default {
  translateSrc
}
