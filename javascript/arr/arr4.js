var user = "홍길동";
var emails = "hong@nate.com";
//document : 현재 페이지
//getElementById : HTML에서 id명을 가져오는 함수
//innerText : javascript 변수값을 HTML에 출력(문자,숫자)
document.getElementById("msg").innerText = user;
document.getElementById("email").innerText = emails;

//innerHTML : javascript 에서 HTML 코드 및 문자, 숫자를 포함하여 출력할 수 있는 속성
document.getElementById("agree").innerHTML = '<input type="checkbox"> 동의함';

var data = ["홍길동","강감찬","유관순","이순신"];
var ea = data.length;   //배열에 데이터 갯수
var f;
var html="";    //html 코드와 배열 데이터를 누적시키는 변수
for(f=0; f<ea; f++){
    html = html + "<li>"+ data[f] +"</li>";
}
console.log(html);
document.getElementById("user_list").innerHTML = html;

/* 응용문제
다음 제시한 화면을 보고 배열을 이용하여 출력 되도록 합니다.
*/
var pay = ["신용카드","계좌이체","가상계좌","무통장입금","도서상품권"];
var z;
var htmlcode = "";
for(z=0; z<pay.length; z++){
    htmlcode += "<input type='radio'>"+pay[z];
}
document.getElementById("paypart").innerHTML = htmlcode;

//innerHTML, innerText : 이미 데이터가 있을 경우 해당 정보는 삭제하고 새롭게 만들어 버립니다.
document.getElementById("ck").innerText = "연습니다.";
document.getElementById("ck").innerText = "환영합니다.";