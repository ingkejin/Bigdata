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


// sidebar 
let sidebar = document.querySelector('.sidebar');
let sidebarOpenBtn = document.querySelector('.sidebar-open-btn');
let sidebarCloseBtn = document.querySelector('.sidebar-close-btn');

// 1. sidebarOpenBtn을 클릭 했을 때 
// sidebar에 is-active 클래스 추가 
// sidebarOpenBtn.addEventListener('click', function(){
//   // sidebarOpenBtn 클릭 했을 때 sidebar에
//   // is-active라는 클래스 추가
//   sidebar.classList.add('is-active');
// })

// // sidebarCloseBtn 클릭 했을 때, sidebar에 is-active 클래스 제거
// sidebarCloseBtn.addEventListener('click', function(){
//   sidebar.classList.remove('is-active');
// })


// 함수 소괄호 안 : 매개변수
function plus (num1, num2) {
  console.log(num1, num2)
  console.log(num1 + num2);
  // 실행 할 코드
}

// 함수는 호출했을 때 실행된다
plus(100, 10);
