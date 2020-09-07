const musicStage = {};

musicStage.userChoice = function (){

    console.log('hello');
    let audioElem = document.getElementById("1");
    $(window).keypress(function(e) {
        //if user press spacebar
        if(this.paused && e.keyCode == 32){
            this.play();
        }else if(this.play && e.keyCode == 32){
            this.pause();
        }
    })
}

musicStage.titlePage = function () {
    $('.bgSec').hide();
    $('.startGo').on('click', function() {
        $('.bgFirst').hide();
        $('.bgSec').show();
    })
}

musicStage.select = function (){
    $('.next').on('click', function() {
        console.log('next');
    })
    $('.previous').on('click', function() {
        console.log('previous');
    })
}

musicStage.init = () => {
    musicStage.titlePage();
    musicStage.userChoice();
    musicStage.select();
}

$(document).ready(musicStage.init());