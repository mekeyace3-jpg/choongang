var a = 1;
var a = 2;
console.log(a);
let b = 5;      //let 으로 변수를 선언시 동일 이름의 변수명을 생성 할 수 없습니다.
b = 10; 
console.log(b);
const c = 10;   //const는 상수를 선언하며, 해당 값은 절대 변경 불가합니다.
console.log(c);

let ccc = [10,20,30];
function abc(a1,a2,a3){
    console.log(a1);
    console.log(a2);
    console.log(a3);
}
// ... : spread 연산자
//abc(...ccc.concat());   //ES5
abc(...ccc);    //ES6



let aa = ["레드","블루","핑크"];
let bb = ["블랙","그린","화이트"];
let cc = [...aa,...bb]; //ES5       spread를 이용하여 배열을 쉽게 합칠 수 있음

var dd = aa;
dd.push(...bb); //push 업그레이드 하여 spread와 함께 사용가능 하도록 변경함
console.log(dd); //ES6

//일반 함수에서도 여러개의 매개변수를 생성없이 spread로 자동 배열화 시킴
function arr(...zz){
    console.log(zz);
}
arr(50,60,70,80,90,100);    //매개변수 갯수와 관계없이 다양한 값을 적용함
