/* Selectors -> Elements */
    
    var playBtn = $("#play");
    var video = $('video')[0];
    var progress = $(".progress__field");
    var step = $(".step");
    var volumeSlide = $("#vol")[0];
    var speedSlide = $("#speed")[0];
    var videoTime = $(".videotime");

/* events */

playBtn.on('click' , toogle);
video.addEventListener('click' , toogle);
video.addEventListener('timeupdate' , progressBar);
video.addEventListener('timeupdate' , vTime);
step.on('click', steps);
volumeSlide.addEventListener('input' , sound);
speedSlide.addEventListener('input' , speed);



/* Functions */

function removeNumbers(i){
    
    if (i){
        
        i = Math.round(i);    
    }
    return i;
}

function secondsTimeSpanToHMS(s) {
    var h = Math.floor(s/3600); //Get whole hours
    s -= h*3600;
    var m = Math.floor(s/60); //Get remaining minutes
    s -= m*60;
    return h+":"+(m < 10 ? '0'+m : m)+":"+(s < 10 ? '0'+s : s); //zero padding on minutes and seconds
}


function vTime(){

    var vCurrentTime = secondsTimeSpanToHMS(removeNumbers(video.currentTime));
    var vDuration = secondsTimeSpanToHMS(removeNumbers(video.duration));

   
    videoTime.html( vCurrentTime + " / " + vDuration);
}

function speed(){
    
    video.playbackRate = speedSlide.value;
    
}

function sound(){
    
    video.volume = volumeSlide.value;
}

function steps(){
    
    video.currentTime += $(this).data('step');
}

function progressBar(){
        
        var time = (video.currentTime/video.duration) * 100 + '%';
        progress.css('width', time);
    
}

function toogle(){
    
    if(video.paused){
        
        video.play();
        playBtn.html("⏸");
    
    }else{
        
        video.pause();
        playBtn.html("▶");

    }
}