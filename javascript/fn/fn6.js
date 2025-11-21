var a = 0;
var aaa = function(){
    var btn = document.getElementById("btn");
    btn.style.display="block";
    a++;
    var text = document.getElementById("text");
    text.innerText = a;
}
var bbb = function(){
    var btn = document.getElementById("btn");
    btn.style.display="none";
    a++;

}
var ccc = function(){
    location.href="http://naver.com";
}