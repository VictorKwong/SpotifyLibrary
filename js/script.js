const musicStage = {};

let musicStore = {
    bgm0: './assets/audio/Erik Lund - Summertime.mp3',
    bgm1: './assets/audio/Ahrix - Dreams.mp3',
    bgm2: './assets/audio/Itro & Tobu - Cloud 9.mp3'
}

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
    $('.buttonNext').on('click', function() {
        console.log('next');
    })
    $('.buttonPrevious').on('click', function() {
        console.log('previous');
    })

    /* when user click the circle */
    $('figcaption').on('click', function() {
        console.log(musicStore[this.id]);
        /* Get the first element with a class of 'audioSelect', change the src */
        document.getElementsByClassName('audioSelect')[0].setAttribute('src', musicStore[this.id]);
    })
}

musicStage.init = () => {
    musicStage.titlePage();
    musicStage.userChoice();
    musicStage.select();
}

$(document).ready(musicStage.init());