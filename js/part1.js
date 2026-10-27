$(document).ready(function () {
  console.log('jQuery is ready!');

  $('#readyStatus').text('jQuery is ready!').addClass('ok');

  var originalContent = $('#demoArea').html();

  $('#btnId').on('click', function () {
    $('#mainTitle').text('Title changed with .text()').css('color', '#2b8fcb');
  });

  $('#btnClass').on('click', function () {
    $('.demo-text')
      .html('<strong>Updated</strong> with <em>.html()</em> method')
      .css({
        'background-color': '#d6f1ff',
        'color': '#1b6ca8'
      });
  });

  $('#btnTag').on('click', function () {
    $('li').css({
      'background-color': '#2b8fcb',
      'color': '#ffffff',
      'padding': '6px 14px',
      'margin': '6px 0',
      'border-radius': '10px',
      'list-style': 'none'
    });
  });

  $('#btnReset').on('click', function () {
    $('#demoArea').html(originalContent);
  });
});
