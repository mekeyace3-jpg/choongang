/* switch + 반복문 */
var no1 = 25;   //시작값
var no2 = 37;   //종료값(범위값)
var part = "내림차순";  //switch에 사용할 변수

switch(part){

    case "오름차순":
        //case 문에 반복문을 이용하여 결과를 출력하는 방식
        do{
          //  console.log(no1);
            no1++;
        }while(no1 <= no2);
    break;

    case "내림차순":
         do{
           // console.log(no2);
            no2--;
        }while(no2 >= no1);
    break;

    default:
        console.log("해당 정보가 잘못 되었습니다.");
    break;
}

/* 
응용문제4
switch + 반복문(for, while, do~while)
사용자가 임의 숫자 2개를 선택합니다. 해당 숫자 중 첫번째 숫자를 21 이며, 두번째 숫자는 39 입니다.
단, 사용자가 하나의 문자를 선택하게 됩니다. * 또는 + 중에서 하는 선택하면
*를 선택하였을 경우 첫번째 숫자 부터 두번째 숫자까지 모두 곱하여 최종 결과값을 출력
+를 선택하였을 경우 첫번째 숫자 부터 두번째 숫자까지 모두 더한 최종 결과값을 출력하는 코드를
작성하시오.
*/
var uno1 = 21;
var uno2 = 39;
var upart = "*";
var f; //반복문에서 사용
var total;
switch(upart){
    case "+":
    total = 0;
    break;

    case "*":
    total = 1;    
    break;

    default:
    total = "해당 정보가 잘못 되었습니다.";    
    break;
}
if(typeof(total) == "number"){
    for(f = uno1; f <= uno2; f++){
       if(upart=="+"){
        total = total + f;
       }
       else{
        total = total * f;
       }
    }
}
console.log(total);
