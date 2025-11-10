var a = 1;  //초기값
while(a < 10){      //범위값
//    console.log(a);
    a++;    //증가, 감소
}

var b = 10;
while(b >= 5){
   // console.log(b);    
    b--;    //감소 (-1)
}

/* 응용편 22~30까지 출력되는 반복문 코드를 작성하시오 */
var c = 22;
while(c <= 30){
    //console.log(c);
    c++;
}

/* 응용편 5 부터 19까지 모든 합한 결과를 출력하시오. */
var d = 5;
var k = 0;  //누적합계
while(d <= 19){
    k = k + d;
    d++;
}
console.log(k);

/* 응용편 3 부터 15까지 모든 곱한 결과값을 출력하시오 */
var dd = 3;
var kk = 1;  //곱하기 적용시 누적값에 대한 사항을 변경해야함
while(dd <= 15){
    kk = kk * dd;
    dd++;
}
console.log(kk);