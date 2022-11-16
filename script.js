var canvas = document.getElementById('zone');
var ctx = canvas.getContext('2d');

var largeur=hauteur=20;
var x= Math.trunc(canvas.width/2);
var y= Math.trunc(canvas.height/2);


var pommeX = Math.trunc(Math.random() * canvas.width/largeur)*largeur;
var pommeY = Math.trunc(Math.random() * canvas.height/hauteur)*hauteur;

var pommeRadius = 10;

var depX=depY=0
var trace = []
var tailleTrace = 50
var score = 0;

var scoreH2 = document.getElementById('score');
scoreH2.innerText = ("Votre score : "+score);

var hist = 0

var intervalID = setInterval(game,10);
document.addEventListener("keydown", keyboard);


function game() {
    y+=depY
    x+=depX

    trace.push({x:x,y:y});

    while(trace.length>tailleTrace){
        trace.shift();
    }
    ctx.fillStyle="#f1c40f";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(x, y, largeur, hauteur);
    for(var i=0;i<trace.length;i++) {
        ctx.fillRect(trace[i].x,trace[i].y, largeur, hauteur);
    }

    ctx.beginPath();
    ctx.arc(pommeX+pommeRadius, pommeY+pommeRadius, pommeRadius, 0, 2 * Math.PI);
    ctx.fillStyle = "#e74c3c";
    ctx.fill();
    ctx.closePath();


    if(x==pommeX && y ==pommeY){
        tailleTrace = tailleTrace + 10
        
        pommeX = Math.trunc(Math.random() * canvas.width/largeur)*largeur;
        pommeY = Math.trunc(Math.random() * canvas.height/hauteur)*hauteur;

        score = score + 1
        scoreH2.innerText = ("Votre score : "+score);
    }


    
}


function keyboard(evt) {
    switch (evt.keyCode) {
    case 37:

        if (hist == 39) break;
        depY = 0
        depX = -1
        hist = 37
        break;
    case 38:

        if (hist == 40) break;
        depX = 0
        depY = -1
        hist = 38
        break;
    case 39:

        if (hist == 37) break;
        depX = 1
        depY = 0
        hist = 39
        break;
    case 40:

        if (hist == 38) break;
        depX = 0
        depY = 1
        hist = 40
        break;
    case 32:
        console.log("space");
        depX = 0
        depY = 0
        break;
    default:
        console.log("other");
        break;
    }
}



// Créer le plateau de jeu
document.getElementById('plate').innerHTML = '<table id="plateboard"><tbody></tbody></table>';

var board = document.getElementById('plateboard').querySelector('tbody');

// Si i est impair on crée une tr avec la classe .row-odd sinon .row-even
for (i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
      board.innerHTML += '<tr class="row row-odd"></tr>';
    } else {
      board.innerHTML += '<tr class="row row-even"></tr>';
    }
  }

  // On récupère toutes les tr impaires et on les stocke dans un tableau
    var rowOdd = document.querySelectorAll('.row-odd');


    for(i = 0; i < rowOdd.length; i++) {
        for(j = 0; j < 16; j++) {
            if(j % 2 !== 0) {
                rowOdd[i].innerHTML += '<td class="cell cell-white"></td>';
            } else {
                rowOdd[i].innerHTML += '<td class="cell cell-black"></td>';
            }
        }
    }

  // On récupère toutes les tr paires et on les stocke dans un tableau
    var rowEven = document.querySelectorAll('.row-even');

    for(i = 0; i < rowEven.length; i++) {
        for(j = 0; j < 16; j++) {
            if(j % 2 !== 0) {
                rowEven[i].innerHTML += '<td class="cell cell-black"></td>';
            } else {
                rowEven[i].innerHTML += '<td class="cell cell-white"></td>';
            }
        }
    }