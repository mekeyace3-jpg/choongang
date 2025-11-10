var a = 1;  //초기값(시작값)
do{
    //console.log(a);
    a++;    //증가, 감소
}while(a <= 10);    //범위값

/* 응용문제 : 구구단 5단을 출력하시오(do~while)
5 * 1 = 5
5 * 2 = 10
..
5 * 9 = 45
*/
var gugu = 5;
var b = 1;
var total;
do {
    total = gugu * b;
   // console.log(total);
    b++;
}while(b<=9);

/* 응용문제 구구단 4단 중 4 * 1 ~ 4 * 9까지의 대한 모든 결과값의 합산을 출력하는 코드를 작성하시오 */
var gu = 4;
var k = 1;
var sum;
var total = 0;
do{
    sum = gu * k;
    total = total + sum;
    k++;
}while(k <= 9);
console.log(total);