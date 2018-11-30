


var num=5;

const five = 5;
var remainder;
var operation=[];

while (num>0) {
  remainder=num%five;
  operation.push(remainder);
  num-=remainder;
  num=num/five;

}

var itog=operation.reverse().join('');
console.log(itog);
