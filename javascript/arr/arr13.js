/* 1ea에 대한 데이터를 키명으로 HTML에 출력하는 형태 */
var member = [
    {
        "mid":"hong",
        "mnm":"홍길동",
        "mage":35,
        "memail":"hong@nate.com",
        "mtel":"010-1234-5678"
    }
];
//console.log(member);    //전체 배열구조 확인
//console.log(member[0]["memail"]);   //배열구조 맞는 값을 출력
//console.log(Object.keys(member[0])[0]); //키 정보만 배열화 된 사항에서 해당 키배열 번호값을 입력시 키이름이 출력됨
//console.log(Object.keys(member[0]).length); //해당 그룹번호를 입력 후 키 갯수확인
var n = Object.keys(member[0]).length;  //키 갯수에 대한 값을 변수로 적용

var f;
for(f=0; f<n; f++){
    var keynm = Object.keys(member[0])[f];  //키이름 = HTML id를 동일하게 사용
    document.getElementById(keynm).innerText = member[0][keynm];
    console.log(member[0][keynm]);
}
