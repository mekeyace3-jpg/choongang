/* for + while */
/* 구구단 3~6단 모두 출력하는 코드 */
var a;
for(a=3; a<=6; a++){

    var b=1;
    while(b<=9){
       // console.log(a + "*" + b + "=" + (a*b));
        b++;
    }

}
/* 응용문제 다음 결과처럼 나오도록 코드를 작성합니다. 단 반복문(while, do~while) 입니다.
   구구단 2단 ~ 9단까지 중 자릿수는 4까지 나오는 결과를 출력합니다.
   예시)
   2 * 1 = 2
   2 * 2 = 4
   2 * 3 = 6
   2 * 4 = 8
   3 * 1 = 3
   3 * 2 = 6
   3 * 3 = 9
   3 * 4 = 12
   ...
   9 * 4 = 36
*/
var data = 2;
do{
    var no = 1;
    while(no < 5){
       // console.log(data + "*" + no + "=" + (data*no));
        no++;
    }

    data++;
}while(data <= 9);
/*
응용편 
다음 결과처럼 출력되도록 do~while, for문을 이용하여 코드를 작성 시키시오.
[예시]
2 * 2 = 4
3 * 2 = 6
3 * 3 = 9
4 * 2 = 8
4 * 3 = 12
4 * 4 = 16
...
6 * 4 = 24
6 * 5 = 30
6 * 6 = 36
*/
var k;
var sum = 0;    //결과값 출력 변수
for(k=2; k<7; k++){
    var j = 2;
    do{
        sum = k * j;
        console.log(k + "*" + j + "=" + sum);
        j++;
    }while(j <= k);
}

/* 응용편 : 구구단 2~9단까지 모든 결과에 대한 값에 총 합계를 출력하는 코드를 작성하시오
2*1 = 2 ~ 9*9=81  => 모두 더한 값을 출력 (Free)  => 정답 : 1980
*/
var z = 2;  //while 변수
var k;  //for 변수
var s;  //사칙연산
var total = 0;  //값을 누적시키기 위한 변수
while(z <= 9){
    for(k=1; k<=9; k++){
        s = z * k;
        total = total + s;  //곱한 결과값을 total이라는 변수에 지속적으로 누적시킴
    }
    z++;
}

console.log("최종합계 : " + total);
