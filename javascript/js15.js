/* 선택문 (설문조사, 투표, 통신사, 지역번호, 레벨, 결제 시스템 - radio, checkbox) */
var a = "이순신";
switch(a){      //switch 함수(인자값)
  case "강감찬":        //case 선택된 값을 비교하여 동일하면 해당 사항을 출력합니다.
  console.log("KT 고객입니다.");
  break;    //해당 조건에 맞는 case일 경우 더 이상 조회하지 않고 정지하는 코드

  case "홍길동":
  console.log("SKT 고객입니다.");
  break;

  case "유관순":
  console.log("LGT 고객입니다.");
  break;

  default:   //case 외에 모든 사항을 default로 정의 합니다.
  console.log("알뜰폰 고객입니다.");  
  break;
}

var level = "2";      //숫자와 문자를 구분함
console.log(typeof(level)); //typeof란 해당 변수의 자료형을 확인하기 위한 함수
switch(level){
    case 1:
        console.log("일반회원");
    break;

    case 2: case "2": case "two":       //멀티 case 사용하는 방식
        console.log("실버회원");
    break;

    case 3:
        console.log("VIP 회원");
    break;

    default:
        console.log("비회원");
    break;
}

/* 
응용문제
사용자가 결제 하고자 하는 카드에 따라서 결제 진행이 되도록 분류를 하는 코드를 작성하시오
롯데, 삼성 선택시 "시스템 점검으로 인하여 결제가 되지 않습니다."
현대, 하나, 신한 선택시 "결제 진행 하시겠습니까?"
그 외에 카드를 선택시 "해당 카드결제는 진행할 수 없습니다."
*/