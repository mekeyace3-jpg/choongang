var best = {
    "best_product":[
        {
            "product_nm" : "LG냉장고",
            "product_money" : "480,000",
            "product_ea" : 25,
            "product_color" : "red"
        },
        {
            "product_nm" : "삼성냉장고",
            "product_money" : "990,000",
            "product_ea" : 5,
            "product_color" : "white"
        }
    ]
};
console.log(best);
console.log(best["best_product"][1]["product_money"]);
console.log(best["best_product"].length); //{} 그룹 갯수
//첫번째 그룹에 key 이름을 모두 확인
console.log(Object.keys(best["best_product"][0])); 

/* 반복문 1개 => key가 추가되지 않고, key 이름이 변경되지 않을 경우 */
var f;
for(f = 0; f < best["best_product"].length; f++){
    console.log(best["best_product"][f]["product_nm"]);
    console.log(best["best_product"][f]["product_money"]);
}
/* 반복문 2개 적용하는 방법 */
var f,ff;
var html = "";  //HTML 태그 및 반복문으로 작성된 데이터를 누적시키는 변수
var word = ["제품명","가격","남은수량","제품색상"];   //데이터 배열에 대한 상세이름

for(f = 0; f < best["best_product"].length; f++){   //그룹갯수

    html = html + "<ul>";

    for(ff = 0; ff < Object.keys(best["best_product"][0]).length; ff++){ //해당 그룹의 key 갯수
            //해당 key 이름 가져오는 코드
            var keynm = Object.keys(best["best_product"][0])[ff]; 
            //변수[대표키][그룹번호][보조키]
            //console.log(best["best_product"][f][keynm]);
            html = html + "<li>"+word[ff]+ ":" + best["best_product"][f][keynm] + "</li>";
    }

    html = html + "</ul>";
}

document.getElementById("list").innerHTML = html;