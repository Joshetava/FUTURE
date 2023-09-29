const counter = document.querySelector('#counterValue');
/*const buttonDecrement = document.querySelector('#buttonDecrement');*/
const buttonIncrement = document.querySelector('#buttonIncrement');

let  value = counter.value;

buttonIncrement.addEventListener('click',() => {
  value = ++value;
  value = 0;
  counter.value = value;
});
