/*
var data = ["공지사항","박순수님",32,"2025-11-12"];
var a;
var html = "";
for(a=0; a<data.length; a++){
    html = html + "<td>"+ data[a] +"</td>";
}
document.getElementById("notice").innerHTML = html;
*/

/* 게시판 데이터를 이용하여 Table 출력하는 방식 */
var n = [
    ["공지사항 오픈!!","관리자",25,"2025-11-12"],
    ["공지사항 테스트","관리자",125,"2025-11-10"],
    ["결제시스템 테스트","관리자",100,"2025-11-01"]
];


var f,ff;
var html="";
for(f=0; f<n.length; f++){    //tr  0 ~ 9
    html = html + "<tr>";
    for(ff=0; ff<n[0].length; ff++){
        html = html + "<td>"+ n[f][ff] +"</td>";
    }
    html = html + "</tr>";
}
document.getElementById("notice").innerHTML = html;
