//반복문 for문 비교 연산자( <, >, <=, >=) => 반복문은 무조건 숫자만 적용됨
var a;
for(a=1; a<10; a++){  //for(시작값; 범위값; ++(1씩 증가), --(1씩 감소))
    //console.log(a);
}

// ++(증가 연산자)에 관련된 사항
var aa = 4;
var bb = aa++;
//console.log(bb);
//console.log(aa);

var cc = 4;
var dd = ++cc;
//console.log(dd);

//--(감소 연산자)에 관련된 사항
var kk = 5;
var hh = kk--;
//console.log(hh);
//console.log(kk);

/* 응용편 22~30까지 출력되는 반복문 코드를 작성하시오 */
/*
var z;  //변수 선언
for(z=22; z<=30; z++){
    console.log(z);
}
*/
for(var z=22; z<=30; z++){  //반복되면 z라는 변수를 초기화
    //console.log(z);
}


/* 역순으로 숫자를 나오도록 합니다. 10 ~ 0까지 입니다. */
var v;
for(v=10; v>-1; v--){
    //console.log(v);
}

/* 응용편 11 ~ 5까지 나오는 반복문 코드를 작성하시오. */
var i;
for(i=11; i>=5; i--){
    console.log(i);
}
