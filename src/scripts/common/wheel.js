let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let nowWidth = canvas.offsetWidth;
canvas.width = nowWidth;
canvas.height = nowWidth;
let width = canvas.width;
let center = width/2;
let items = [1,2,3,4,5,6];
let itemsCount = items.length;
let itemsDeg = 360/items.length;
var deg = rand(0, 360);
let speed = 0;
var speedDown = 0;
let start = false;
let stop = false;
let result = false;
let btn = document.getElementById('btn');
let popup = document.getElementById('popup');
let btnPopup = document.getElementById('btn-popup');
let popupClose = document.getElementById('popup-close');
let popupResult = document.getElementById('popup-result');

function rand(min, max) {
    return Math.random() * (max - min) + min;
}
  
function getRadians(degrees) {
    return (Math.PI/180)*degrees;
}

function drawItem(deg) {
    ctx.beginPath();
    ctx.fillStyle = '#ffffff';
    ctx.moveTo(center, center);
    ctx.arc(center, center, center, getRadians(deg), getRadians(deg + itemsDeg));
    ctx.lineTo(center,center);
    ctx.fill();
}
  
function drawText(text) {
    ctx.save();
    ctx.translate(center, center);
    ctx.rotate( getRadians( deg + itemsDeg/2 ) );
    ctx.textAlign = "right";
    ctx.fillStyle = "#000000";
    ctx.font = '28px VremenaGrotesk';
    ctx.fillText(text, center - 30 , 10);
    ctx.restore();
}
  
function drawImg() {
    ctx.clearRect(0, 0, width, width);
    for (let i = 0; i < items.length; i++) {
        drawItem(deg);
        drawText(items[i]);
        deg = deg + itemsDeg;
    }
}

function addPopup() {
    popup.style.display = 'flex';
    popupResult.innerHTML = '';
    popupResult.innerHTML = items[res];
    let bg = document.createElement('div');
    bg.classList.add('popup__bg');
    document.body.appendChild(bg);
}

function removePopup() {
    popup.style.display = 'none';
    document.body.removeChild(document.querySelector('.popup__bg'));
}
  
(function animateWheel() {
    deg += speed;
    deg %= 360;
     
    // Start rotate
    if(start) {
        speed = speed + 1 * 0.1;
      
        if(speed > rand(2, 5)) {
            start = false;
            stop = true;
        }
    }

    // Stop rotate
    if(stop) {
        speedDown = rand(0.992, 0.999);
        speed = speed>0.2 ? speed*=speedDown : 0;
    }
    
    // Result
    if(stop && !speed){
        let res = Math.floor(((360 - deg - 90) % 360) / itemsDeg);
        res = (itemsCount + res) % itemsCount;
        addPopup();
        stop = false;
    }
    
    drawImg();
    window.requestAnimationFrame(animateWheel);
     
}());

btn.addEventListener('click', ()=>{
    start = true;
});

popupClose.addEventListener('click', ()=>{
    removePopup();
});

btnPopup.addEventListener('click', ()=>{
    removePopup();
    start = true;
});