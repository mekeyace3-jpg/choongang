/* 표현식 함수 및 가상 변수 선언 */
let data = {
    user:"에이핑크",    //가상변수
    age : 35,           //가상변수
    suject : [10,20,30],
    abc:function(){
        var x = this;   // {} 안에 있는 사항을 모두 가지고 있는 함수
        console.log(x.user);
        console.log(x.age);
    }
}