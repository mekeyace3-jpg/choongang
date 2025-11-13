var data = [
    ["볶음밥","짜장면","탕수육","짬뽕"],
    [7000,6000,12000,8000],
    ["25%","","5%",""]
];
console.log(data.length);
console.log(data[0].length);
/*
var w = 0;  //반복문
while(w < data.length){

    var ww = 0;
    while(ww < data[0].length){
        console.log(data[w][ww]);
        ww++;
    }
    w++;
}
*/

var w = 0;
var html = "";  //js에서 생성된 코드를 지속적으로 담는 변수
while(w < data[0].length){  //4

    var ww = 0;
    while(ww < data.length){
        //html = html + data[ww][w];
        if(data[ww][w] != ""){      //해당 조건은 배열에서 비어 있는 값은 출력하지 않도록 하는 조건
            html += "<li>"+data[ww][w]+"</li>";
        }
        ww++;
    }

    w++;
}
document.getElementById("food").innerHTML = html;