//key 1차 배열 => {} 적용시 key 발동 , [] 배열은 그대로 적용
var data = {
    "product":["노트북","냉장고","무선인터넷","키보드"],
    "money":[790000,500000,35000,55000],
    "sales":["55%","25%","5%","3%"]
}
/* key 배열은 해당 키 이름을 적용해야만 배열 데이터에 접근이 가능합니다. */
console.log(data.product[2]);   
console.log(data["product"][3]);

/* 해당 key에 배열 데이터 갯수를 확인 하는 방식 */
console.log(data["product"].length);

console.log(data);  //키이름과 데이터를 모두 출력

/* 해당 배열에 모든 키 이름만 출력을 시킴 */
console.log(Object.keys(data));
/* key 이름 갯수 */
console.log(Object.keys(data).length);

var f,ff;
for(f=0; f<Object.keys(data).length; f++){
   var knm = Object.keys(data)[f];  // 해당 반복문으로 key 이름을 가져는 형태
   //console.log(data[knm].length);
   console.log(knm);
   for(ff=0; ff<data[knm].length; ff++){  //data["product"].length, data["money"].length
        console.log(data[knm][ff]);
    }
   
}

