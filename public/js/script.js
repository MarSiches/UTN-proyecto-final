let video = document.getElementById('un-video');
let playButton = document.getElementById("play");
let pauseButton= document.getElementById("pause");

playButton.addEventListener('click', ()=>{
    video.play()
});

pauseButton.addEventListener('click', ()=>{
    video.pause()
});



