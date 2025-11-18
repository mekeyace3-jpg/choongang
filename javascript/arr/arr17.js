var data = {
    "product":[
        {
            "pdnm":"돈까스",
            "pdmoney":[8000,11000,15000],
            "pdimg":"./img/food.jpg",
            "pdtext":"치즈와 함께 튀긴 돈까스"   
        }
    ]
}
console.log(data);
//console.log(data["product"][0]["pdmoney"][2]);
//console.log(data["product"][0]["pdmoney"].length);        //pdmoney키에 있는 배열갯수
var m = data["product"][0]["pdmoney"].length;
var w = 0;
var html = "";  //반복문에서 생성된 html 코드를 누적시키는 변수
while(w < m){
    html = html + "<option value='"+data["product"][0]["pdmoney"][w]+"'>" 
    + data["product"][0]["pdmoney"][w] + "</option>";
    w++;
}
document.getElementById("money").innerHTML = html;

/* 기획서에 있는 내용을 그대로 배열 + 출력까지 제작 */
var weather = {
    "whdata" : {
        "area" : ["서울", "인천", "수원", "대전", "광주", "부산", "울산", "강릉", "대구", "제주"],
        "서울":[13,13,8,10,9,7,6],
        "인천":[11,10,6,6,8,7,4],
        "수원":[16,8,12,11,13,11,8]
    }
}
console.log(weather);
console.log(weather["whdata"]["인천"]);