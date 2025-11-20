var startx = 0;     //최초 터치를 한 좌표값
var endx = 0;       //swap 후 종료된 좌표값
var imgsize = 200;  //이미지의 한개당 가로 사이즈
var ori = 0;    //images에 대한 left 위치 값
var node = 0;   //최초 노드번호
var node_ea;    //전체 노드갯수

document.querySelector("#images").addEventListener("touchstart",a);
document.querySelector("#images").addEventListener("touchend",b);

function a(t){
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
    if(node < node_ea - 1){
        ori = ori - imgsize;
        node = node + 1;
        document.querySelector("#images").style.transform = "translateX("+ori+"px)";
    }
}
function prev(z){
    
}