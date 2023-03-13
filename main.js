$(function(){
  $('.introBtn').on('click',function(){
    $('.card__container').addClass('flip rotate');
    $('.card__shadow').addClass('expand');
  });
  $('.backBtn').on('click',function(){
    $('.card__container').removeClass('flip rotate');
    $('.card__shadow').removeClass('expand');
  })
});

/*var cards = document.querySelectorAll(".card");

[...cards].forEach((card) => {
  card.addEventListener("click", function () {
    card.classList.toggle("flip");
  });
});*/


