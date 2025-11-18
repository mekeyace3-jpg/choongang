//함수명 생성시 javascript에서 기존 사용하고 있는 함수명은 절대 사용하시면 안됩니다.
function alls(allck){  //allck 는 html에서 this.checked의 값을 받는 매개변수값
    console.log(allck);
    //getElementsByClassName : class 이름으로 해당 동일한 내용의 값을 가진 태그를 모두 가져옴
    var ea = document.getElementsByClassName("ckdata");
    /*
    console.log(ea.length);
    ea[3].checked = true;
    ea[4].checked = true;
    */
    var f;
    for(f=0; f<ea.length; f++){
            ea[f].checked = allck;  //해당 class node 갯수만큼 핸들링
    }
   
}