var agree = false;   //true, false  (checkbox, radio) => boolean
var a;

if(agree == true){  //체크 되었을 경우 (참)

    //if문 조건이 맞을 경우 반복문 작동함
    for(a = 1; a < 11; a++){
        console.log(a);
    }

}
else{   //체크 안된 경우 (거짓)
    console.log("해당 정보가 출력 되지 않습니다.");
}

/* 응용문제 사용자가 1~10까지 숫자를 하나 선택합니다.
해당 숫자가 짝수이면, 구구단 짝수단 만 출력하는 코드를 작성하며, 홀수를 선택 하였을 경우
반복문은 작동 되지 않도록 합니다.
*/