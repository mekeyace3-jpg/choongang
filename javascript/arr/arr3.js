var a=[    //2차배열 구조
    ["홍길동","강감찬","유관순","이순신"],
    [25,33,40,55]
];
//a[배열그룹번호][배열데이터번호]
//console.log(a[1][1]);  
//console.log(a[0][2]);
console.log(a[0].length);       /* 0번째 그룹에 배열 데이터가 몇개 있는지 확인 */
console.log(a.length);  /* 해당 배열에 그룹이 몇개 있는지 확인 */
/* 
결과: 이름,숫자
*/
var z;
var x;
/* 이름만 먼저 전체 출력 */
/*
for(z=0; z<a.length; z++){   //2
        for(x=0; x<a[0].length; x++){ //3
            console.log(a[z][x]);
        }
}
*/
/* 이름, 나이를 번갈아 가면서 출력하는 형태*/
for(z=0; z<a[0].length; z++){   //3
    for(x=0; x<a.length; x++){  //2
        console.log(a[x][z]);
    }
}
