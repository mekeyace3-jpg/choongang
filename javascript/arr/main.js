console.log(product);
console.log(product.length);

var w = 0;
while(w < product.length){
    if(product[w][0] != ""){
        var ww = 0;
        while(ww < product[0].length){
            console.log(product[w][ww]);
            ww++;
        }
    }
    w++;
}