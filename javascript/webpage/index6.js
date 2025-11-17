function popup(){
    //window.open : 자식창(html 파일 중에 해당 파일을 팝업창으로 오픈하는 역활)
    //("상대경로, 절대경로","사용안함","팝업창 크기, 팝업창 위치")
    window.open("./popup.html","","width=500, height=500, top=100, left=500");
}

function events(){
    var f;
    for(f=1; f<6; f++){
        window.open("./popup.html","","width=500, height=500, top=100, left=500");
    }
}
//부모 입력값 -> 자식창 전송
function chpop(){
    var sw = document.getElementById("sw");
    if(sw.value == ""){
        alert("검색단어를 입력하셔야만 됩니다.");
    }
    else{
        //? (파라미터를 선언함) a (가상의 변수) + 데이터값
        var parmeter = "?a="+sw.value;
        window.open("./popup.html"+parmeter,"","width=500,height=500");
    }
}

