// 검색창
// 클래스 탈부착

 
// function 함수이름(){}
let search = document.querySelector('.search');
let searchOpenBtn = document.querySelector('.search-btn');
let searchCloseBtn = document.querySelector('.search-close-btn')

function searchOpen(){
  // search한테 is-open class add (검색창 열기)
  // 대상.classList.add('클래스명')
  search.classList.add('is-open');
}

// search-btn 클릭 했을 때 클릭이벤트 추가
searchOpenBtn.addEventListener('click', searchOpen);

function searchClose(){
  // search한테 is-open class remove (검색창 닫기)
  search.classList.remove('is-open');
}

// search-close-btn 클릭 했을 때 클릭이벤트 추가
searchCloseBtn.addEventListener('click', searchClose);


// 사이드바
// sidebarOpen 함수 생성
let sidebar = document.querySelector('.sidebar');
let sidebarOpenBtn = document.querySelector('.sidebar-open-btn');
let overlay = document.querySelector('.overlay');

function sidebarOpen() {
  // sidebar active class add 
  // overlay active class add
  sidebar.classList.add('active');
  overlay.classList.add('active');
}

// sidebar-open-btn 클릭 했을 때 클릭이벤트 추가
sidebarOpenBtn.addEventListener('click', sidebarOpen);

function sidebarClose() {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
}

overlay.addEventListener('click', sidebarClose);