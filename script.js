function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
  }

  console.log("welcome to my music app");
  let songIndex = 0;
  let audioElement = new Audio('Doraemon.mp3');
  let songs= {
    {songName: "Doraemon theme song",filePath:"songs/Doraemon.mp3",coverPath: "images\Doraemon.jpg"},
    {songName: "Doraemon theme song",filePath:"songs/Doraemon.mp3",coverPath: "images\Doraemon.jpg"},
    {songName: "Doraemon theme song",filePath:"songs/Doraemon.mp3",coverPath: "images\Doraemon.jpg"},
    {songName: "Doraemon theme song",filePath:"songs/Doraemon.mp3",coverPath: "images\Doraemon.jpg"},
    {songName: "Doraemon theme song",filePath:"songs/Doraemon.mp3",coverPath: "images\Doraemon.jpg"},
  }
  audioElement.play();

  document.addEventListener('time')