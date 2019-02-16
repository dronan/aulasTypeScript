// variaveis
/*
let tipoString: string
tipoString = 'Nome';

let tipoString = 'Nome'; // inferencia de tipo, aqui entra como string
*/
// tipos possiveis:

/*
let booleano:boolean;
let numero:number;
let texto:string;
let naorecomendado:any // nao recomendado
*/

// arrays

/*
let players: number[] = [1,2,3]
let players: Array<number> = [1,2,3]
let players = [1,2,3]; // inferencia de tipo; aqui entra como number
*/

let message:string = "Frase qualquer";

console.log(message);

let episode: number = 5;

console.log(episode);

episode++

console.log(episode);


function useTheForce(name:string):void{
    console.log('Use the force '+name);
}

useTheForce('Diego');

let sortestRun = function (parsecs:number):boolean {
    return parsecs < 12;
}

console.log(sortestRun(3));


let ship:Array<string> = ['ship', 'shipFighter']
let ties = ship.filter ( item => item === 'shipFighter')
console.log(ties[0]);




let nomeDaFuncao:(variavelDeEntrada:string) => void;

    nomeDaFuncao = name => console.log("Do you copy, "+ name +"?")

    nomeDaFuncao("Diego");



function inc(speed:number, inc?:number):number {
    let i = inc || 1;
    return speed + i;
}

console.log(`inc(5,1): ${inc(5,1)}`);
console.log(`inc(5): ${inc(5)}`);

function inc2(speed:number, inc:number = 1):number {
    return speed + inc;
}



function countJedis(jedis:number[]):number {
    return jedis.reduce((a,b) => a+b, 0)
}

console.log(countJedis([2,3,4]));


// rest, nao é necessarios informar o array ao chamar a funcao
function countJedis2(...jedis:number[]):number {
    return jedis.reduce((a,b) => a+b, 0)
}

console.log(countJedis2(2,3,4));



let isEnoughToBeatMF = function(parsecs: number):boolean {
    return parsecs < 12;
}

let distance = 14;

console.log(`Is ${distance} parsecs enought beat Millenium Falcon? ${isEnoughToBeatMF(distance) ? 'YES'  :  'NO' }`);