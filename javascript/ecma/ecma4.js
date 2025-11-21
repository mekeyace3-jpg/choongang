//HTML에서 해당 ID를 확인 후 이벤트를 발생하는 함수
document.querySelector("#btn").addEventListener("click",a);
function a(){
    console.log("클릭확인");
}
//HTML에서 해당 Class를 확인 후 이벤트를 발생하는 함수
document.querySelector(".btn").addEventListener("click",function(){
    console.log("클래스를 로드하여 출력");
});

document.querySelector("#box").addEventListener("touchcancel",function(){
    document.getElementById("box").style.backgroundColor = "red";
});

var ea = document.querySelectorAll("#ul > li").length;
console.log(ea);