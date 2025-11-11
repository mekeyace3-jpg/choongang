/* 더블반복문 + 조건문 (구구단 2단 ~ 9단까지 반복) - 홀수단만 출력 */
var f, ff;
for(f = 2; f <= 9; f++){

    for(ff = 1; ff <= 9; ff++){
        if(f % 2 != 0){
          //  console.log(f + "*" + ff + "=" + (f*ff));
        }
    }

}
//--- 윗 코드는 무조건 작은 반복문이 작동 후에 조건에 맞는 상황을 적용하는 형태이며, 
// 아래는 조건이 맞을 경우만 작은 반복문이 적용됩니다.
var f, ff;
for(f = 2; f <= 9; f++){

    if(f % 2 != 0){
        for(ff = 1; ff <= 9; ff++){
         //   console.log(f + "*" + ff + "=" + (f*ff));
       }
    }

}

/* 
응용문제3.  구구단 2단 부터 9단까지 모든 데이터 중 해당 조건에 맞는 구구단만 출력하시오
조건에 맞는 구구단은 4단, 7단, 9단 입니다.
|| 또는 && 힌트
*/
var w = 2;
var ww;
while(w <= 9){
     if(w == 4 || w == 7 || w == 9){
        for(ww = 1; ww <= 9; ww++){
            console.log(w + "*" + ww + "=" + (w*ww));
        /*
        if(w == 4 || w == 7 || w == 9){
            console.log(w + "*" + ww + "=" + (w*ww));
        }
        */
       /*
       if(w == 4){
        console.log(w + "*" + ww + "=" + (w*ww));
       }
       else if(w == 7){
        console.log(w + "*" + ww + "=" + (w*ww));
       }
       else if(w == 9){
        console.log(w + "*" + ww + "=" + (w*ww));
       }
      */
        }
    }

    w++;
}

var w = 2;
var ww;
while(w <= 9){
     if(w == 4){
        for(ww = 1; ww <= 9; ww++){
            console.log(w + "*" + ww + "=" + (w*ww));
        }
     }
     else if(w == 7){
        for(ww = 1; ww <= 9; ww++){
            console.log(w + "*" + ww + "=" + (w*ww));
        }
     }
     else if(w == 9){
        for(ww = 1; ww <= 9; ww++){
            console.log(w + "*" + ww + "=" + (w*ww));
        }
     }
     w++;
}