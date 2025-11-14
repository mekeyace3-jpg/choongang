/* while + do~while문 */
var w = 0;  //초기값
while(w <= 10){ //범위값
//    console.log(w);
    w++;    //증가, 감소
}

var ww = 0;
do{
    console.log(ww);
    ww++;
}while(ww <= 10);

/* 
응용문제4
while 또는 do~while문 중 원하는 반복문을 사용하시고 다음과 같이 출력 되도록 합니다.
숫자 30 ~ 45까지의 값을 모두 더 한 최종 결과값을 출력 하십시오
*/

/*
응용문제5
while 또는 do~while문 중 원하는 반복문을 사용하여 해당 조건 맞는 결과를 출력
되도록 합니다.
구구단 9단 중에서 짝수 결과 및 8의 배수 에 대한 결과만 출력되는 코드를 작성하시오.
[결과]
9 * 8 = 72
*/
var f = 1;
var total = 0;
do{
    total = 9 * f;  //구구단 9단만 반복문으로 결과를 돌출
    if(total % 2 == 0 && total % 8 == 0){  //짝수(2의배수), 8의 배수
        console.log(9 + "*" + f + "=" + total); //해당 조건에 맞는 결과만 출력
    }
    f++;
}while(f <= 9);