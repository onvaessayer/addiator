/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("arrière-plan1", "./Stage/costumes/arrière-plan1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.slidersnombredecolonnes = 9;
    this.vars.sliderlargeur = 20;
    this.vars.index = 9;
    this.vars.selectedsliderindex = 0;
    this.vars.y00penplus = -16;
    this.vars.y10penplus = 63;
    this.vars.penvalue = 10;
    this.vars.penordonnee = 63;
    this.vars.selectedslidervalue = 0;
    this.vars.selectedsliderindexprecedent = 7;
    this.vars.penvalueprecedent = 10;
    this.vars.sourispresseeprecedent = false;
    this.vars.slidernouvellevaleur = 0;
    this.vars.penordonneeprecedent = 63;
    this.vars.yoffset = 0;
    this.vars.penabscisse = -146;
    this.vars.retenue = 0;
    this.vars.chiffreAjouter = 0;

    this.watchers.chiffreAjouter = new Watcher({
      label: "chiffre à ajouter :",
      style: "normal",
      visible: true,
      value: () => this.vars.chiffreAjouter,
      x: 289,
      y: -137
    });
  }
}
