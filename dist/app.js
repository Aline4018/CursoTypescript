var mensagem = "Ajude-me, obi-Wan Kenobi. Você é minha única esperança!";
console.log(mensagem);
var episodio = 4;
console.log("Esse é o episodio" + 4);
episodio = episodio + 1;
console.log("O proximo episodio é" + episodio);
var favoritoandroide;
favoritoandroide = 'BB-8';
console.log("Meu androide favorito é" + favoritoandroide);
var EoSuficienteParaSerUm = function (parsecs) {
    return parsecs < 12;
};
var distancia = 11;
console.log("\u00C9 " + distancia + " parsecs o suficiente para vender o Millenium Falcon? " + (EoSuficienteParaSerUm(distancia) ? 'SIM' : 'NÃO'));
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call("R2");
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc(5,1) = " + inc(5, 1));
console.log("inc(5) = " + inc(5));
