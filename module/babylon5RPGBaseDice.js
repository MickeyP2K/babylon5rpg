export class Babylon5RPGBaseDie extends Die {
  constructor(termData) {
    termData.faces = 6;
    super(termData);
  }

  /* -------------------------------------------- */

  /** @override */
  static DENOMINATION = 'b';

  /** @override */
  get total() {
    return this.results.length;
  }

  /* -------------------------------------------- */

  /** @override */
  static getResultLabel(result) {
    return {
      1: '<img src="systems/babylon5rpg/ui/DsN/babylon5-dice-b0.png" />',
      2: '<img src="systems/babylon5rpg/ui/DsN/babylon5-dice-b0.png" />',
      3: '<img src="systems/babylon5rpg/ui/DsN/babylon5-dice-b0.png" />',
      4: '<img src="systems/babylon5rpg/ui/DsN/babylon5-dice-b0.png" />',
      5: '<img src="systems/babylon5rpg/ui/DsN/babylon5-dice-b0.png" />',
      6: '<img src="systems/babylon5rpg/ui/DsN/babylon5-dice-b6.png" />',
    }[result];
  }
}
export class Babylon5RPGStressDie extends Die {
  constructor(termData) {
    termData.faces = 6;
    super(termData);
  }

  /* -------------------------------------------- */

  /** @override */
  static DENOMINATION = 's';

  /** @override */
  get total() {
    return this.results.length;
  }

  /* -------------------------------------------- */

  /** @override */
  static getResultLabel(result) {
    return {
      1: '<img src="systems/babylon5rpg/ui/DsN/babylon5-dice-y1.png" />',
      2: '<img src="systems/babylon5rpg/ui/DsN/babylon5-dice-y0.png" />',
      3: '<img src="systems/babylon5rpg/ui/DsN/babylon5-dice-y0.png" />',
      4: '<img src="systems/babylon5rpg/ui/DsN/babylon5-dice-y0.png" />',
      5: '<img src="systems/babylon5rpg/ui/DsN/babylon5-dice-y0.png" />',
      6: '<img src="systems/babylon5rpg/ui/DsN/babylon5-dice-y6.png" />',
    }[result];
  }
}
