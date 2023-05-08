let video = document.getElementById('un-video');
let playButton = document.getElementById("play");
let pauseButton= document.getElementById("pause");

playButton.addEventListener('click', ()=>{
    video.play()
});

pauseButton.addEventListener('click', ()=>{
    video.pause()
});

setTimeout(()=>{document.getElementById('duration').innerHTML=` Duracion video : ${video.duration.toFixed(2)}`},1000);

for (let i = 0; i < video.tim; i++) {
    console.log(video.currentTime)
    
}


