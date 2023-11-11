const NATURE01 = "컴퓨터배경화면자연01.jpg"
const NATURE02 = "컴퓨터배경화면자연02.jpg"
const MINJI = "Minji.png";
const KENDRICK = "kendrick.jpeg";
const GREENPHOTO = "green.jpg";
const images = [
    MINJI, KENDRICK, GREENPHOTO, NATURE01, NATURE02
]


const chosenImage = images[Math.floor(Math.random() * images.length)];


const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.className = "bg"

document.body.append(bgImage);