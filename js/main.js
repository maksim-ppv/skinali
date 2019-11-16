$(window).load(function() {
    $(".before-after").twentytwenty({
        before_label: 'Без скинали',
        after_label: 'Со скинали',
    });
    $('.before-slider').slick({
        draggable: false,
        swipe: false,
        dots: true,
        dotsClass: 'before-slider__dots',
        prevArrow: $('.arrow__left'),
        nextArrow: $('.arrow__right')
    });
    $('.like_button').on('click', function () {
        $(this).toggleClass('like_button_active');
    });
    
 $('.select_checked,.select__check').on('click',function(){
    $('.select_dropdown').toggleClass('select_dropdown_open');
  })
  $('.select_option').on('click', function () {
   var value =  $(this).attr('data-value');
   $('#select-type').val(value);
   $('.select_checked').text(value);
   $('.select_dropdown').toggleClass('select_dropdown_open');
  });
  });