$(document).ready(function () {
  var startSize = 80;

  var $stage8 = $('#stage8');
  var $box8 = $('#box8');

  $('#btnAnim8').on('click', function () {
    var newSize = 140;
    $box8.stop(true).animate({
      width: newSize,
      height: newSize,
      left: ($stage8.width() - newSize) / 2,
      top: ($stage8.height() - newSize) / 2
    }, 1000);
  });

  $('#btnReset8').on('click', function () {
    $box8.stop(true).animate({
      width: startSize,
      height: startSize,
      left: 0,
      top: 0
    }, 600);
  });

  var $stage9 = $('#stage9');
  var $box9 = $('#box9');

  $('#btnAnim9').on('click', function () {
    var maxLeft = $stage9.width() - startSize;
    var maxTop = $stage9.height() - startSize;

    $box9.stop(true).css({
      width: startSize,
      height: startSize,
      left: 0,
      top: 0
    });

    $box9
      .animate({ left: maxLeft }, 800)
      .animate({ top: maxTop }, 800)
      .animate({ width: 40, height: 40 }, 700)
      .animate({
        left: 0,
        top: 0,
        width: startSize,
        height: startSize
      }, 1000);
  });

  $('#btnReset9').on('click', function () {
    $box9.stop(true).animate({
      width: startSize,
      height: startSize,
      left: 0,
      top: 0
    }, 500);
  });

  var $stage10 = $('#stage10');
  var $box10 = $('#box10');

  $('#btnAnim10').on('click', function () {
    var newSize = 150;
    $box10.stop(true).animate({
      opacity: 0.4,
      width: newSize,
      height: newSize,
      left: $stage10.width() - newSize,
      top: ($stage10.height() - newSize) / 2
    }, 1500);
  });

  $('#btnReset10').on('click', function () {
    $box10.stop(true).animate({
      opacity: 1,
      width: startSize,
      height: startSize,
      left: 0,
      top: 0
    }, 600);
  });
});
