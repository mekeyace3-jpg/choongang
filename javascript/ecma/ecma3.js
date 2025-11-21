var startx = 0;     //최초 터치를 한 좌표값
var endx = 0;       //swap 후 종료된 좌표값
var imgsize = 200;  //이미지의 한개당 가로 사이즈
var ori = 0;    //images에 대한 left 위치 값
var node = 0;   //최초 노드번호
var node_ea;    //전체 노드갯수

//touchstart, touchend : 모바일 전용 이벤트
/*
    touchstart : 최초 터치 상황
    touchend : 터치 후 스왑을 하고 나서 터치 해제 되었을 때
    touchmove : 터치 후 스왑을 하면 작동되는 이벤트
    touchcancel : 상하좌우 등 다양하게 움직임 외에 새로고침 상태가 진행 되는 상황에서 작동됨
*/
document.querySelector("#images").addEventListener("touchstart",a);
document.querySelector("#images").addEventListener("touchend",b);
/* 
querySelectorAll : 부모 기존 자식의 노드 갯수를 가져오는 함수 (js에서 children 동일함)
*/

function a(t){
    console.log(t);
    //alert(t);
    node_ea = document.querySelectorAll("#images > img").length;
    startx = t.touches[0].pageX;  //시작된 터치의 위치값  pageX (가로) pageY(세로)
}
function b(t){
    endx = t.changedTouches[0].pageX;   //변경된 터치의 위치값
    if(startx > endx){  //오른쪽 > 왼쪽
            next(endx);
    }
    else{       //왼쪽 > 오른쪽
            prev(endx);
    }
}
function next(z){
    if(node < node_ea - 1){ //노드 기준(배열) 으로  이미지 한개의 사이즈 만큼 움직임
        ori = ori - imgsize;
        node = node + 1;
        document.querySelector(".images").style.transform = "translateX("+ori+"px)";
    }
}
function prev(z){
    if(node > 0){
        ori = ori + imgsize;
        node = node - 1;
        document.querySelector("#images").style.transform = "translateX("+ori+"px)";
    }
}