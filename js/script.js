$('.header-nav_burger').on('click', function (e) {
    e.preventDefault();
    $('.header-nav_burger').toggleClass('header-nav_burger_active');
    
    if($('.header-nav-burger_list').hasClass('burger_list-none')){
      $('.header-nav-burger_list').addClass('burger_list-on').removeClass('burger_list-none');
    }else{
      $('.header-nav-burger_list').addClass('burger_list-none').removeClass('burger_list-on');
    };
});





$('.search-form-link').on('click', function (e) {
  e.preventDefault();
  if($('.search-form-modal').hasClass('modal-none')){
    $('.search-form-modal').addClass('modal-on').removeClass('modal-none');
  }else{
    $('.search-form-modal').addClass('modal-none').removeClass('modal-on');
  };
});



d = new Date () 
day=d.getDate();
month=d.getMonth() + 1;
year=d.getFullYear();

$('.datepicker-here').val(day + "." + month + "." + year)


$(document).ready(function () {
  $('.numb').number_plugin({
    style: 'line',
    width: '38px',
    height: '38px',
    
  });
});

