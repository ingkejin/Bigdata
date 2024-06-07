// mode-btn class안 텍스트를 가져온다.
// 텍스트가 Dark일 경우 (조건)

let modeBtn = document.querySelector('.mode-btn');

function modeToggle() {
  let modeTxt = modeBtn.innerHTML;
  let header = document.querySelector('header');

  if(modeTxt == 'Dark') {
    // 텍스트를 'Light'로 바꾼다.
    modeBtn.innerHTML = 'Light';
    // header 태그에 dark class add
    header.classList.add('dark');
  }
}

// mode-btn 클릭하면 (클릭 이벤트) 
modeBtn.addEventListener('click', modeToggle);