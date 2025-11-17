/* 
setTimeout() : 시간을 가동시키는 함수 (함수명,시간) => 1000(1초) 
clearTimeout() : setTimeout()를 정지 시킬 수 있는 함수
*/

var no = 0;     //최초 시간 변수
var timer;  //시간 타이머를 제어하는 변수
function abc(){
    var view = document.getElementById("view");
    view.innerText = no;
    no++;
    timer = setTimeout(abc,1000);    //timer이라는 전역변수를 이용하여 해당 변수를 컨트롤 할 수 있음
}
function zzz(){
    clearTimeout(timer);    //setTimeout을 가진 전역변수값을 강제 정지시킴
}

/********************* */
/* 
setInterval : 일정한 시간 간격으로 지속적으로 반복하는 함수
clearInterval : setInterval 정지할 수 있는 함수
*/
var no2 = 0;
var timer2;
function bbb(){
    var view2 = document.getElementById("view2");
    view2.innerText = no2;
    no2++;
}
timer2 = setInterval(bbb,1000);
function ccc(){
   clearInterval(timer2);
   //clearTimeout(timer2);
}

/*** 시간함수를 이용한 응용편 ****/
var s = 5;  //5초 부터 역순으로 시간을 흐르게 함
var skiptimer;
function skip(){
    var ad = document.getElementById("ad");
    ad.innerText = s;
    s--;    //-1 씩 계산
    if(s >= 0){ //0초 될 때까지 해당 HTML에 출력
        skiptimer = setTimeout(skip,1000);
    }
    else{   //-값이 되었을 경우 해당 타이머를 정지 한 후 HTML코드를 변화시킴
        clearTimeout(skiptimer);
        //해당 innerHTML에 HTML 모든 코드를 사용할 수 있음
        document.getElementById("youtube").innerHTML = "<span class='blackbtn' onclick='gopage()'>건너뛰기</span>";
    }
}
skiptimer = setTimeout(skip,1000);
function gopage(){  //건너뛰기라는 버튼이 생성되면 해당 클릭시 onclick 속성 발동
    location.href="http://nate.com";
}