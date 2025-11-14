/* 정수, 유리수, 무리수, 실수, 자연수 */

/* if문 */
var a = "hong11";       //문자
var b = 13;     //숫자, 소수
var c = "홍길동";
var d = true;   //boolean (true, false)

if(a == "hong" && b == 25){     //&&(조건이 모두 성립) , ||(하나의 조건만 성립)
    console.log("중복된 아이디 입니다.");
}
else if(a == "kim"){
    console.log("중복된 아이디 입니다.");
}
else if(a != "hong"){
    console.log("사용 가능한 아이디");
}
else{
     console.log("사용 가능한 아이디");
}

/* 조건문 회원가입에 대한 검토 (14세 이상, 이하) */
if(b < 14 && d == false ){
    console.log("14세 미만은 부모 동의 없이 가입이 되지 않습니다.");
}
else{
    console.log("정상적으로 회원등록 되었습니다.");
}

/* 
응용문제1
사용자가 로그인을 합니다.(로그인 정보는 다음과 같습니다.)
아이디 : hong
패스워드 : a1234
사원번호 : 0699812

3가지가 모두 적합할 경우 "로그인 되었습니다". 메세지 출력 그 외에는 
"해당 정보를 다시 확인하세요" 라는 메세지를 출력 합니다.
*/
var id = "hong";
var pw = "a1234";
var sno = "0699812";

if(id == "hong" && pw == "a1234" && sno=="0699812"){
    console.log("로그인 되었습니다.");
}
else{
    console.log("해당 정보를 다시 확인하세요.");
}
/* -----------------반복문 (for) ------------------- */
var f;
for(f = 1; f < 10; f++){  //for(문자금지, 논리연산(&&,||)) 
//    console.log(f);
}
//console.log(f); //10이라는 숫자가 나옴 왜?? 반복문에서 비교를 한 후에 종료
for(f = f; f > 0; f--){
//    console.log(f);
}

var id = "abcdefg";
var word_ea = id.length;    //length => 문자 또는 배열
console.log(word_ea);
var w;
for(w = 0; w < word_ea; w++){
    console.log(id[w]);     //문자 관련 사항 반복문으로 출력할 경우 무조건 배열
}
//for + if문 결합
var ww;
for(ww=1; ww <= 100; ww++){
        if(ww > 50){    //51 이라는 숫자 부터는 break 발동으로 반복문 강제종료
            break;
        }
        else{
//            console.log(ww);
        }
}
//짝수의 갯수
var ctn = 0;
for(ww=1; ww < 11; ww++){
    if(ww % 2 == 0){
        //ctn = ctn + 1;
        //ctn += 1;
        ctn++;
    }
}
console.log(ctn);
/* 응용문제2
1~20까지의 숫자 반복문 중 짝수, 홀수 숫자의 모든 값을 더하여 각각의 최종 합계를
출력하는 코드를 작성하시오.
결과 : 짝수(110), 홀수(100)
*/
/*
  응용문제3
  구구단 3단 에 대한 결과 값 중 짝수 결과값에 대한 구구단 리스트만 출력 되도록 합니다.
  [결과]
  3*2=6
  3*4=12
*/
var ff;
var sum = 0;
for(ff = 1; ff <=9; ff++){
    sum = 3 * ff;
    if(sum % 2 == 0){
        console.log(3 + "*" + ff + "=" + sum);
    }
}


