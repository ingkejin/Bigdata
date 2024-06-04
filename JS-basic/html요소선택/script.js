// html #hello 찾아오기
// querySelector('.클래스이름')
let hello = document.getElementById('hello');
let changeBtn = document.getElementById('txt-change-btn');

hello.innerHTML = '안녕?';
hello.style.color = 'red';

// changeBtn 클릭 했을 때, html 'Hello', color -> blue
changeBtn.addEventListener('click', () => {
  hello.innerHTML = 'Hello';
  hello.style.color = 'blue';
})

// querySelectorAll은 .item class를 모두 찾는다. 
let item = document.querySelectorAll('.item');

// Vanilla Js
document.querySelectorAll('.item')[0].style.color = 'blue';
document.querySelectorAll('.item')[1].style.color = 'blue';
document.querySelectorAll('.item')[2].style.color = 'blue';

// j-Query
$('.item').css('color', 'red');
