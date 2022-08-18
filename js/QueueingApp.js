//Utilidades
function clearAll() {
    location.reload();
}

//App

function factorial(n) {
    var total = 1;
    for (i = 1; i <= n; i++) {
        total *= i;
    }
    return total;
}

function calcInvLambda(lambda) {
    return 1 / lambda * 60;
}

function calcInvMu(mu) {
    return 1 / mu * 60;
}

function calcRho(lambda, mu) {
    return lambda / mu;
}

function calcP0(denom) {
    return 1 / denom;
}

function calcLq(lambda, mu, s, p0) {
    var rho = calcRho(lambda, mu);
    return ((Math.pow(rho, (s + 1))) / (factorial(s - 1) * Math.pow(s - rho, 2))) * p0;
}


function calcLs(lq, lambda, mu) {
    return lq + (lambda / mu);
}

function calcLq() {
    return ((Math.pow(rho, (s + 1))) / (factorial(s - 1) * Math.pow(s - rho, 2))) * p0;
}

function calcWs(ls, lambda) {
    return ls / lambda;
}

function calcWq(lq, lambda) {
    return lq / lambda;
}

function calcSps(lambda, mu, s) {
    return (Math.pow(calcRho(lambda, mu), s)) / factorial(s);
}

function calcPS(lambda, s, mu) {
    return 1 / (1 - (lambda / s * mu));
}

function iteration(lambda, mu, i) {
    return ((Math.pow(calcRho(lambda, mu), i)) / factorial(i));
}

function appendElement(content, id) {
    var header = document.createElement("td");
    var text = document.createTextNode(content);
    header.appendChild(text);
    var element = document.getElementById(id);
    element.appendChild(header);
}



function tabla(lambda, mu, s) {
    var denom = 0;
    for (var i; i < s; i++) {
        denom += iteration(lambda, my, i);
        /*Header Tabla */
        appendElement(i, "tableHeader");
        appendElement(parseFloat(iteration).toFixed(8), "firstRow");
    }
    return denom + ((Math.pow(rho, s)) / factorial(s)) * (1 / (1 - (rho / s)));;
}




function QueueingApp() {
    /*Oculta boton Analizar */
    var button = document.getElementById("buttonAnalizar");
    button.style.display = "none";
    /*Entrada de datos obtenida en la BD - Scotiabank*/
    var invLambda, invMu;
    /*Entrada de datos en una unidad de tiempo (horas)*/
    var lambda, mu, s, rho;
    /*Salida de resultados*/
    var p0, ls, lq, ws, wq;
    /*Tabla iteradora */
    var sps, ps;
    /*Get Lambda */
    lambda = parseFloat(document.getElementById("lambda").value);
    /*Get Mu */
    mu = parseFloat(document.getElementById("mu").value);
    /*Get S */
    s = parseFloat(document.getElementById("s").value);
    /*OutPut */
    document.getElementById("invLambda").innerHTML = calcInvLambda(lambda);
    document.getElementById("invMu").innerHTML = calcInvMu(mu);
    document.getElementById("rho").innerHTML = calcRho(lambda, mu);
    var denom = tabla(lambda, mu, s);
    document.getElementById("sumatoria").innerHTML = denom;
    document.getElementById("p0").innerHTML = calcP0(denom);
    lq = ((Math.pow(rho, (s + 1))) / (factorial(s - 1) * Math.pow(s - rho, 2))) * p0;
    document.getElementById("lq").innerHTML = lq;
    ls = lq + (lambda / mu);
    document.getElementById("ls").innerHTML = ls;
    ws = ls / lambda;
    document.getElementById("ws").innerHTML = ws;
    wq = lq / lambda;
    document.getElementById("wq").innerHTML = wq;
    /*Tabla iteradora */
    sps = (Math.pow(rho, s)) / factorial(s);
    document.getElementById("sps").innerHTML = sps;
    ps = 1 / (1 - (lambda / s * mu));
    document.getElementById("ps").innerHTML = ps;
    p0 = 1 / denom;
    document.getElementById("p0t").innerHTML = p0;
}