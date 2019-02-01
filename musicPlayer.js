var list=["1.mp3","2.mp3","3.mp3","4.mp3"];
var shuffledList=[];
var currentSong=list[0];
var index=0;


var first =document.getElementById("song1");
var sec   =document.getElementById("song2");
var third =document.getElementById("song3");
var forth =document.getElementById("song4");
var playBtn =document.getElementById("playBtn");
var nextBtn =document.getElementById("nextBtn");
var prevBtn =document.getElementById("prevBtn");
var repeatBtn =document.getElementById("repeatBtn");
var 

shuffleBtn =document.getElementById("shuffleBtn");
var musicPlayer=document.getElementById("mySong");
var repeat=false;
repeatBtn.textContent="repeat:off";
var shuffle=false;
shuffleBtn.textContent="shuffle:off";


first.addEventListener('click',function()
{
    index=0;
    play();
})


sec.addEventListener('click',function()
{
    index=1;
    play();
})


third.addEventListener('click',function()
{
    index=2;
    play();
})


forth.addEventListener('click',function()
{
    index=3;
    play();
})

playBtn.addEventListener('click',function()
{
   play();
});

function play()
{
    musicPlayer.src=list[index];
    musicPlayer.play();
};

repeatBtn.addEventListener('click',function()
{
   if(repeat==true)
   {
       repeat=false;
     
       this.textContent="repeat:off";
   }
   else{
    repeat=true;
    
    this.textContent="repeat:on";
   }
});

shuffleBtn.addEventListener("click",function()
{
    if(!shuffle )
   {
        shuffle=true;
        shuffleBtn.textContent="shuffle:on";
      
        var newIndex =0;
        var found =false;
        for(var i=0; i<4 ;i++)
        {
            newIndex=Math.floor(Math.random() * list.length);
            console.log(newIndex);
            
            found =false;
            for( var old of shuffledList)
            {
                if ( list[newIndex] == old)
                {
                    found =true ;
                }
            }
            
            if(found)
            {
                i--;
            }
            else
            {
                shuffledList[i]= list[newIndex];
            }
        
        }
    }
    else
    {
        shuffle=false;
        shuffleBtn.textContent="shuffle:off";
    }
})
musicPlayer.addEventListener('ended',function()
{
    
    playNext();
})

nextBtn.addEventListener("click",function()
{
    playNext();
})


function playNext()
{
    if(!repeat && index ==3)
        {
            musicPlayer.stop();
        }
        index=(index+1)%4;
    if(!shuffle)
    {
        musicPlayer.src=list[index];
    }
    else{
        musicPlayer.src=shuffledList[index];
    } 
    musicPlayer.play(); 
}

prevBtn.addEventListener("click",function()
{
    if(index>0)
    {
        index--;
    }
    if(!shuffle)
    {
        musicPlayer.src=list[index];
    }
    else{
        musicPlayer.src=shuffledList[index];
    } 
    musicPlayer.play(); 

})