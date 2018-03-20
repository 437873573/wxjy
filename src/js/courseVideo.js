var options = {
  "controls": true,
  "autoplay": false,
  "preload": "auto",
  "loop": false,
  width: 1200,
  height: 616,
  controlBar: {
    captionsButton: false,
    chaptersButton: false,
    playbackRateMenuButton: true,
    LiveDisplay: true,
    subtitlesButton: false,
    remainingTimeDisplay: true,

    progressControl: true,
  }
};

var player = videojs('my-player', options, function onPlayerReady() {
  videojs.log('Your player is ready!');

  // In this context, `this` is the player that was created by Video.js.
  this.play();

  // How about an event listener?
  this.on('ended', function () {
    videojs.log('Awww...over so soon?!');
  });
});

$('.js-more-class').on('click', function (e) {
  e.preventDefault();
  $('.js-video-right').toggleClass('show');
})