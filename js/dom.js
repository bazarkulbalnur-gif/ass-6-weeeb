$(document).ready(function () {
  var counter = 3;
  var $list = $('#itemList');
  var images = ['images/scene1.svg', 'images/scene2.svg'];
  var imageIndex = 0;
  var links = [
    { url: 'https://jquery.com', text: 'jQuery official website' },
    { url: 'https://api.jquery.com', text: 'jQuery API documentation' },
    { url: 'https://www.w3schools.com/jquery/', text: 'W3Schools jQuery tutorial' }
  ];
  var linkIndex = 0;

  function createItem() {
    counter++;
    return $('<li><span>Item ' + counter + '</span><button class="del" type="button" aria-label="Delete">&times;</button></li>').hide();
  }

  function updateNote() {
    var total = $list.children('li').length;
    $('#listNote').text(total > 0 ? 'Items in the list: ' + total : 'The list is empty. Add a new item!');
  }

  $('#btnAdd').on('click', function () {
    var $item = createItem();
    $list.append($item);
    $item.fadeIn(300);
    updateNote();
  });

  $('#btnPrepend').on('click', function () {
    var $item = createItem();
    $list.prepend($item);
    $item.fadeIn(300);
    updateNote();
  });

  $('#btnRemove').on('click', function () {
    var $last = $list.children('li').not('.removing').last();
    if ($last.length === 0) {
      return;
    }
    $last.addClass('removing').fadeOut(250, function () {
      $(this).remove();
      updateNote();
    });
  });

  $list.on('click', '.del', function () {
    $(this).closest('li').addClass('removing').slideUp(250, function () {
      $(this).remove();
      updateNote();
    });
  });

  updateNote();

  $('#btnSrc').on('click', function () {
    var $img = $('#swapImg');
    imageIndex = (imageIndex + 1) % images.length;
    $img.fadeOut(200, function () {
      $img.attr('src', images[imageIndex]).fadeIn(300);
    });
  });

  $('#btnHref').on('click', function () {
    linkIndex = (linkIndex + 1) % links.length;
    var current = links[linkIndex];
    $('#dynLink').attr('href', current.url).text(current.text);
    $('#hrefText').text(current.url);
  });

  $('#userForm').on('submit', function (event) {
    event.preventDefault();
  });

  $('#nameInput').on('input', function () {
    var value = $(this).val().trim();
    $('#outName').text(value === '' ? '...' : value);
  });

  $('#emailInput').on('input', function () {
    var value = $(this).val().trim();
    $('#outEmail').text(value === '' ? '...' : value);
  });
});
