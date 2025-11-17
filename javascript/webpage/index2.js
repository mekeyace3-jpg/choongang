/* html에서 onclick 속성 함수명 */
function sh(){
    //search라는 이름을 가진 id명을 가져오며 또한 value라는 속성에 대한 데이터를 data 변수에 이관
    var data = document.getElementById("search").value;
    //console.log(data);  //해당 사용자가 입력한 값을 출력
    if(data == ""){
        alert("검색어를 입력하세요");       //alert 함수 : 경고메세지를 출력하는 함수
    }
    else{
        //location.href 속성 : js전용 페이지 이동을 하기 위한 속성값 (현재 페이지에서 다른 페이지로 이동)
        location.href = "http://naver.com";
    }
}


function login(){
    var mid = document.getElementById("mid").value;
    var mpw = document.getElementById("mpw").value;
    if(mid==""){
        alert("아이디를 입력하세요");
    }
    else if(mpw==""){
        alert("패스워드를 입력하세요");
    }
    else{
        location.href="http://nate.com";
    }
}

var se_ori = "276051";

/* 사용자가 입력한 인증번호와 제시한 인증번호를 비교하는 함수 */
function se(){
    /* document.getElementById("security") 이 부분만 
    사용시 변수.다양한 html 속성을 활성화 할 수 있음 */
    var se = document.getElementById("security");
        if(se.value == ""){
            alert("인증번호를 입력하세요");
        }
        else{
            if(se.value != se_ori){
                alert("발송된 인증번호를 입력해 주세요!");
            }
            else{
                alert("인증이 완료 되었습니다.");
                se.readOnly = true;
                se.style.backgroundColor = "gray";
                se.style.borderRadius ="10px";
            }

        }
    /*
    console.log(se);
    se.value = "12345";
    se.className = "box";
    */

}