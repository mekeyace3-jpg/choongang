function abc(){
    var a = 10;
    //Math : 수학적으로 처리 명령어 random() : PC가 직접 무작위 숫자를 하나선택
    var b = Math.random() * a; //10 미만의 있는 소수점 범위  
    //console.log(b);
    var c = Math.ceil(Math.random() * a); //1~10 소수점 무조건 올림
    //console.log(c);
    var d = Math.floor(Math.random() * a); //0~9  소수점 무조건 절삭
    //console.log(d);
    var e = Math.round(Math.random() * a); //0~10 소수점 반올림
    //console.log(e);

    if(c < 5){
        alert("강화성공!!");
    }
    else{
        alert("강화실패!!");
    }
}

function lotto(){
    var f;
    for(f=1; f<8; f++){
        var no = Math.ceil(Math.random()*45);
        console.log(no);
    }
}

function seno(){
    var security = "";
    var f;
    for(f=1; f<6; f++){
        var no = Math.floor(Math.random()*9);
        security += no;
    }
    console.log(security);
    
}

function game(){
    var a = Math.ceil(Math.random()*1000000);
    var mid = document.getElementById("mid");
    if(mid.value==""){
        alert("로그인을 하셔야만 게임을 진행 할 수 있습니다.");
    }
    else if(mid.value == "kowoon"){
        if(a > 0){
            alert("1Kg 금괴 당첨!!");
        }
    }
    else{
        if(a > 0 && a <= 20){
            alert("5% 쿠폰 당첨!!");
        }
        else if(a >= 21 && a <= 50){
            alert("커피쿠폰 한장!!");
        }
        else if(a == 100){
            alert("1Kg 금괴 당첨!!");
        }
        else{
            alert("다음기회에!!!");
        }

    }
}