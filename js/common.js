$(document).ready(function () {
  var $fx = $('#bgFx');
  var petalColors = ['#ff9ec7', '#ffffff', '#c9a7ff', '#ffd1e3', '#fff3a8', '#ffb3d9'];
  var centerColors = ['#ffe066', '#ffb347', '#fff3a8'];

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function pick(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  function flowerSvg() {
    var petals = '';
    var color = pick(petalColors);
    for (var i = 0; i < 6; i++) {
      petals += '<ellipse cx="0" cy="-24" rx="13" ry="22" transform="rotate(' + (i * 60) + ')"/>';
    }
    return '<svg viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg">' +
      '<g fill="' + color + '" stroke="rgba(255,255,255,0.8)" stroke-width="1.5">' + petals + '</g>' +
      '<circle r="11" fill="' + pick(centerColors) + '"/></svg>';
  }

  var i;

  for (i = 0; i < 28; i++) {
    var size = rand(14, 72);
    $('<span class="bubble"></span>').attr('style',
      'width:' + size + 'px;height:' + size + 'px;' +
      'left:' + rand(0, 98) + '%;' +
      '--sway:' + rand(-60, 60) + 'px;' +
      'animation-duration:' + rand(14, 30) + 's;' +
      'animation-delay:-' + rand(0, 30) + 's;' +
      'opacity:' + rand(0.55, 1) + ';'
    ).appendTo($fx);
  }

  for (i = 0; i < 16; i++) {
    var fSize = rand(30, 66);
    $('<span class="flower"></span>').attr('style',
      'width:' + fSize + 'px;height:' + fSize + 'px;' +
      'left:' + rand(0, 96) + '%;' +
      '--sway:' + rand(-80, 80) + 'px;' +
      'animation-duration:' + rand(18, 38) + 's;' +
      'animation-delay:-' + rand(0, 38) + 's;' +
      'opacity:' + rand(0.75, 1) + ';'
    ).html(flowerSvg()).appendTo($fx);
  }

  $('.menu-toggle').on('click', function () {
    $('.nav-links').toggleClass('open');
  });
});
