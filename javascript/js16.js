var pay ="card";    //사용자가 선택한 값1
var ck = "현대";    //사용자가 선택한 값2
switch(pay){   
    //switch와 case 사이에 다른 문법이 존재하지 않음
    case "card": case "CARD":
        //case 안에서는 조건문, 반복문
        if(ck=="현대" || ck=="신한"){
                console.log("결제를 진행 하시겠습니까?");
        }
        else{
            console.log("현재 서비스에 불편을 드려 죄송합니다.");
        }
    break;
    case "bank":
         if(ck == "신한"){
                console.log("결제를 진행 하시겠습니까?");
         }
         else{
                console.log("현재 서비스에 불편을 드려 죄송합니다.");
         }
    break;

    case "vbank":
         if(ck == "국민"){
                console.log("결제를 진행 하시겠습니까?");
         }
         else{
                console.log("현재 서비스에 불편을 드려 죄송합니다.");
         }
    break;
    default:
        console.log("올바른 값이 아닙니다.");
    break;
}
