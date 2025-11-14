function abc(){
  //alert("경고메세지");  
  //confirm => 조건문 활용 => 사용자에게 선택권을 주는 메세지
  if(confirm("해당 정보를 저장 하시겠습니까?")){    //확인
        alert("정상적으로 저장 되었습니다.");
  }
  else{ //취소
        //location.href : 강제 페이지 이동
        location.href="./event.html";       
  }
}
var point = 1000;   //전역변수
function userinfo(){
    var user = document.getElementById("user");
    if(user.value == "홍길동"){
        alert("추천 고객님 포인트는" + point + "지급 되었습니다.");
    }
    else{
        alert("해당 고객 정보를 확인 하지 못하였습니다.");
    }
}

function boxcolor(color){
    var box = document.getElementById("box");
    box.style.backgroundColor = color;
}

function agree(){
    var ck = document.getElementById("ck");
    console.log(ck.checked);    //checked(checkbox, radio) => true, false
}