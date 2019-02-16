class Spacecraft {
    
    constructor(public propulsor:string){}

    jumpToHyperspace(){
        console.log(`Entering in hyperspace with ${this.propulsor}`);
    }

}

interface Containership{
    // o js gerado não faz nenhuma menção a interface, aqui somente o TS "entende" como tal
    cargoContainers:number;

}

export {Spacecraft, Containership} // exportando modulos