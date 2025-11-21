var aaa = function(a){
    console.log(a);
}

var bbb = function(){
    //event.keyCode : 사용자가 입력한 키보드의 값을(ASCII) 정보를 확인할 수 있음
    console.log(event.keyCode); 
    var user = document.getElementById("user");
    if(event.keyCode == 27){
        alert("해당 esc키는 사용 불가능 합니다.");
    }
    else if(event.keyCode >= 49 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 105){
        console.log(user.value);
    }
    else{
        user.value = "";
        alert("숫자키만 입력하셔야 합니다.");
    }
}
/* 
keydown : 숫자키 (상단,숫자패드 다른 ASCII) 및 대소문자 ASCII 가 같은 숫자, 특수키
keypress : 특수키가 발동하지 않음, 숫자키(상단,숫자패드 같음), 대소문자가 다른 ASCII
keyup : 숫자키 (상단,숫자패드 다른 ASCII) 단, 대소문자 ASCII 가 같은 숫자, 특수키
*/
var ccc = function(){
    console.log(event.keyCode);
}
var ddd = function(){   
    console.log(event.keyCode);
}

/* 마우스 전용 이벤트 */
var a = 0;
var b = 0;
var m1 = function(){
    a++;
    console.log(a);
}
var m2 = function(){
      b++;
    console.log(b);
}
var m3 = function(){
    a++;
    console.log(a);
}
var m4 = function(){
      b++;
    console.log(b);
}