



document.addEventListener("keydown", keyboard);


function game() {

}


function keyboard(evt) {

    
    switch (evt.keyCode) {
    case 37:
        console.log("left");
        break;
    case 38:
        console.log("up");
        break;
    case 39:
        console.log("right");
        break;
    case 40:
        console.log("down");
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