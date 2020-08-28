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
musicStage.init = () => {
    musicStage.userChoice();
}

$(document).ready(musicStage.init());