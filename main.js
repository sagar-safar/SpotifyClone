const songs = [{songName:"song1", songPath:'./assets/music/celtic-irish-scottish-tin-whistle-background-music-10455.mp3',},
{songName:"song2", songPath:'./assets/music/get-down-low-clos3up-remix-by-aap-featuring-kegzi-22086.mp3'},
{songName:"song3", songPath:"./assets/music/good-king-wenceslas-english-christmas-carol-piano-and-shimmer-pad-11556.mp3"},
{songName:"song4", songPath:'./assets/music/in-the-bleak-midwinter-christmas-carol-concert-grand-piano-9619.mp3'},
{songName:"song5", songPath:"./assets/music/intro-music-black-box-roughly-made-bass-house-13217.mp3"},

]



const AudioList = []

for(let i =0;i<songs.length;i++){
    const src = songs[i]['songPath']

    const audio = new Audio(src)
    AudioList.push(audio)
}


let songIndex = 0;
const songList = document.querySelectorAll('.time .play');
console.log(songList);
const master = document.querySelector('.master-play')

const play = document.querySelectorAll('.time img')
for(let i=0;i<play.length;i++){

    play[i].addEventListener('click',()=>{

        AudioList[songIndex].pause();
        AudioList[songIndex].currentTime = 0;
        play[songIndex].src = "./assets/play.png"
        play[songIndex].className="play";

        songIndex = i; 
      
        
        

        if(play[i].className === "play"){
            play[i].src= "./assets/pause.png";
            play[i].className="pause"
            console.log("play");
            AudioList[i].play();
            master.src = "./assets/playbutt.png"
            
            
            
        }

        else{
            play[i].src= "./assets/play.png" ;
            play[i].className="play"

            console.log("pause");
            AudioList[i].pause()
            AudioList[i].currentTime = 0;
            console.log(AudioList[i].currentTime);
            master.src = "./assets/play2.png";

            

            
        }
    })

}



document.querySelector('.master-ahead').addEventListener('click',()=>{
    AudioList[songIndex].pause();
    AudioList[songIndex].currentTime = 0;
    songList[songIndex].src="./assets/play.png";
    if(songIndex!==AudioList.length-1){
        console.log(songIndex);
        songIndex += 1;
        AudioList[songIndex].play();
        songList[songIndex].src = "./assets/pause.png"
        

    }
    else{
        console.log(songIndex);
        songIndex = 0;
        AudioList[songIndex].play()
        songList[songIndex].src = "./assets/pause.png"
        
    }




    /*
    console.log(songIndex);
    songIndex += 1;
    if(songIndex === play.length){
        songIndex = 0;
    }
    for(let i=0;i<songs.length;i++){
        if(i!==songIndex){
            play[i].src = "./assets/play.png"
            AudioList[i].pause();
            AudioList[i].currentTime = 0;
        }
    }

    AudioList[songIndex].play();
    play[songIndex].src = './assets/pause.png'
    */
})

document.querySelector('.master-back').addEventListener('click',()=>{
    AudioList[songIndex].pause();
    AudioList[songIndex].currentTime = 0;
    songList[songIndex].src="./assets/play.png";
    if(songIndex>0){
        console.log(songIndex);
        songIndex -= 1;
        AudioList[songIndex].play();
        songList[songIndex].src = "./assets/pause.png";
        

    }
    else{
        console.log(songIndex);
        songIndex = AudioList.length-1;
        
        AudioList[songIndex].play()
        
        songList[songIndex].src = "./assets/pause.png";
        
    }


    
})


for(let i=0;i<AudioList.length;i++){
    AudioList[i].addEventListener('timeupdate',()=>{
        let progress = parseInt(((AudioList[i].currentTime)/(AudioList[i].duration))*100);
        
        document.querySelector('.range').value = `${progress}`
        
    })
}


document.querySelector('.range').addEventListener('change',()=>{
    console.log(songIndex);
    if(AudioList[songIndex].paused!==true){
        AudioList[songIndex].currentTime = document.querySelector('.range').value * AudioList[songIndex].duration/100;

    }
    
    
})




/*
if(master.className==="master-play"){
        if(AudioList[songIndex].className==="pause"){
            AudioList[songIndex].pause();
        }
        master.src = "./assets/playbutt.png";
        master.className = "master-pause"

    }

    else{
        if(AudioList[songIndex].className==="pause"){
            AudioList[songIndex].play();
        }
        
        master.src = "./assets/play2.png";
        master.className = "master-play"
    }
    
    console.log("yes");


*/