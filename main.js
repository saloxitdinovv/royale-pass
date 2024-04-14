import { getData } from "./modules/http";
import { reload } from "./modules/reloads";

let place = document.querySelector('.orders_box_b')

getData('/cars')
  .then(res => {
    let arr = res
    reload(arr.slice(0, 3), place)
  })


const allCatBtn = document.getElementById('all_cat');
const xetchbekBtn = document.getElementById('xetchbek');
const krossowersBtn = document.getElementById('krossowers');
const sedansBtn = document.getElementById('sedans');

allCatBtn.addEventListener('click', function () {
  changeButtonStyle(allCatBtn);
});

xetchbekBtn.addEventListener('click', function () {
  changeButtonStyle(xetchbekBtn);
});

krossowersBtn.addEventListener('click', function () {
  changeButtonStyle(krossowersBtn);
});

sedansBtn.addEventListener('click', function () {
  changeButtonStyle(sedansBtn);
});

function changeButtonStyle(clickedButton) {
  const buttons = document.querySelectorAll('.left_header_btns button');
  buttons.forEach(button => {
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
  });

  clickedButton.style.backgroundColor = 'black';
  clickedButton.style.color = 'white';
}
