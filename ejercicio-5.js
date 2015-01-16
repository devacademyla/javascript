var n = prompt();
n = parseInt(n);
var cont = 0;
while(cont <= 12) {
    var mult = n*cont;
    console.log(cont + "*" + n + "=" + mult);
    cont++;
}