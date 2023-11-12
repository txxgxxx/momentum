const NATURE01 = "컴퓨터배경화면자연01.jpg"
const NATURE02 = "컴퓨터배경화면자연02.jpg"
const NATURE03 = "컴퓨터배경화면자연03.jpg"
const NATURE04 = "컴퓨터배경화면자연04.jpg"
const NATURE05 = "컴퓨터배경화면자연05.jpg"
const NATURE06 = "컴퓨터배경화면자연06.jpg"
const NATURE07 = "컴퓨터배경화면자연07.jpg"
const MINJI = "Minji.png";
const KENDRICK = "kendrick.jpeg";
const GREENPHOTO = "green.jpg";
const images = [
    MINJI, KENDRICK, GREENPHOTO, NATURE01, NATURE02, NATURE03, NATURE04, NATURE05, NATURE06, NATURE07
]


const chosenImage = images[Math.floor(Math.random() * images.length)];


const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.className = "bg"

document.body.append(bgImage);