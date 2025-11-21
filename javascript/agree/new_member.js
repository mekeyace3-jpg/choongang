/* 비동기 통신을 이용한 I/O 형태 코드 */
var agree1 = document.getElementById("agree1"); //이용약관
var agree2 = document.getElementById("agree2"); //개인정보 수집 및 이용
//Request (통신 요청), Response(통신 응답)
//XMLHttp => 현재 접속된 브라우져를 기반으로 통신
var result = new XMLHttpRequest();  //해당 변수 브라우져로 웹통신을 이용함

//open : 통신형태 및 파일을 어떤형태로 구성하여 통신할 것인가
//GET,POST (통신방식)  ,이미지, 동영상, 문서 파일명,  true(비동기통신), false(동기통신)

/*
Network Status 코드
200 : 정상통신
201 : 요청 통신에 대해서 성공을 하였으며, 응답을 받을 수 있음
204 : 요청 통신에 대해서 성공을 하였으며, 단 응답을 받을 데이터가 없음
301 : URI의 응답결과에 대해서 새로운 파라미터를 수정을 권하는
400 : 잘못된 문법으로 인하여 서버에서 인식을 하지 못할 경우
401 : 인증 없이 접근했을 경우
403 : 접근 제한으로 외부에서 접근하는 아이피 보안에 따라서 적용
404 : 해당 URL에 대한 파일 없을 경우
500 : 서버에서 정상적으로 데이터 처리하지 못할 경우
503 : 서버가 과부하가 발생하여 데이터 처리하지 못할 경우
*/

/* 
[통신코드를 작성시 주의사항]
1. 해당 파일(문서)을 로드할 경우 인코딩 저장을 웹 언어셋 동일한 사항을 적용 해야함
2. 여러개의 파일을 로드할 경우 new XMLHttpRequest를 별도로 각각 구성해야함
3. 해당 파일에 HTML 코드가 있을 경우는 innerHTML을 사용 그 외에는 innerText로
   하셔도 됩니다.
*/
result.open("GET","./agree1.txt",true);
result.onreadystatechange = function(){ //통신 여부를 체크
    if(result.readyState == XMLHttpRequest.DONE && result.status==200){
        agree1.innerHTML = result.response;
    }
    else if(result.status==404){
        console.log("통신이 불안정 합니다.");
    }
}
result.send();  //send() : 통신에서 사용하며, 통신을 시작하는 함수


var result2 = new XMLHttpRequest();
result2.open("GET","./agree2.txt",true);
result2.onreadystatechange = function(){ //통신 여부를 체크
    if(result2.readyState == XMLHttpRequest.DONE && result2.status==200){
        agree2.innerHTML = result2.response;
    }
    else if(result2.status==404){
        console.log("통신이 불안정 합니다.");
    }
}
result2.send();

/* 보안인증번호 4자리 (디자이너와 함께 사용하는 경우) */
function se(){
    var seno = document.getElementById("seno");
    if(seno.value == ""){
        alert("보이는 인증번호 4자리를 입력하세요!");
    }
    else{
        if(s == seno.value){
            alert("회원가입 진행을 합니다.");
        }
        else{
            alert("인증번호 4자리를 다시 입력하세요!");
        }
    }
}
/* 응용문제 
   해당 코드는 배열에 있는 4자리 숫자로 작성 되어 있으나, 사용자가 새로고침 또는 다른 웹 페이지를
   접속 했을 경우 자동으로 4자리 숫자가 나와야 합니다. 해당 코드를 변경하세요
   [힌트] - Math.random

*/

var security = document.getElementById("security");
//var s = [5,3,2,8];
var f;
var html = "";
var s = "";     //사용자가 입력한 값과 PC가 랜덤으로 뽑은 숫자값을 비교하기 위함
for(f=0; f<4; f++){
    //<img src='./no/no5.png'>
    //html = html + "<img src='./no/no"+s[f]+".png'>";
    var r = Math.floor(Math.random()*10);
    s = s + r;
    html = html + "<img src='./no/no"+ r +".png'>";
}
security.innerHTML = html;

