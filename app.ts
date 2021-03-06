import {Spacecraft, Containership} from './base-ships'
import {MillenniumFalcon} from './starfighters'

import * as _ from 'lodash'

console.log(_.pad("TS Ex", 40, "="))

let shipClassExample = new Spacecraft('hyperdrive');
shipClassExample.jumpToHyperspace();

let falcon = new MillenniumFalcon();
falcon.jumpToHyperspace();

const goodForTheJob = (ship: Containership ) => ship.cargoContainers > 2;

console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'yes' : 'no'}`);