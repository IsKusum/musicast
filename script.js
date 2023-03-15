function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
  }
  let songIndex = 0;
  let audioElement = new Audio('songs/Doraemon.mp3');
  let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Doraemon theme song",filePath: "songs/Doraemon.mp3",coverPath:"images/doraemon.jpg"},
    {songName: "Ben 10 theme song",filePath: "songs/ben.mp3",coverPath:"images/Ben 10.jpg"},
    {songName: "Kiteretsu theme song",filePath: "songs/kit.mp3",coverPath:"images/Kiteretsu.jpg"},
    {songName: "Doraemon theme song",filePath:"songs/pok.mp3",coverPath:"images/pokemon.jpg"},
    {songName: "Doraemon theme song",filePath:"songs/shin.mp3",coverPath:"images/Shinchan.jpg"},
  ]
  masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
      masterPlay.classList.remove('fa-sharp fa-regular fa-circle-pause');
    }
    else{
      audioElement.pause();
      masterPlay.classList.add("fa-circle-play");
      masterPlay.classList.remove("fa-circle-pause");
  }
  })
  audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100)
   //console.log('timeupdate');
     myProgressBar.value = progress;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  })

  myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
  })
  audioElement.play();
