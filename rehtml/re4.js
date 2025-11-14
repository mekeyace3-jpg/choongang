//null : 값이 없는 뜻을 말함
//undefined : 배당 배열에 대한 값을 찾지 못할 경우

var data = [500,10,null,6,11,null]; //숫자,문자,복합(Object) [] => 배열기호
//console.log(data[2]);   //배열번호는 무조건 0 부터 적용되어 집니다.
var ea = data.length;   //배열 갯수를 파악
var w = 0;
while(w < ea){
    if(data[w] != null){    // null 문자로 설정없이 고유이름 사용
    console.log(data[w]);
    }
    w++;
}
/* 변수생성 배열 eval : js에서 사용하는 스크립트를 강제로 활성화 시키는 함수*/
var f;
var a0,a1,a2;
for (f=0; f<3; f++){
    eval("a" + f + "='" + f + "숫자적용'");
   //eval("a0='test'");
}
console.log(a2);
a2 += "데이터 추가";
console.log(a2);

var v1 = 10;
var v2 = 20;
var v3 = 30;

for (f=1; f<4; f++){
    console.log(eval("v" + f));
}

var redata = [];    //빈배열
redata[0] = "홍길동";   //빈배열 값에 추가로 데이터를 적용한 사항
redata[1] = "강감찬";
console.log(redata);

/*
응용문제6
해당 배열을 이용하여 새로운 배열 값으로 적용 되도록 코드를 작성하시오.
var arr1 = [50,22,11,16,9,19,21,36];
var arr2 =[] => 해당 값 출력 (30보다 큰 숫자만 신규배열 값이 적용 되어야함)

결과
var arr2 = [50,36]
*/
var arr1 = [50,22,11,16,9,19,21,36];
var arr2 = [];
var f;
/*  //기초 코드
var ff = 0; //신규 배열에 순차적으로 값이 들어갈 수 있도록 설정한 변수
for(f = 0; f < arr1.length; f++){
    if(arr1[f] > 30){
        arr2[ff] = arr1[f];     //신규 배열에 순차적으로 조건에 맞는 값을 삽입
        ff++;   //조건이 맞을 경우 순차적으로 신규배열 번호를 생성
    }
}
console.log(arr2);
*/
for(f = 0; f < arr1.length; f++){
     if(arr1[f] > 30){
        arr2.push(arr1[f]); //push는 순차적으로 값을 빈 배열에 삽입하는 함수
     }
}
//console.log(arr2);

/* 응용문제7
다음 배열값의 평균값을 구하는 코드를 작성하시오.
var calc = [100,75,79,41,36,88,11,39,98,71,63];
*/
var calc = [100,75,79,41,36,88,11,39,98,71,63];
var w;
var sum = 0;
for(w = 0; w < calc.length; w++){
    sum += calc[w];
}
var avg = Math.round(sum / calc.length);
console.log(avg);
