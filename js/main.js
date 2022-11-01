$(function () {

  $('.audio-header').audioPlayer();

  $('.slider__items').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    responsive:
    [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          draggable: true,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          draggable: true,
        }
      },
    ]
  })
  $('.slider__arrow-left').on('click', function (e) {
    e.preventDefault()
    $('.slider__items').slick('slickPrev')
  })
  $('.slider__arrow-right').on('click', function (e) {
    e.preventDefault()
    $('.slider__items').slick('slickNext')
  })

  $(".header__nav-items a, .header__logo-avatar a").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top - 150
    $('body,html').animate({ scrollTop: top }, 800)
  })

  $('.burger, .header__nav-items a, .header__logo-avatar a, .overlay').on('click', function (e) {
    e.preventDefault()
    $('.burger span').toggleClass('burger--X')
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
  })
  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  }, 0);
})