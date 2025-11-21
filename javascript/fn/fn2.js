function idsearch(){
    var mid = document.getElementById("mid");

    var data = function(a){  //표현식 return 함수
        var id = ["hong","kim","park"];
        var call = "yes";
        for(var f = 0; f < id.length; f++){
            if(a == id[f]){ //사용자값과 배열에 데이터가 같은 경우
                call="no";  //결과 yes => no 변경
            }
        }
        return call;    //결과값을 return
    }

    //sign 변수가 data 함수에서 return된 결과를 받음
    var sign = data(mid.value);     
    if(sign == "no"){
        alert("다른 아이디를 입력하세요");
    }
    else{
        alert("해당 아이디는 사용가능합니다.");
        mid.readOnly = true;
    }
}

/**응용문제 코드 ************** */
function calc(){  //onclick
    //표현식 함수를 사용시에 변수선언한 부분을 먼저 코드를 꼭 작성해야함    
    var fordata = function(n1,n2){
        var f;
        var sum = 0;
        if(n1 <= n2){
            for(f=n1; f<=n2; f++){
                sum = sum + f;  //누적값
            }
        }
        else if(n1 > n2){
            for(f=n1; f>=n2; f--){
                sum = sum + f;  //누적값
            }
        }
        return sum;
    }

    var no1 = document.getElementById("no1");
    var no2 = document.getElementById("no2");
    //NaN : Not a Number (숫자가 아님),  
    //isNaN() : 문자도 허락 => (true), 숫자만 허락 => (false) 
    if(isNaN(no1.value) == false && isNaN(no2.value) == false){
        //내부함수 활용(return)
        var result = fordata(Number(no1.value),Number(no2.value)); 
        console.log(result);
    }
    else{
        alert("숫자만 입력하셔야 합니다.");
    }

}