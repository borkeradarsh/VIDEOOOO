function playVideo() {
    var videoContainer = document.getElementById("video-container");
    videoContainer.style.display = "block";
    videoContainer.style.position = "absolute";
    videoContainer.style.top = "0";
    videoContainer.style.left = "0";
    videoContainer.style.width = "100%";
    videoContainer.style.height = "100%";
    videoContainer.style.zIndex = "1000";
    
    var textElement = document.getElementById("text-element");
    textElement.style.display = "none";
    
    var video = document.getElementById("myVideo");
    video.play();
    
    // Hide the buttons when the video is playing
    var buttons = document.querySelectorAll("button");
    buttons.forEach(function(button) {
      button.style.display = "none";
    });
    
    // Add event listeners to show the buttons and text when the video is paused or ended
    video.addEventListener("pause", function() {
      buttons.forEach(function(button) {
        button.style.display = "block";
      });
      textElement.style.display = "block";
      videoContainer.style.display = "none";
    });
    
    video.addEventListener("ended", function() {
      buttons.forEach(function(button) {
        button.style.display = "block";
      });
      textElement.style.display = "block";
      videoContainer.style.display = "none";
    });
  }