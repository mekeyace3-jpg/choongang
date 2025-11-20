var box = document.getElementById("box");

var a = 0;      //가로
var b = 0;      //세로

//addEventListener("이벤트명",funciton()) : ECMAScript 이벤트
//window.addEventListener : body 태그의 전체 페이지에서 키보드 이벤트가 발생시
//ES 이벤트 : keyup, keydown, keypress, mouseover, mouseleave...
window.addEventListener("keyup",function(){
    console.log(event.keyCode);
    switch(event.keyCode){
        case 38:        //상
        b = b - 10;
        box.style.top = b + "px";
        break;

        case 39:        //우
        a = a + 10;
        box.style.left = a + "px";
        break;

        case 40:        //하
        b = b + 10;
        box.style.top = b + "px";
        break;

        case 37:        //좌
        a = a - 10;
        box.style.left = a + "px";
        break;

        case 32:
        box.style.backgroundColor = "blue";
        break;
    }
});
