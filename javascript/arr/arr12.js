console.log(review);
console.log(review["reviews"]);
console.log(review["reviews"].length);
console.log(review["reviews"][0].length);

function abc(){
var html = "";  //HTML 출력 변수
/* 최신글이 제일 위로 출력 될 수 있도록 배열 역순으로 출력 */
var w = review["reviews"].length-1;
while(w >= 0){
    html = html + "<li>"+review["reviews"][w][0]
    +" - "+review["reviews"][w][1]+"</li>";
    w--;
}
document.getElementById("review").innerHTML = html;
}