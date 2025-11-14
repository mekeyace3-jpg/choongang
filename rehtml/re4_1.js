console.log(data);
console.log(data[0][2]);    //data[그룹번호][배열데이터번호]
/* 
외부에 있는 데이터를 이용하여 다음과 같은 결과가 출력 되도록 하시오
[예시]
김철수
25
서울
이영희
32
부산
*/
var f,ff;
console.log(data.length);   //그룹갯수
console.log(data[0].length);    //그룹 한개당 데이터 갯수

for(f=0; f<data.length; f++){
    for(ff=0; ff<data[0].length; ff++){
        console.log(data[f][ff]);
    }
}
/*
예시
김철수
이영희
박민준
박서준
장서희
25
32
40
해당 형태 예시 처럼 나오는 반복문도 연습을 하시면 좋습니다.
*/

/*
응용문제 8번
외부에서 전달된 데이터를 이용하여 다음 결과 같이 출력 되는 코드를 작성하시오.
배열이 저장된 변수명 data2

[결과]
LG 회사에 대한 상품 리스트만 출력되는 코드를 작성하시오. 17개 상품 내용이 출력

[추가작업]
LG 회사에 대한 상품 중 가격이 35000 이상인 제품만 출력 합니다.
*/
console.log(data2);
var total_ea = 0;
var w = 0;
while(w < data2.length){

    if(data2[w][4] == "LG" && data2[w][3] >= 35000){
        var ww = 0;
        while(ww < data2[0].length){
            console.log(data2[w][ww]);
            ww++;
        }
        total_ea++;
    }
    w++;
}
console.log("LG상품 총 갯수" + total_ea);