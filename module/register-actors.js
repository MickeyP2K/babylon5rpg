import babylon5rpgActorSheet from './actor/actor-sheet.js';
import babylon5rpgSynthActorSheet from './actor/synth-sheet.js';
import ActorSheetBabylon5RPGVehicle from './actor/vehicles.js';
import ActorSheetBabylon5RPGCreat from './actor/creature.js';
import ActorSheetBabylon5RPGTerritory from './actor/territory.js';

function registerActors() {
  Actors.unregisterSheet('core', ActorSheet); // Register Character Sheet

  Actors.registerSheet('babylon5rpg', babylon5rpgActorSheet, {
    types: ['character'],
    makeDefault: true,
  });

  Actors.registerSheet('babylon5rpg', babylon5rpgSynthActorSheet, {
    types: ['synthetic'],
    makeDefault: true,
  });

  Actors.registerSheet('babylon5rpg', ActorSheetBabylon5RPGVehicle, {
    types: ['vehicles'],
    makeDefault: true,
  }); // Register vehicle Sheet

  // console.warn('Reg: Got here');

  Actors.registerSheet('babylon5rpg', ActorSheetBabylon5RPGCreat, {
    types: ['creature'],
    makeDefault: true,
  }); // Register vehicle Sheet

  Actors.registerSheet('babylon5rpg', ActorSheetBabylon5RPGTerritory, {
    types: ['territory'],
    makeDefault: true,
  }); // Register Territory Sheet
}

export default registerActors;
