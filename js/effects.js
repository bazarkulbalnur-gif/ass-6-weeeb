$(document).ready(function () {
  var $para = $('#textPara');
  var $img = $('#fadeImg');
  var $panel = $('#panelBody');

  $('#btnHide').on('click', function () {
    $para.hide(600);
  });

  $('#btnShow').on('click', function () {
    $para.show(600);
  });

  $('#btnToggle').on('click', function () {
    $para.toggle(600);
  });

  $('#btnFadeIn').on('click', function () {
    $img.fadeIn(800);
  });

  $('#btnFadeOut').on('click', function () {
    $img.fadeOut(800);
  });

  $('#btnFadeToggle').on('click', function () {
    $img.fadeToggle(800);
  });

  $('#btnSlideUp').on('click', function () {
    $panel.slideUp(600);
  });

  $('#btnSlideDown').on('click', function () {
    $panel.slideDown(600);
  });

  $('#btnSlideToggle').on('click', function () {
    $panel.slideToggle(600);
  });
});
