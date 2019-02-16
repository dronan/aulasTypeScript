class Spacecraft {
    
    constructor(public propulsor:string){}

    jumpToHyperspace(){
        console.log(`Entering in hyperspace with ${this.propulsor}`);
    }
}

let shipClassExample = new Spacecraft('hyperdrive');
shipClassExample.jumpToHyperspace();


class MillenniumFalcon extends Spacecraft {

    constructor(){
        super('hyperdrive'); // "new Spacecraft bla bla bla"
    }

    jumpToHyperspace(){
        if (Math.random() > 0.5)
            super.jumpToHyperspace() // chama o metodo da classe Spacecraft
        else    
            console.log(`Failed to jump to hyperspace`) // continua no metodo local
    }

}


let falcon = new MillenniumFalcon();
falcon.jumpToHyperspace();