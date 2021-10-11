let mensagem: string = "Ajude-me, obi-Wan Kenobi. Você é minha única esperança!"
console.log(mensagem);

let episodio: number = 4
console.log("Esse é o episodio" + 4)
episodio = episodio + 1
console.log("O proximo episodio é" + episodio)

let favoritoandroide: string
favoritoandroide = 'BB-8'
console.log("Meu androide favorito é" + favoritoandroide)


let EoSuficienteParaSerUm = function (parsecs: number) : boolean{
  return parsecs < 12
}
let distancia: number = 11

console.log(`É ${distancia} parsecs o suficiente para vender o Millenium Falcon? ${EoSuficienteParaSerUm(distancia)? 'SIM': 'NÃO'}`)

let call = (name: string)=> console.log(`Do you copy, ${name}?`)
call(`R2`)

function inc (speed: number, inc: number = 1) : number{
  return speed + inc
}

console.log(`inc(5,1) = ${inc(5,1)}`)
console.log(`inc(5) = ${inc(5)}`)
