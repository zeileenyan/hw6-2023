var video;

video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	console.log("autoplay is set to", video.autoplay);
	video.loop = false;
	console.log("loop is set to", video.loop);
});

//play video and update volume
document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play video");
	video.play();
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
 });

 //pause video
 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause video");
  	video.pause();
});

//slow video
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
    video.playbackRate *= 0.9;
	console.log("current speed:", video.playbackRate);
});


//speed video
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate *= 1.1;
	console.log("current speed:", video.playbackRate);
});

//skip video
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
    video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}

	console.log("video time:", video.currentTime);
});


//mute video
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		document.querySelector("#mute").innerHTML = "Mute";
		video.muted = false;
		console.log("Muted Video");
	} else {
		document.querySelector("#mute").innerHTML = "Unmute";
		video.muted = true;
		console.log("Unmuted Video");
	}
});


//update slider value
document.querySelector("#slider").addEventListener("input", function() {
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
	console.log("current volume:", video.volume);
});


//add oldSchool class
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});


//remove oldSchool class
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});