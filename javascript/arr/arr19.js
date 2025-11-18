var sb = [];

function add_subject(){
    var subject = document.getElementById("subject");
    if(subject.value == ""){
        alert("과목명을 입력하셔야 합니다.");
    }
    else{   //사용자가 과목명을 입력하였을 경우
        sb.push(subject.value);     //전역변수 배열에 값을 등록
        subject.value = "";     //사용자가 입력한 값을 초기화
        
        var f;
        var html = "";
        for(f=0; f<sb.length; f++){
            html = html + "<li>" + sb[f] + "</li>";
        }
        document.getElementById("list").innerHTML = html;   //HTML 해당 id 태그 안에 출력

    }
}
/* 배열결합 concat 함수이며 

기존배열.concat(삽입할 배열);
기존배열.concat(삽입할 배열,삽입할 배열);
*/
function plus_array(){
   /*
    var arr1 = ["100","200","300"];
    var arr2 = ["국어","영어","수학"];
    var arr2_1 = ["홍길동","강감찬","유관순"];
    var arr3 = [];

    //arr3 = arr1.concat(arr2);
    //console.log(arr3);

    arr3 = arr1.concat(arr2,arr2_1);
    console.log(arr3);
    */

   /* 1차배열 데이터값을 2차배열에 push를 이용하여 결합한 코드 */
    var data1 = [
        ["박초롱","윤보미","정은지","김남주","오하영"]
    ]
    var data2 = ["O형","O형","B형","B형","B형"];
    var data3 = { "age" : ["35", "33","33","31","30"] }
    data1.push(data2);
    data1.push(data3);
    console.log(data1);
}
