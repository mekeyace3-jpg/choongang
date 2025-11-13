//이미지 경로를 저장한 배열
/*
var img = ["./cat/cat1.jpg","./cat/cat2.jpg","./cat/cat3.jpg","./cat/cat4.jpg"];

var w = 0;
var html = "";  //html 코드를 누적시키는 변수
while(w < img.length){
    html = html + "<img src='"+ img[w] +"'>";   //img 태그를 이용하여 이미지를 출력하는 역활
    w++;
}
document.getElementById("imgs").innerHTML = html;   //HTML에 출력함
*/

/* 이미지를 클릭시 원하는 페이지로 이동하는 코드 */
var img = [
    ["./cat/cat1.jpg","http://naver.com"],
    ["./cat/cat2.jpg","http://nate.com"],
    ["./cat/cat3.jpg","http://google.com"],
    ["./cat/cat4.jpg","http://choongang.co.kr"]
]
var w = 0;
var html = "";
do{
    html += "<a href='"+img[w][1]+"'><img src='"+img[w][0]+"'></a>"; 
    w++;
}while(w < img.length);

document.getElementById("imgs").innerHTML = html;