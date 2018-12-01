var typeTogglers = document.querySelectorAll('.typeToggler');
var translate = document.querySelector('.translate');
var show = document.querySelector('.result');
var input = document.querySelector('.field');
var count = 0;
const five = 5;
var remainder;
var operation = [];
var fn;
var arr;
var back;
var result;





for (let tT of typeTogglers) {
  {
    tT.onclick = function() {
      typeTogglers[0].classList.toggle('hide');
      typeTogglers[1].classList.toggle('hide');
      count++;
    }
  }
}


translate.onclick = function() {

  if (count % 2 == 0) {
    num = input.value;
    while (num > 0) {
      remainder = num % five;
      operation.push(remainder);
      num -= remainder;
      num = num / five;
    }
    itog = operation.reverse().join('');
    show.innerHTML = "Результат перевода из <span>десятеричной</span> системы исчисления числа " + input.value + "<span> в пятиричную: </span>" + itog;
    operation = [];
  }

  if (count % 2 == 1) {

    fn = input.value;
    arr = fn.toString().split('');
    back = arr.length - 1;
    result = 0
    for (var i = 0; i < arr.length; i++) {

      arr[i] = arr[i] * Math.pow(10, back) / Math.pow(2, back);
      result += arr[i];
      back--;
    }
    show.innerHTML = "Результат перевода из <span>пятиричной</span> системы исчисления числа " + input.value + "<span> в десятиричную:</span> " + result;
  }
}
