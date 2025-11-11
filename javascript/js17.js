var a;
for(a=1; a<101; a++){
    if(a < 51){
        //console.log(a);
    }
    else{
       // console.log(a);
        break;      //반복문에도 break가 있으며 해당 조건이 맞을 경우 반복문을 강제 종료 합니다.
    }
}

//continue : 조건에 맞는 사항이 있을 경우 반복문에 해당 사항을 다음 해당 데이터 넘기는 작업을 합니다.

/*
var b;
for(b=1; b<=10; b++){
    if(b % 2 == 0){
        continue;
    }
    console.log(b);
}
*/

//while문과 do~while문에서 continue; 사용시 조건문에 ++, -- 명시 하지 않을 경우 무한 loop 발생함

var b = 1;
while(b <= 10){
    if(b % 2 == 0){
        b++;
        continue;
    }
    console.log(b);
    b++;
}
