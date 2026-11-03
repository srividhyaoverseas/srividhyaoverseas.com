import https from 'node:https';
import fs from 'node:fs';

const reelUrl = 'https://www.instagram.com/reel/DeMQyCSgJ9M/embed/captioned/';

https.get(reelUrl, {
  headers: { 'User-Agent': 'Mozilla/5.0' }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const key = 'https:\\/\\/scontent';
    let idx = data.indexOf(key);
    while (idx !== -1) {
      const end = data.indexOf('"', idx);
      const urlPart = data.substring(idx, end);
      if (urlPart.includes('t15.5256-10') && urlPart.includes('.jpg')) {
        const clean = urlPart.replaceAll('\\/', '/').replaceAll('\\u0026', '&');
        console.log('Downloading url:', clean);
        https.get(clean, (img) => {
          const stream = fs.createWriteStream('public/testimonials/reel-demqycsgj9m.jpg');
          img.pipe(stream);
          stream.on('finish', () => console.log('Saved to public/testimonials/reel-demqycsgj9m.jpg!'));
        });
        break;
      }
      idx = data.indexOf(key, idx + 1);
    }
  });
});
