var n1 = prompt();
var n2 = prompt();
switch (true) {
    case n1 > n2:
        console.log(n1 + " es mayor que " + n2);
        break;
    case n1 < n2:
        console.log(n1 + " es menor que " + n2);
        break;
    case n1 == n2:
        console.log("Los dos numeros son iguales");
        break;
}