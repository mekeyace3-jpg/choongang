var abc = function(){
    var box = document.getElementById("box");   //출력할 html 위치
    //createElement : 노드 태그를 생성하는 함수
    var html = document.createElement("ul");    //부모태그
    /* className = class속성 생성,  id = id속성 생성 */
    html.className = "ulcss";
    html.id="ulcss";
    var html2 = document.createElement("li");   //자식태그
    //createTextNode : 문자만 적용하여 출력하는 함수
    var html3 = document.createTextNode("공지사항1");
    html2.append(html3);
    html.append(html2);     //부모태그에 자식태그를 생성
    box.append(html);   //출력할 html 위치에 부모태그를 생성
}

var zzz = function(){
    var box2 = document.getElementById("box2");
    var a = document.createElement("input");
    a.type="text";
    a.id="mid";
    a.className="midcss";
    a.placeholder="아이디를 입력하세요";
    a.name="mid";
    //attribute : 속성값을 설정 또는 수정, 삭제 등 다양하게 활용하는 함수
    //setAttribute : 해당 태그에 특수(일반) 속성을 생성할 경우 적용하는 함수
    //a.setAttribute("name","muser");
    a.setAttribute("onclick","data()");
    a.setAttribute("data-log","mid_datas");
    box2.append(a);
}


var kkk = function(){
     var box3 = document.getElementById("box3");
     var a = document.createElement("table");
     a.setAttribute("border","1");  //특수속성
     //기존 html 코드를 직접 작성
     var html = `<tr>
     <td>테이블1</td>
     </tr><tr>
     <td>테이블2</td>
     </tr>`;   
     a.innerHTML = html;    //DOM 객체 형태로 해당 부모태그에 적용
     box3.append(a);    //NODE로 해당 오브젝트에 출력
}