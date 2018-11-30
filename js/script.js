


var num=59;

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


var fn=100;
var arr=fn.toString().split('');
var back=arr.length-1;
var result=0;
for (var i = 0; i < arr.length; i++) {

  arr[i]=arr[i]*Math.pow(10,back)/Math.pow(2,back);
  result+=arr[i];
  back--;

}

console.log(result);
