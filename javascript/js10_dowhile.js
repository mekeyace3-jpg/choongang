/* 더블(do~while)문 */
var a = 1;  //큰 반복문 초기값
do{
    var b = 2;  //작은 반복문 초기값
    do{
        console.log(a + "+" + b + "=" + (a+b));     //연산
        b++;
    }while(b < 5);

    a++;
}while(a < 5);

/* 응용문제 : 다음 결과 처럼 출력되는 더블 반복문(do~while)을 이용하여 코드를 작성하시오. 
1 + 1 = 2
2 + 1 = 3
2 + 2 = 4
3 + 1 = 3
3 + 2 = 5
3 + 3 = 6
4 + 1 = 5
4 + 2 = 6
4 + 3 = 7
4 + 4 = 8
*/
var aa = 1;
var user = 4;       //큰 반복문에 적용된 변수값
do{
    var bb = 1;
    do{
        console.log(aa + "+" + bb + "=" + (aa+bb));
        bb++;
    }while(bb <= aa);   //큰 반복문에 적용된 변수값을 작은 반복문 변수 값과 비교하여 작동되는 코드

    aa++;
}while(aa <= user);  //변수와 변수를 비교