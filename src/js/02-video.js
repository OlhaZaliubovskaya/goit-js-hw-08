import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const video = document.querySelector("#vimeo-player");

const player = new Player(video);

player.on(
  "timeupdate",
  throttle(function playTime(e) {
    localStorage.setItem("vid-time", e.seconds)
  }, 1000),
);

player.setCurrentTime(localStorage.getItem('vid-time'));