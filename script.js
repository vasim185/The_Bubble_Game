var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){

    score += 10;
    document.querySelector("#scoreVal").textContent = score;

}

function getnewHit(){
     hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBuble(){
    var clutter = " ";
for(var i = 1; i <= 207; i++){

    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="buble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer(){
   var timerInt = setInterval(function(){

        if(timer > 0){
            timer --;
        document.querySelector("#timerval").textContent = timer;

        }else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
        
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickednumber = Number(dets.target.textContent);
    if(clickednumber === hitrn){
        increaseScore();
        makeBuble();
        getnewHit();
    }
})

runTimer();
getnewHit();
makeBuble();