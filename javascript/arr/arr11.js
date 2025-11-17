 //[] : key가 없는 배열, {} : key가 있는 배열
var data = {
    "member":["홍길동","hong",33,"hong@nate.com"]
}; 
//console.log(data);  //전체배열
//console.log(Object.keys(data));     //해당 배열변수에 키 이름을 가져옴
//console.log(data["member"]);    //해당 키 안에 배열 데이터를 확인
//console.log(data["member"].length);     //해당 키 안에 있는 데이터 갯수

var f;
for(f=0; f<data["member"].length; f++){
   // console.log(data["member"][f]);
}

/* 
key배열을 이용하게 되면, 다양한 여러 데이터를 활용하여 사용할 수 있습니다.
각각의 다른 데이터도 키를 이용하여 분리 시킨 후 활용할 수 있습니다.
*/

/* key.js에서 로드된 키배열로 데이터 출력 */
console.log(freeboard);
console.log(freeboard["free"][3][0]);
console.log(freeboard["free"].length);
var w = 0;
var html = ""; //html에 출력하는 변수
while(w < freeboard["free"].length){        //자유게시판 출력
    //console.log(freeboard["free"][w][0]);
    html = html + "<li>"+freeboard["free"][w][0]+"</li>";
    w++;
}
document.getElementById("free").innerHTML = html;

/* 공지사항 데이터 출력 */
var w = 0;
var html2 = "";     //html에 출력하는 변수
while(w < freeboard["notice"].length){  //공지사항 출력
   //console.log(freeboard["notice"][w][0]);
    html2 = html2 + "<li>"+freeboard["notice"][w][0]+"</li>";
    w++;
}
document.getElementById("notice").innerHTML = html2;