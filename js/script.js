const musicStage = {};

/* Identify the user location inside the music description */
let userlocation = 0;

const musicCode = {
    
}

const musicDescription = {
    id = ['bgm0','bgm1','bgm2','bgm3','bgm4','bgm5','bgm6','bgm7'],
    bgm0: {
        author : 'Erik Lund',
        song: 'Summertime',
        image: './assets/images/eriklund-Summertime.jpg',
        location: './assets/audio/Erik Lund - Summertime.mp3',
    },
    bgm1: {
        author: 'Ahrix',
        song: 'Dreams',
        image: './assets/images/ahrix-Dreams.jpg',
        location: './assets/audio/Ahrix - Dreams.mp3',
    },
    bgm2: {
        author: 'Itro & Tobu',
        song: 'Cloud 9',
        image: './assets/images/itro&tobu-Cloud 9.jpg',
        location: './assets/audio/Itro & Tobu - Cloud 9.mp3',
    },
    bgm3: {
        author: 'Laszlo',
        song: 'Imaginary Friends',
        image: './assets/images/laszlo-ImaginaryFriends.jpg',
        location: './assets/audio/Laszlo - Imaginary Friends.mp3',
    },
    bgm4: {
        author: 'Alex Skrindo',
        song: 'Get Up Again',
        image: './assets/images/alexSkrindo-GetUpAgain.jpg',
        location: './assets/audio/Alex Skrindo - Get Up Again.mp3',
    },
    bgm5: {
        author: 'ColBreakz',
        song: 'Memories',
        image: './assets/images/colBreakz-Memories.jpg',
        location: './assets/audio/ColBreakz - Memories.mp3',
    },
    bgm6: {
        author: 'Tobu',
        song: 'Sound of Goodbye',
        image: './assets/images/tobu-SoundofGoodbye.jpg',
        location: './assets/audio/Tobu - Sound of Goodbye.mp3',
    },
    bgm7: {
        author: 'Tobu & Itro',
        song: 'Sunburst',
        image: './assets/images/tobu&itro-sunburst.jpg',
        location: './assets/audio/Tobu & Itro - Sunburst.mp3',
    },
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

        /* set maximum pages */
        if( userlocation < 4){
            userlocation = userlocation + 4;
        }
        /* I clear out the id, and add another new ID */
        for (let i = 0; i < 4 ; i++){

        $('.blog' & i).removeAttr('id').attr('id', musicDescription.bgm + (`${userlocation}` + i).id);
        }
    })
    $('.buttonPrevious').on('click', function() {
        console.log('previous');
    })

    /* when user click the circle */
    $('figcaption').on('click', function() {
        console.log(musicDescription[this.id]);
        console.log(this.id);
        /* Get the first element with a class of 'audioSelect', change the src */
        document.getElementsByClassName('audioSelect')[0].setAttribute('src', musicDescription[this.id].location);
    })
    $('.test1').on('click', function() {
        console.log('test');
    })
}

musicStage.init = () => {
    musicStage.titlePage();
    musicStage.userChoice();
    musicStage.select();
}

$(document).ready(musicStage.init());