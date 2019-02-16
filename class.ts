class Spacecraft {
    
    constructor(public propulsor:string){}

    jumpToHyperspace(){
        console.log(`Entering in hyperspace with ${this.propulsor}`);
    }
}

let shipClassExample = new Spacecraft('hyperdrive');
shipClassExample.jumpToHyperspace();


class MillenniumFalcon extends Spacecraft implements Containership{

    cargoContainers:number; // está na interface....

    constructor(){
        super('hyperdrive'); // "new Spacecraft bla bla bla"
        this.cargoContainers = 2;
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

interface Containership{
    // o js gerado não faz nenhuma menção a interface, aqui somente o TS "entende" como tal
    cargoContainers:number;

}


const goodForTheJob = (ship: Containership ) => ship.cargoContainers = 2;

console.log(`Is falcon good for the job? ${goodForTheJob(falcon)} ?`);