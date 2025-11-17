console.log(product);
console.log(product[0]["a_wkdp"]);
console.log(Object.keys(product[0]));
console.log(Object.keys(product[0]).length);

var kno = Object.keys(product[0]).length;   //키 갯수 변수
var f;
for(f=0; f<kno; f++){
   // console.log(Object.keys(product[0])[f]);    //키 이름을 우선으로 가져와야함
    var keynm = Object.keys(product[0])[f];

    //key이름에 따라서 해당 출력하는 형태가 다를 경우 조건문을 활용하여 출력합니다.
    if(keynm == "a_wkimg"){
        //.src => img 태그에 src라는 속성값에 해당 데이터를 출력하기 위해서 사용
       // document.getElementById(keynm).src = product[0][keynm];
        document.getElementById(keynm).innerHTML = "<img src='"+product[0][keynm]+"'>";
    }else{
        document.getElementById(keynm).innerText = product[0][keynm];
    }
}