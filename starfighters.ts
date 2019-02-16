import {Spacecraft, Containership} from './base-ships'

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

export {MillenniumFalcon}