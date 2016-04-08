
$(document).ready(function(){

  if (parseParam('student')) {
    populateModalWithId(parseParam('student'));
  }

  // click on card
  $('.flipping-card').on('click', function() {
    if (!$(this).data('fake')) {
      var href = $(this).data('href');
      var prev = $(this).data('prev');
      var next = $(this).data('next');
      addParam('student=' + $(this).attr('id'));
      initModal(href, prev, next);
    }
  });

  $(document).on('keyup', function(e) {
    if (e.keyCode == 27) {
      escapeFromModal();
    }
  });

  // click out modal
  $(document).on('click', '.modal-student-container', function() {
    escapeFromModal();
  });

  $('.modal-student, .flipping-card-item').on('click', function(e) { e.stopPropagation() });

  // click on arrows
  $('.modal-student-arrow').on('click', function(e) {
    var id = $(this).attr('data-id');
    e.stopPropagation();

    if (id) {
      populateModalWithId(id);
      addParam('student=' + id);
    }
  });

  function initModal(href, prev, next) {
    $('.modal-student-container').addClass('is-active');
    $('.modal-student-container iframe').attr('src', href);
    $('.modal-student-url').attr('href', href);
    $('.modal-student-url span').text(href);

    initArrows(prev, next);
  }

  function initArrows(prev, next) {
    if(prev) {
      $('.modal-student-arrow.is-prev').attr('data-id', prev);
      $('.modal-student-arrow.is-prev').removeClass('is-disabled');
    } else {
      $('.modal-student-arrow.is-prev').addClass('is-disabled');
    }

    if(next) {
      $('.modal-student-arrow.is-next').attr('data-id', next);
      $('.modal-student-arrow.is-next').removeClass('is-disabled');
    } else {
      $('.modal-student-arrow.is-next').addClass('is-disabled');
    }
  }

  function populateModalWithId(id) {
    var el = $('#' + id);

    if ($(el).length && !$(el).data('fake')) {
      initModal(el.attr('data-href'), el.attr('data-prev'), el.attr('data-next'));
    }
  }

  function escapeFromModal() {
    $('.modal-student-container').removeClass('is-active');
    $('.modal-student-container iframe').removeAttr('src');
    clearParams();
  }
});
