var n = prompt();
n = parseInt(n);
var fact = 1;
if (n === 0 || n === 1) {
    console.log(fact);
}
else {
    for (var i=2; i<=n; i++) {
        fact = fact * i;
    }
    console.log(fact);
}