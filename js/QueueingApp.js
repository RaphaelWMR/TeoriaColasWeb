//Utilidades
function clearAll() {
    location.reload();
}

//App

function factorial(n) {
    var total = 1;
    for (var i = 1; i <= n; i++) {
        total *= i;
    }
    return total;
}

function calcInvLambda(lambda) {
    var invLambda = 1 / lambda * 60;
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

function calcLq(rho, s, p0) {
    return ((Math.pow(rho, (s + 1))) / (factorial(s - 1) * Math.pow(s - rho, 2))) * p0;
}

function calcLs(rho, lq) {
    return lq + rho;
}

function calcWs(ls, lambda) {
    return ls / lambda;
}

function calcWq(lq, lambda) {
    return lq / lambda;
}

function calcSps(rho, s) {
    return (Math.pow(rho, s)) / factorial(s);
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
    var denom = 0,
        it = 0,
        rho = calcRho(lambda, mu);
    for (var i = 0; i < s; i++) {
        it = iteration(lambda, mu, i);
        denom += it;
        appendElement(i, "tableHeader");
        appendElement(parseFloat(it).toFixed(8), "firstRow");
    }
    denom = denom + ((Math.pow(rho, s)) / factorial(s)) * (1 / (1 - (rho / s)));
    return denom;
}

function modifyDocument() {
    var button = document.getElementById("buttonAnalizar");
    button.style.display = "none";
    var input = document.getElementById("lambda");
    input.disabled = true;
    input = document.getElementById("mu");
    input.disabled = true;
    input = document.getElementById("s");
    input.disabled = true;
}

function timing(n) {
    var hours = Math.floor(n / 1);
    n = n - hours;
    var minutesR = parseInt(n * 100) / 100;
    var minutes = minutesR * 60;
    n = n - minutesR;
    n = n.toFixed(4);
    var seconds = n * 6000;
    return [hours, minutes, seconds]
}

function QueueingApp() {
    modifyDocument();
    var lambda = 0,
        mu = 0,
        s = 0;
    /*Input */
    lambda = parseFloat(document.getElementById("lambda").value);
    mu = parseFloat(document.getElementById("mu").value);
    s = parseFloat(document.getElementById("s").value);
    /*OutPut */
    var
        invLambda = calcInvLambda(lambda),
        invMu = calcInvMu(mu),
        rho = calcRho(lambda, mu),
        denom = tabla(lambda, mu, s),
        p0 = calcP0(denom),
        lq = calcLq(rho, s, p0),
        ls = calcLs(lq, rho),
        ws = calcWs(ls, lambda),
        wq = calcWq(lq, lambda),
        sps = calcSps(rho, s),
        ps = calcPS(lambda, s, mu);
    document.getElementById("LambdaIn").innerHTML = lambda;
    document.getElementById("invLambda").innerHTML = document.getElementById("invLambdaIn").innerHTML = invLambda;
    document.getElementById("invMu").innerHTML = document.getElementById("invMu").innerHTML = invMu;
    document.getElementById("rho").innerHTML = document.getElementById("rhoIn").innerHTML = rho;
    document.getElementById("sumatoria").innerHTML = document.getElementById("invMu").innerHTML = denom;
    document.getElementById("p0").innerHTML = document.getElementById("invMu").innerHTML = p0;
    document.getElementById("lq").innerHTML = document.getElementById("invMu").innerHTML = lq;
    document.getElementById("ls").innerHTML = document.getElementById("invMu").innerHTML = ls;
    document.getElementById("ws").innerHTML = document.getElementById("invMu").innerHTML = ws;
    document.getElementById("wq").innerHTML = document.getElementById("invMu").innerHTML = wq;
    document.getElementById("sps").innerHTML = document.getElementById("invMu").innerHTML = sps;
    document.getElementById("ps").innerHTML = document.getElementById("invMu").innerHTML = ps;
    document.getElementById("p0t").innerHTML = document.getElementById("invMu").innerHTML = p0;

}