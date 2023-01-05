import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const video = document.querySelector('#vimeo-player');

const player = new Player(video);

player.on('timeupdate', throttle(setWatchingTime, 1000));

function setWatchingTime(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}
const getContentOfLocalStorage = (
  localStorage.getItem('videoplayer-current-time') || 0
);

player.setCurrentTime(getContentOfLocalStorage);

console.log(Player);



// player.on(
//   "timeupdate",
//   throttle(function playTime(e) {
//     localStorage.setItem("vid-time", e.seconds)
//   }, 1000),
// );

// player.setCurrentTime(localStorage.getItem('vid-time')) ?? 0;