var node_ea = function(){
    var box = document.getElementById("box");
    //var ea = box.childNodes;  //childNodes : 빈공간에 대한 부분 또한 노드로 인식
    var ea = box.children;  //children : 빈공간 제외(Enter) 하고 노드를 확인함
    console.log(ea);
}
//children : 노드에 대한 사항이며 배열 기준으로 활용 children[번호]
var a = function(){
    var box = document.getElementById("box");
    var html = document.createElement("span");
    var data = document.createTextNode("데이터 삽입");
    html.append(data);
    /* 
    append : 부모객체 기준으로 자식 객체들이 아래로 생성원리
    insertBefore : 생성된 자식 객체 기준으로 상위에 생성원리
    */
    //box.append(html);
    //box.insertBefore(html,box.childNodes[3]);
    box.insertBefore(html,box.children[3]);
}


var data_in = function(){
    var box2 = document.getElementById("box2");
    var data = "농구,축구,배구,야구,볼링,골프,핸드볼";

    var appdata = data.split(",");
    console.log(appdata);
    var ul = document.createElement("ul");  //ul생성
    var f = 0;
    while(f < appdata.length){
        var li = document.createElement("li");  //li생성
        var radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "poll";
        radio.value = appdata[f];
        var text = document.createTextNode(appdata[f]); //데이터
        li.append(radio);
        li.append(text);    //li 안에 데이터 삽입
        ul.append(li);      //ul 안에 li 삽입
        f++;
    }
    //box2.append(ul);    //box2라는 오브젝트 안에 ul 삽입
    var fm = document.createElement("form");    //신규 form 태그를 생성
    fm.method = "get";  //통신방식
    fm.action = "http://naver.com"; //데이터를 보낼 주소
    fm.append(ul);  //form 태그 안에 ul 태그 삽입
    box2.append(fm);    //box2라는 오브젝트 안에 form 태그 전체를 삽입
}
