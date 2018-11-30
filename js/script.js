var inp1=document.querySelectorAll('.push')[0];
var inp2=document.querySelectorAll('.push')[2];
var res1=document.querySelectorAll('.push')[1];
var res2=document.querySelectorAll('.push')[3];
var show = document.querySelectorAll('.result')[0];
var itog;
var num;

const five = 5;
var remainder;
var operation=[];

res1.onclick=function () {
num= inp1.value;
  while (num>0) {
    remainder=num%five;
    operation.push(remainder);
    num-=remainder;
    num=num/five;


  }
  itog=operation.reverse().join('');
  show.innerHTML=itog;
}







var fn=40;
var arr=fn.toString().split('');
var back=arr.length-1;
var result=0;
for (var i = 0; i < arr.length; i++) {

  arr[i]=arr[i]*Math.pow(10,back)/Math.pow(2,back);
  result+=arr[i];
  back--;

}

console.log(result);
