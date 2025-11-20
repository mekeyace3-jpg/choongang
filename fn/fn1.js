/*  선언문 방식 */
function abc(no){   //no 매개변수
    if(no == 1){
        bbb();
       // ddd();
    }
    else if(no == 2){
        ccc();
    }
    function ddd(){
        console.log("서비스 점검중입니다.");
    }

    function bbb(){
        console.log("내부함수1 작동");
    }
    function ccc(){
        console.log("내부함수2 작동");
    }
}

function ccc(){
    console.log("ccc함수2");
}


/* 표현식 방식 (변수에 함수를 등록하는 방식)*/

var box = function(){       //표현식 함수 (외부)

    function box1(){    //선언식 함수 (내부)
        console.log("box1 내부함수");
    }
    function box2(){
        console.log("box2 내부함수");
    }
    
    return { 
        box111:box1,
        box222:box2//가상변수 매칭 
    }
}


/*** return 함수를 활용 *************************** */
function data(){
    var arr = [10,20,30];
    //return 이 적용 되었을 경우 해당 결과값을 자신을 호출한 함수에게 값을 넘김
    return arr;     
}
function load1(){
   // console.log(data());
   var r = data();
   console.log(r[0]);
}
/*********표현식을 return 함수 연계 (모든 return 함수는 변수로 받아서 처리)***/
var load2 = function(){
    var r = arr2();
     console.log(r[2]);
}
var arr2 = function(){
     var arr = [10,20,30];
    return arr;
}