const sharp = require("sharp");
const IMG_WIDTH = 640;
const IMG_HEIGHT = 480;
const IMG_CHANNELS = 4;
const seq = require("./seq.json");

const src = sharp({
  create: {
    width: IMG_WIDTH,
    height: IMG_HEIGHT,
    channels: IMG_CHANNELS,
    background: { r: 0, g: 0, b: 0, alpha: 1 },
  },
});

async function drawImage(src, out, callback) {
  const buffer = await src.toBuffer();
  callback(buffer);
  await sharp(buffer, {
    raw: { width: IMG_WIDTH, height: IMG_HEIGHT, channels: IMG_CHANNELS },
  })
    .flatten()
    .toFile(out);
}

async function main() {
  await drawImage(src, "dst.png", (buffer) => {
    // 下記コメントアウトをはずすと赤い画像が生成されます
    // for (let h = 0; h < IMG_HEIGHT; h++) {
    //   for (let w = 0; w < IMG_WIDTH; w++) {
    //     const index = (h * IMG_WIDTH + w) * IMG_CHANNELS;
    //     buffer[index + 0] = 0xff;
    //     buffer[index + 1] = 0x00;
    //     buffer[index + 2] = 0x00;
    //     buffer[index + 3] = 0xff;
    //   }
    // }
  });
}
main();
