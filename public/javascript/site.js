$(function(){
  $('#frame-window').scrollable({
    onSeek: function(){
      var h = this.getItems().eq(this.getIndex()).height();
      $('#frame-window').animate({
          height: h + 'px'
        },
        600
      );
    }
  }).navigator({
    navi:'ul#nav'
  });
});