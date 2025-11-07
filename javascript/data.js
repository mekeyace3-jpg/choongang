//외부에서 해당 정보를 load 할 수 있는 파일
//console.log(user);
/*
if(user=="홍길동"){
    console.log("포인트 6000 입니다.");
}
else if(user=="강감찬"){
    console.log("포인트 4000 입니다.");
}
else{
    console.log("해당 고객은 탈퇴한 고객입니다.");
}
*/

/* 로그인 상황에 맞게 등급을 결정하여 변수를 생성 */
var level = "";     //빈 변수값이며, 해당 변수를 result.js가 사용할 수 있도록 합니다.
if(mid == "hong"){  //아이디가 hong 경우
    if(mpw == "h1234"){  //hong이라는 사용자가 패스워드 h1234가 맞을 경우
        level = "실버회원";     //빈 변수값에 해당 문자 데이터를 삽입
    }
    else{   //패스워드가 틀릴 경우 빈 변수값으로 유지
        level = "";
    }
}
//아이디가 확인 되지 않을 경우
else{
   level="";
}