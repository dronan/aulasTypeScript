class Spacecraft {
    
    constructor(public propulsor:string){}

    jumpToHyperspace(){
        console.log(`Entering in hyperspace with ${this.propulsor}`);
    }
}

let shipClassExample = new Spacecraft('hyperdrive');
shipClassExample.jumpToHyperspace();
