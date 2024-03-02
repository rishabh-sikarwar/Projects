console.log("WElcome to spotify");


// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));
let masterSongName = document.getElementById('masterSongName');


let songs = [
    {songName: "Legion"  , filePath: "songs/1.mp3"  , coverPath: "covers/1.jpg"},
    {songName: "Trap cartel"  , filePath: "songs/2.mp3"  , coverPath: "covers/2.jpg"},
    {songName: "They Mad"  , filePath: "songs/3.mp3"  , coverPath: "covers/3.jpg"},
    {songName: "Rich the Kid"  , filePath: "songs/4.mp3"  , coverPath: "covers/4.jpg"},
    {songName: "Janji - Heros tonight"  , filePath: "songs/5.mp3"  , coverPath: "covers/5.jpg"},
    {songName: "The Safety Dance"  , filePath: "songs/6.mp3"  , coverPath: "covers/6.jpg"},
    {songName: "Back It Up"  , filePath: "songs/7.mp3"  , coverPath: "covers/7.jpg"},
    {songName: "YO YO Honey singh"  , filePath: "songs/8.mp3"  , coverPath: "covers/8.jpg"},
    {songName: "True Love"  , filePath: "songs/9.mp3"  , coverPath: "covers/9.jpg"},
    {songName: "Let me Love you"  , filePath: "songs/10.mp3"  , coverPath: "covers/10.jpg"},
]


songItems.forEach((e ,i)=>{
    console.log(i);
        e.getElementsByTagName('img')[0].src = songs[i].coverPath;
        e.getElementsByClassName('songName')[0].innerText = songs[i].songName
})
//  audioElement.play();


// handle play/pause click
masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused  ||  audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.src = "pause.png";
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterPlay.src= "play.png";
        gif.style.opacity = 0;
    }
})

// listen to events 
audioElement.addEventListener('timeupdate' , ()=> {
    // update seek bar
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((e)=>{
        e.src = 'play.png';
    })
}


songItemPlay.forEach((e)=>{
    e.addEventListener('click' , ()=>{
            
        songIndex = parseInt(e.id);
             makeAllPlays();
             masterSongName.innerText = songs[songIndex].songName;
            console.log(e.id);
            e.src = "pause.png";
            audioElement.src = `songs/${songIndex+1}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.src = 'pause.png';
          

    })
})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    console.log("previous song");
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.src = 'pause.png';
})


document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    console.log("next song");
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src =  `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.src = 'pause.png';
})