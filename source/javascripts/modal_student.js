
$(document).ready(function(){
  // click on card
  $('.flipping-card').on('click', function() {
    if(!$(this).data('fake')) {
      var href = $(this).data('href');
      var prev = $(this).data('prev');
      var next = $(this).data('next');
      initModal(href, prev, next)
    }
  })

  $(document).on('keyup', function(e) {
    if(e.keyCode == 27) {
      escapeFromModal();
    }
  })

  // click out modal
  $(document).on('click', '.modal-student-container', function() {
    escapeFromModal();
  })

  // click in modal
  $('.modal-student').on('click', function(e) {
    e.stopPropagation()
  })

  // click on arrows
  $('.modal-student-arrow').on('click', function(e) {
    var id = $(this).attr('data-id');
    populateModalWithId(id)
    e.stopPropagation();
  })

  function initModal(href, prev, next) {
    $('.modal-student-container').addClass('is-active');
    $('.modal-student-container iframe').attr('src', href);
    initArrows(prev, next);
  }

  function initArrows(prev, next) {
    if(prev) {
      $('.modal-student-arrow.is-prev').attr('data-id', prev)
      $('.modal-student-arrow.is-prev').removeClass('is-disabled')
    } else {
      $('.modal-student-arrow.is-prev').addClass('is-disabled')
    }

    if(next) {
      $('.modal-student-arrow.is-next').attr('data-id', next)
      $('.modal-student-arrow.is-next').removeClass('is-disabled')
    } else {
      $('.modal-student-arrow.is-next').addClass('is-disabled')
    }
  }

  function populateModalWithId(id) {
    var el = $(id)
    initModal(el.attr('data-href'), el.attr('data-prev'), el.attr('data-next'))
  }

  function escapeFromModal() {
    $('.modal-student-container').removeClass('is-active');
    $('.modal-student-container iframe').removeAttr('src');
  }
})

