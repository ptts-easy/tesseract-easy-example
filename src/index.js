const fs = require("fs");
const Tesseract= require('tesseract.js');

const config = {
  lang: "eng",
  oem: 1,
  psm: 3,
}

const image_path = "datasets/bmp/IMG_20221206_091243_701.jpg";
const text_path = "datasets/text/IMG_20221206_091243_701.text";

async function main() {

    if(fs.existsSync(image_path) == false) {
        console.log("image file not found !!!");
        return;
    }

    const img = fs.readFileSync(image_path);

//    Tesseract.recognize(image_path, 'eng', { logger: m => console.log(m) })
    Tesseract.recognize(image_path, 'eng', { })
        .then(({ data: { text } }) => {
            console.log("Result:", text);
            fs.writeFileSync(text_path, text, 'utf8');  
        });
}

main();
