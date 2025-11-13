/* onchange 이벤트 함수 */
function corp(a){
    console.log(a);
}
/* 
사용자가 해당 이메일을 선택하였을 경우 onchange가 발동되면서
매개변수로 값을 전달함
*/
function em(e){
    //해당 HTML코드에서 email이라는 id를 
    // 가진 태그안에 value으로 매개변수로 받은 정보를 삽입
    document.getElementById("email").value = e;
}

/* checkbox 핸들링 부분 체크가 되었을 경우(true), 체크가 안된 경우(false) */
function auto_login(){
    var ck = document.getElementById("login");
    console.log(ck.checked);
    if(ck.checked == true){ //체크박스에 체크된 경우
        alert("PC방이나 공공 PC에서 주의 하십시오.");
    }
    else{
        location.href="http://google.com";
    }
}

/* radio 핸들링 방법 */
function ag(){
    var fi = document.getElementById("agree");
    if(fi.checked == true){ //동의안함에 체크가 되었을 경우
        alert("동의하셔야만 회원가입이 진행 됩니다.");
    }
    else{   //동의안함 체크아웃 되었을 경우
        alert("정상적으로 회원등록이 되었습니다.");
    }
}