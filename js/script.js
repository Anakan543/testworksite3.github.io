let name = prompt("Введіть ваш нікнейм:");
console.log(name);
if(!name){
  alert("Ім'я було задано некоретно або було відсутнє, ваш нікнейм User");
}else{
   document.getElementById('name').textContent = name;
}
let value1 = 0;
let value2 = 0;

function Button() {
  const numbers1 = Math.floor(Math.random()*11);
  const numbers2 = Math.floor(Math.random()*11);

  const divNumbers1 = document.getElementById("numbers1");
  const divNumbers2 = document.getElementById('numbers2');

  const pointWin1 = document.getElementById("pointWin1");
  const pointWin2 = document.getElementById('pointWin2');

  divNumbers1.textContent = numbers1;
  divNumbers2.textContent = numbers2;

  let button = document.getElementById('button');
  if(numbers1 > numbers2){
    value1++;
    pointWin1.textContent = value1;
  }else if(numbers1 < numbers2){
    value2++;
    pointWin2.textContent = value2;
  }
  if(value1 >= 3){
    button.setAttribute("disabled", true);
    alert("Вітаю, ви перемогли! Держіть цукерку");
  } else if(value2 >= 3){
    button.setAttribute("disabled", true);
    alert("На жаль, ви не перемогли :(");
  }
}
function Reset() {
  window.location.reload()
}
