var player = "X";
var numJog = 0;
var fim = false;


function checkjogo(id) {
    alert("OK");
}

function checkjogo(id) {
    alert(id);
}


function checkjogo(id) {

    if(fim == true){
        return false;
    }

    var pc = document.getElementById('pc').checked;

    var opt = verificaSRC(id);


    if (opt == "transp.png") {
        numJog++;
        document.getElementById(id).src = "img/" + player + ".png";

        if (winchek()) {
            alert("Fim de jogo!!! Vitória do " + player + " !!!")
            fim = true;
            return false;
           location.reload();
        }

        if (!winchek() && numJog == 9) {
            alert("Fim de Jogo!! Deu velha!!" )
            return false;
           location.reload();
        }

        if (player == "X") {
            player = "O";
        } 
        
        else {
            player = "X";
        }
    }

    if(pc && player == "O") {
        checkjogo(jogoDoPc());
    }

}


function verificaSRC(id) {
    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);
}

function jogoDoPc(){
    if(verificaSRC('c5') == "transp.png"){
        return 'c5';
    }
    return 'c' + Math.floor((Math.random()* 9) + 1);
}

function winchek() {
    if (((verificaSRC('c1') == verificaSRC('c2')) && (verificaSRC('c1') == verificaSRC('c3')) && verificaSRC('c1') != "transp.png") ||
        ((verificaSRC('c4') == verificaSRC('c5')) && (verificaSRC('c4') == verificaSRC('c6')) && verificaSRC('c4') != "transp.png") ||
        ((verificaSRC('c7') == verificaSRC('c8')) && (verificaSRC('c7') == verificaSRC('c9')) && verificaSRC('c7') != "transp.png") ||
        ((verificaSRC('c1') == verificaSRC('c4')) && (verificaSRC('c1') == verificaSRC('c7')) && verificaSRC('c1') != "transp.png") ||
        ((verificaSRC('c2') == verificaSRC('c5')) && (verificaSRC('c2') == verificaSRC('c8')) && verificaSRC('c2') != "transp.png") ||
        ((verificaSRC('c3') == verificaSRC('c6')) && (verificaSRC('c3') == verificaSRC('c9')) && verificaSRC('c3') != "transp.png") ||
        ((verificaSRC('c1') == verificaSRC('c5')) && (verificaSRC('c1') == verificaSRC('c9')) && verificaSRC('c1') != "transp.png") ||
        ((verificaSRC('c3') == verificaSRC('c5')) && (verificaSRC('c3') == verificaSRC('c7')) && verificaSRC('c3') != "transp.png")) {
        return true;
    }
    return false;
}

function Refresh(){
    window.location.reload();
  }

