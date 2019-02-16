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
var message = "Frase qualquer";
console.log(message);
var episode = 5;
console.log(episode);
episode++;
console.log(episode);
function useTheForce(name) {
    console.log('Use the force ' + name);
}
useTheForce('Diego');
var sortestRun = function (parsecs) {
    return parsecs < 12;
};
console.log(sortestRun(3));
var ship = ['ship', 'shipFighter'];
var ties = ship.filter(function (item) { return item === 'shipFighter'; });
console.log(ties[0]);
var nomeDaFuncao;
nomeDaFuncao = function (name) { return console.log("Do you copy, " + name + "?"); };
nomeDaFuncao("Diego");
function inc(speed, inc) {
    var i = inc || 1;
    return speed + i;
}
console.log("inc(5,1): " + inc(5, 1));
console.log("inc(5): " + inc(5));
function inc2(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
function countJedis(jedis) {
    return jedis.reduce(function (a, b) { return a + b; }, 0);
}
console.log(countJedis([2, 3, 4]));
// rest, nao é necessarios informar o array ao chamar a funcao
function countJedis2() {
    var jedis = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        jedis[_i] = arguments[_i];
    }
    return jedis.reduce(function (a, b) { return a + b; }, 0);
}
console.log(countJedis2(2, 3, 4));
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("Is " + distance + " parsecs enought beat Millenium Falcon? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
