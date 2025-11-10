/* 더블 while문 사용법 */
var a = 1;
while(a <= 5){
    
    var b = 1;      //작은 while문의 초기값을 큰 while문 안에 적용해야만 정상적으로 결과를 출력함
    while(b <= 3){
       // console.log(a+b);
        b++;
    }
    a++;
}

/* 
응용편 : 더블(while)문을 이용하여 다음과 같은 결과값을 나오도록 코드를 작성하시오.

5 * 7 = 35
5 * 6 = 30
5 * 5 = 25
4 * 7 = 28
4 * 6 = 24
4 * 5 = 20
...
2 * 7 = 14
2 * 6 = 12
2 * 5 = 10
*/
var g = 5;
while(g >= 2){
    var z = 7;
    while(z >= 5){
        console.log(g*z);
        z--;
    }
    g--;
}