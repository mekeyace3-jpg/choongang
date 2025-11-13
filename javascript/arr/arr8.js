var data = [
    ["강북구","40","5","10"],
    ["구로구","24","11","8"]
];
var html = "";  //html + 배열값
var w = 0;
while(w < data.length){
    html += "<tr>";
    var ww = 0;
    while(ww < data[0].length){
        html = html + "<td>"+data[w][ww]+"</td>";
        ww++;
    }
    html += "</tr>";
    w++;
}
document.getElementById("apt").innerHTML = html;