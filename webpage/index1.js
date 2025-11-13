/* 함수를 생성 */
/* 주의사항 함수명은 동일하게 사용하지 않음 */
function abc(){ /* function이라는 속성을 적용 후 사용하고자 하는 단어를 입력함 (함수명) */
    console.log("테스트");
}
abc();  //해당 함수명을 호출하여 작동 될 수 있도록 하는 명령어(함수 실행)

//http://abc.co.kr/index.html?aaa=park => ?aaa=park (parameter)

function bbb(a,b){  //bbb(인자값,매개변수명) - parameter
    console.log("진행!!");
    console.log(a);
    console.log(b);
}
bbb("hong",100);  //bbb(인수값,인수값)  - Argument
/* ---------------------------------- 변수활용법 --- */

var data = "연습";  //전역변수 : 모든 함수에서 활용 할 수 있는 변수
var user = "에이핑크";  //1. 전역변수를 선언 
var girl = "블랙핑크";  //1-1. 전역변수를 선언
function ccc(){
    var data2 = "고객명";       //지역변수 : 해당 함수 안에서만 활용 할 수 있는 변수
    user = "블랙";  //2. 전역변수를 호출 하여 값을 변화 시킴
    var girl = "멤버교체";  //1-2. 전역변수명 과 동일한 지역변수명 생성
    console.log(data);
     console.log(data2);
}

function ddd(){
    console.log(girl);  //1-3. 전역변수를 값을 출력
    console.log(user);  //3. ccc()에서 변화된 전역변수값을 출력
    var data2 = "홍길동"; 
    console.log(data);
    console.log(data2);
}
ccc(); ddd();

/* 전역변수 + 인자값을 이용한 계산 방식 */

var money = 5000;   //전역변수 선언

function bank(m){   //매개변수 선언
    var sum = money + m;    //수식
    console.log(sum);   //결과
}

bank(10000);    //매개변수에 값을 이관


/* HTML에서 onclick 이벤트 발생시 작동되는 함수 */
function gopage(){
    console.log("클릭 하셨습니다.!!!");
}