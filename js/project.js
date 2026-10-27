$(document).ready(function () {
  var $stage = $('#ballStage');
  var $ballX = $('#ballX');
  var $ball = $('#ball');
  var $counter = $('#bounceCounter');
  var ballSize = 64;
  var groundHeight = 14;
  var running = false;
  var goingRight = true;
  var falling = true;
  var bounces = 0;

  $.extend($.easing, {
    easeInQuad: function (p) {
      return p * p;
    },
    easeOutQuad: function (p) {
      return 1 - (1 - p) * (1 - p);
    }
  });

  function getSpeed() {
    return parseInt($('#speedRange').val(), 10);
  }

  function updateCounter() {
    $counter.text('Bounces: ' + bounces);
  }

  function moveHorizontal() {
    if (!running) {
      return;
    }
    var maxLeft = $stage.width() - ballSize;
    var target = goingRight ? maxLeft : 0;
    var distance = Math.abs(target - parseFloat($ballX.css('left')));
    var duration = Math.max(distance / (0.2 * getSpeed()), 40);

    $ballX.animate({ left: target }, {
      duration: duration,
      easing: 'linear',
      complete: function () {
        goingRight = !goingRight;
        bounces++;
        updateCounter();
        moveHorizontal();
      }
    });
  }

  function moveVertical() {
    if (!running) {
      return;
    }
    var ground = $stage.height() - groundHeight - ballSize;
    var peak = 10;
    var current = parseFloat($ball.css('top'));
    var fullTime = 900 / (0.6 + 0.4 * getSpeed());

    if (falling) {
      var fallDistance = ground - current;
      $ball.animate({ top: ground }, {
        duration: Math.max(Math.sqrt(fallDistance / ground) * fullTime, 40),
        easing: 'easeInQuad',
        complete: function () {
          falling = false;
          bounces++;
          updateCounter();
          moveVertical();
        }
      });
    } else {
      var riseDistance = current - peak;
      $ball.animate({ top: peak }, {
        duration: Math.max(Math.sqrt(riseDistance / ground) * fullTime, 40),
        easing: 'easeOutQuad',
        complete: function () {
          falling = true;
          moveVertical();
        }
      });
    }
  }

  function stopBall() {
    running = false;
    $ballX.stop(true);
    $ball.stop(true);
  }

  $('#btnStart').on('click', function () {
    if (running) {
      return;
    }
    running = true;
    moveHorizontal();
    moveVertical();
  });

  $('#btnStop').on('click', stopBall);

  $('#btnResetBall').on('click', function () {
    stopBall();
    $ballX.css('left', 0);
    $ball.css('top', 0);
    goingRight = true;
    falling = true;
    bounces = 0;
    updateCounter();
  });
});
