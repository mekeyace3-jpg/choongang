/* 사용자가 입력한 값을 연산작업 
HTML에서 입력된 모든 값은 문자 입니다.
*/
function calc(){
    var no1 = document.getElementById("no1");
    var no2 = document.getElementById("no2");
    if(no1.value == "" || no2.value == ""){
        alert("두개의 숫자를 모두 입력하셔야 합니다.");
    }
    else{   /* 사용자가 입력한 값을 Number 라는 속성으로 자료형을 변환 */
        document.getElementById("result").innerText = Number(no1.value) + Number(no2.value);
    }
}

function gu(){
    var no3 = document.getElementById("no3");
    var n = Number(no3.value);  //문자를 숫자로 변환
    var result = document.getElementById("gugu");   //결과출력(div)
    var f;
    var html = "";  //구구단 모든 결과를 담는 변수
    for(f=1; f<10; f++){
         html = html + n + "*" + f + "=" + (n*f) +"<br>";
    }
    result.innerHTML = html;
}
