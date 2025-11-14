var color = "red";  //문자변수
switch(color){
    case "RED": //멀티 case 형태 구조
    case "red": //case "비교값":  case 숫자값: => 대소문자 구분함
        console.log("수량 100ea");
    break;  //해당 조건이 맞을 경우 강제 종료
    case "blue":
        console.log("sold out");
    break;
    default:
        console.log("해당 컬러는 판매하지 않습니다.");
    break;
}

var card = "신한";
var level = 3;
switch(card){
    case "신한":
        if(level == 1){
            console.log("수수료 2.8%");
        }
        else if(level == 2){
            console.log("수수료 1.8%");
        }
        else {
            console.log("수수료 0.9%");
        }
    break;

    default:
        if(level == 0){
            console.log("올바른 접근이 아닙니다.");
        }
    break;
}
/* 
응용문제6
각 가맹점에 대한 로그인 형태 방식이 다릅니다.
해당 로그인 및 가맹점에 대한 구조를 확인하여 결과를 출력하는 코드를 작성하시오.
"본사", "지사"
아이디 : hong
패스워드 : a12345

이며, 본사로 hong을 로그인 하였을 경우 "본사 영업1팀 입니다." 라고 출력하시고
지사로 hong을 로그인 하였을 경우 "지사정보는 아직 미 배정 입니다." 라고 출력
합니다. **추가옵션 로그인시 아이디 패스워드가 틀릴 경우 "해당 정보 확인 필요!!"

그 외에 정보는 모두 동일한 메세지가 나오도록 합니다. "해당 가입자 정보 미확인"
*/
var mid = "hong";
var mpw = "a12345";
var part = "본사";
var sign = "NO";    //switch
if(mid == "hong" && mpw == "a12345" && (part == "본사" || part == "지사")){
    sign = "YES";
}
else{
    if(mid != "hong" || mpw != "a12345"){
        console.log("해당 정보 확인 필요!!");
        sign = "error";
    }
}
switch(sign){
    case "YES":
        if(part=="본사"){
        console.log("본사 영업1팀 입니다.");
        }
        else if(part=="지사"){
        console.log("지사정보는 아직 미 배정 입니다.");
        }
    break;
    case "NO":
         console.log("해당 가입자 정보 미확인");
    break;
}

/* 
switch에 배열
*/
var data = [];
var part = 1;
switch(part){
    case 1:
        data = [10,20,30,40];
    break;

    case 2:
        data = [100,200,300,400];
    break;
}
