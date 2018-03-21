

// JavaScript Document

(() => {
console.log('video stuff fired!');

 const vidPlayer = document.querySelector('video'),
 playButtom =document.querySelector('button')[0],
  pauseButtom =document.querySelector('button')[1],
  rewindButtom =document.querySelector('button')[2],


  function volOn() {

    vidPlayer.muted = false;
}
  function volOff() {
    vidPlayer.muted = true;
  }
  function rewindVid(){
    vidPlayer.currentTime -= 5;
  }
  function playVideo(){
    vidPlayer.play();
  }
  function pauseVideo(){
    vidPlayer.pause();
  }


vidPlayer.addEventListener('moseover' volOn);
vidPlayer.addEventListener('moseout' volOff);

rewindButtom.addEventListener('click',rewindVid);
pauseButtom.addEventListener('click',pauseVid);
playButtom.addEventListener('click',playVid)


})();
