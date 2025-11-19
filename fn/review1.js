var reviews = function(){
    var cname = document.getElementById("cname");
    var ctel = document.getElementById("ctel");
    var prname = document.getElementById("prname");

    if(cname.value == ""){
        alert("고객명을 입력하세요!");
        cname.focus();
        return false;
    }
    else if(ctel.value == ""){
        alert("고객명을 입력하세요!");
        ctel.focus();
        return false;
    }
    else if(prname.value == ""){
        alert("고객명을 입력하세요!");
        prname.focus();
        return false;
    }
    else{
       if(isNaN(ctel.value) == true){
            alert("연락처는 숫자만 입력하셔야 합니다.");
            ctel.value = "";
            return false;
       }
       else{
            return;
       }
    }
}