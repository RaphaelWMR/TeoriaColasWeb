//Utilidades
function factorial(n) {
    var total = 1;
    for (i = 1; i <= n; i++) {
        total = total * i;
    }
    return total;
}
//App

function clearAll() {
    location.reload();
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
    lambda = document.getElementById("lambda").value;
    lambda = parseFloat(lambda);
    mu = document.getElementById("mu").value;
    mu = parseFloat(mu);
    s = document.getElementById("s").value;
    s = parseFloat(s);
    invLambda = 1 / lambda * 60;
    document.getElementById("invLambda").innerHTML = invLambda;
    invMu = 1 / mu * 60;
    document.getElementById("invMu").innerHTML = invMu;
    rho = lambda / mu;
    document.getElementById("rho").innerHTML = rho;
    /*P0*/
    denom = 0;
    var header, text, firstRow, element;
    for (var i = 0; i < s; i++) {
        iteration = ((Math.pow(rho, i)) / factorial(i));
        denom = denom + iteration;
        /*Tabla iteradora */
        /*header */
        header = document.createElement("td");
        text = document.createTextNode(i);
        header.appendChild(text);
        element = document.getElementById("tableHeader");
        element.appendChild(header);
        /*first row */
        firstRow = document.createElement("td");
        text = document.createTextNode(parseFloat(iteration).toFixed(8));
        firstRow.appendChild(text);
        element = document.getElementById("firstRow");
        element.appendChild(firstRow);
    }
    denom = denom + ((Math.pow(rho, s)) / factorial(s)) * (1 / (1 - (rho / s)));
    document.getElementById("sumatoria").innerHTML = denom;
    p0 = 1 / denom;
    document.getElementById("p0").innerHTML = p0;
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