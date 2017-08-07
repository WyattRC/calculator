let qqw = document.getElementById('qqq')

// I found a shorter way to do what I was doing below
// function display1(){
//   qqw.value += 1;
// }
// function display2(){
//   qqw.value += 2;
// }
// function display3(){
//   qqw.value += 3;
// }
// function display4(){
//   qqw.value += 4;
// }
// function display5(){
//   qqw.value += 5;
// }
// function display6(){
//   qqw.value += 6;
// }
// function display7(){
//   qqw.value += 7;
// }
// function display8(){
//   qqw.value += 8;
// }
// function display9(){
//   qqw.value += 9;
// }
//
// function answer(){
//   qqw.value =
// }

function display(x){
  qqw.value += x;
  if (x === 'clear'){
    qqw.value ='';
  }
}
function result(){
  x = qqw.value;
  x = eval(x);
  qqw.value = x;
}
// I read that using eval is very frowned upon by certain stackoverflow users so this isn't the purest way to do the calculations
