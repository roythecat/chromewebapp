const main = document.querySelector("#main");
const imgNum = 4;

function paintImg(imgNumber){
    //const img = document.createElement("img")와 같음
    const img = new Image();
    img.src = `./img/${imgNumber+1}.jpg`
    main.appendChild(img);
    img.classList.add("show");


}

function getRandom(){
    const number = Math.floor(Math.random()*imgNum);
    return number;

}

function init(){
    const randomNumber = getRandom();
    paintImg(randomNumber);
}

init();