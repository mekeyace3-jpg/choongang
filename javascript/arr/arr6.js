console.log(news);
console.log(news.length);   // 그룹갯수
console.log(news[0].length);    // 그룹당 데이터 갯수 
/* 응용편 배열의 외부 데이터를 가져와서 제목, 글쓴이 형태로 출력 되도록 합니다.*/
/*var w = 0;
while(w < news.length){
    var ww = 0;
    while(ww < news[0].length){
        console.log(news[w][ww]);
        ww++;
    }
    //console.log(news[w]);
    w++;
}
*/

/* 응용편 해당 게시물을 역순으로 최종적으로 나오도록 합니다.*/
var w = news.length-1;  // 그룹의 총 갯수는 5개지만 배열 번호는 4번까지이기 때문에 -1
while(w >= 0){
    var ww = 0;
    while(ww < news[0].length){
        console.log(news[w][ww]);
        ww++;
    }
    //console.log(news[w]);
    w--;    // 게시물을 역순으로 찍기 위함
}