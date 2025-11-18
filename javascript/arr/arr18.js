//전체적인 배열은 기본은 전역변수 형태이며, 특수한 경우에만 지역변수 활용
var kimchi = [
    ["배추김치","깍두기","총각김치","갓김치","동치미","파김치"],
    ["30,000","45,000","48,000","37,000","52,000","41,000"]
];

/* 검색 */
function sh(){
    var pdnm = document.getElementById("pdnm");
    if(pdnm.value==""){
        alert("김치이름을 입력하셔야 합니다.");
        pdnm.focus();   //focus() 함수는 커서를 해당 위치에 적용시킵니다.
    }
    else{
       datasearch(pdnm.value);       //해당 함수는 사용자가 입력한 값과 배열을 비교한 후 해당 제품에 대한 금액출력
       //  testsearch();
    }
}

/* 배열에 있는 데이터값을 비교하여 출력 */
function datasearch(pdnm){  //해당 pdnm이라는 매개변수로 사용자가 입력한 값을 받음
   //console.log(kimchi);
   var f;
   var sign = "no";     //배열에 있는 데이터를 검토하는 변수
   var money = "";      //최종결과에 대한 메세지를 담는 변수
   for(f = 0; f < kimchi[0].length; f++){
        if(kimchi[0][f]==pdnm){
            money = kimchi[1][f];
            sign = "ok";
            //동일한 이름이 없을 경우는 break를 사용해도 됨 단, 동일한 이름이 있을 경우 break 미사용
            break;      
        }
   }
   if(sign == "no"){
        money = "해당 검색단어는 확인이 불가능 합니다.";
   }
   document.getElementById("result").innerText = money;

}
function testsearch(){
    console.log("유지보수 하기 위한 함수");
}

/**********배열 핸들링 
 ECMAScript에서 배열에 쉽게 값을 핸들링 할 수 있도록 추가함수가 생성됨 
 1. push : 배열에 신규 값을 등록하는 역활  (배열기준 가장 뒤에 요소를 추가)
 2. unshift : 배열에 신규 값을 등록하는 역활 (배열기준 가장 앞에 요소를 추가)
 3. pop : 배열에 값을 삭제하는 역활 (배열기준 가장 뒤에 요소를 삭제)
 4. shift : 배열에 값을 삭제하는 역활 (배열기준 가장 앞에 요소를 삭제)
 5. slice(숫자,숫자) : 첫번째 숫자 (배열기준 번호), 두번째 숫자 (배열 출력번호) => 출력범위
 6. splice : 배열 노드번호를 기점으로 데이터를 추가하는 함수
*/
var userdata = ["윤보미","정은지","박초롱","김남주","오하영","손나은"];
function add_user(){    //사용자 추가
    var user = document.getElementById("user");
    if(user.value == ""){
        alert("추가할 사용자 이름을 입력하세요");
        user.focus();
    }
    else{
       //console.log(userdata.slice(0,4));

       //데이터를 연속적으로 추가 (0)
       //userdata.splice(2,0,user.value,'이순신','유관순');

       //splice(노드번호시작,갯수) => 해당 노드번호 기점으로 갯수만큼 데이터 삭제
       //userdata.splice(2,2);

       //splice(노드번호시작,갯수,새로운데이터값) => 해당 노드번호 기점으로 데이터 삭제 후 새로운 데이터값 추가
       //userdata.splice(2,1,user.value);

       console.log(userdata);
        //userdata.push(user.value);
        //userdata.unshift(user.value);
        alert("사용자가 정상적으로 등록 되었습니다.");
        user.value = "";
    }
}
function all_user(){    //전체 사용자
    console.log(userdata);
}

function del_user(){
    //userdata.pop();
    userdata.shift();
    console.log(userdata);
}