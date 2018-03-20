function toTop(){
  $('#js-to-top').on('click', function () {
    console.log(11);
    $(window).scrollTop(0);
  });
}

export { toTop };