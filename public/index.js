document.addEventListener('DOMContentLoaded', init, false);

/** 
* You can manipulate the video here
* For example: Uncomment the code below and in the index to get a Start/Stop button
*/
function init() {
  const video = document.getElementById('video')
	video.autoplay = true;
	video.loop = true
	video.src = '/video?' + window.location.href.split('?')[1];
}