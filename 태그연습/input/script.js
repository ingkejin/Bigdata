let year = document.querySelector('.year');

// 한국 표준시 (Korea Standard Time)
let kst = new Date();

let getYear = kst.getFullYear(); // 년도
let getMonth = kst.getMonth() + 1; // 월
let getDate = kst.getDate(); // 일


for(let i = 1920; i <= getYear; i++) {
  // let options = document.createElement('option');
  // options.innerHTML = i;
  // year.appendChild(options);

  let options = `<option>${i}</option>`;
  // afterbegin, beforebegin, afterend, beforend
  // 추가하고싶은곳.insertAdjacentHTML('위치', 추가할요소)
  year.insertAdjacentHTML('beforeend', options);

  // jQuery
  $('.year').append('<option>' + i + '</option>');
}

