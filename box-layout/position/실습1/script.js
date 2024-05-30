// Javascript 변수명 (낙타표기법) 
let popup = document.querySelector('.popup');
let popupOpenBtn = document.querySelector('.popup-open-btn');
let popupCloseBtn = document.querySelector('.popup-close-btn');

// function() {}

// popupOpenBtn 클릭시 popup에 is-active class Add
popupOpenBtn.addEventListener('click', function(){
  // classList.add('클래스명')
  popup.classList.add('is-active');
})

popupCloseBtn.addEventListener('click', function() {
  popup.classList.remove('is-active');
})