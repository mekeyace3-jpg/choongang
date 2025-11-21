//submit 으로 속성 버튼을 사용시 return false, return true 로 form 태그를 컨트롤
function abc(){
    var mid = document.getElementById("mid");
    if(mid.value==""){
        alert("아이디를 입력하셔야 합니다.");
        return false;       //false 생성 form태그는 활성화 되지 않음
    }
    else{
        /* return만 사용시 true 기본 적용됨. return true 같은 뜻 */
        //return true;
        return;
    }
        
}

//webpage3.html 전송하는 함수
var info = function(){
    console.log("test");
    var tel = document.getElementById("tel");
    var addr = document.getElementById("addr");
    if(tel.value == "" || addr.value==""){
        alert("연락처와 주소 모두 입력을 하셔야 합니다.");
        return false;
    }
    else{
        return;
    }
}