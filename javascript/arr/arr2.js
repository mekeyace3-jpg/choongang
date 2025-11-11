/*//var a=new Array(); //new array함수를 활용하여 배열 공간을 새롭게 만든다는 의미
var a=[]; //new Array 사용안하고 빈배열을 선언해도 새로운 배열 공간 생성 가능.
//console.log(a.length);
//console.log(a[1]);
a[0]=60; //0번째 데이터 60을 삽입한 것.
a[2]=10;
//console.log(a[2]);
a[5]=100;
a[6]=200;
//console.log(a[5]);

var b;
for(b=0;b<a.length;b++){
    console.log(a[b]); //배열 데이터 출력
}
a=new Array(); //해당 변수에 배열을 초기화시킴.
console.log(a); //전체 배열을 브라우저에서 보고싶을 때 쓰는 콘솔 출력
*/

/* 
응용문제 
b=[22,36,42,51,9,60,72,79,91,98];
배열 a에 홀수 값만 재배열 시키시오.
배열 데이터를 가공시킨다고 한다.
*/
var b=[22,36,42,51,9,60,72,79,91,98];
var a=[];
var ct=0;
for(var i=0; i<b.length; i++){
    if(b[i]%2 != 0){
        a[ct]=b[i];
        /*ct++;*/
        ct+=1;
    }
}
//console.log(a);

//해당 배열에 데이터 값을 변경할 경우 해당 배열번호를 입력 후 새로운 값을 적용시 배열값이 변경됨
var k = [30,50,100];
k[1] = 600;
console.log(k);

/* 
응용문제5 
해당 배열값을 확인 후 문자 데이터만 새로운 배열로 재가공 하여 출력하는 코드를 작성하시오.
출력결과
["hong","kang","kim","park","jang"]
*/
var sql = ["hong",35,"kang","kim",60,19,33,"park","jang",55];
/*  //책이랑 학원에서 배운 형태의 구조
var newdata = [];
var w = 0;
var ct = 0;
while(w < sql.length){ 
    if(typeof(sql[w]) == "string"){ //문자 데이터만 신규 배열에 데이터 삽입
        newdata[ct] = sql[w];
        ct++;
    }
    w++;
}
*/
//실무환경은 filter 함수 (ECMAScript-es5) 이용하여 화살표 함수(=>) 이용하여 반복문 없이 쉽게 데이터를 가공
var newdata = sql.filter(item => typeof item =="string");
console.log(newdata);