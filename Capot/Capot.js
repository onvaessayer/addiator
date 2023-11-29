/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Capot extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("retirer", "./Capot/costumes/retirer.svg", {
        x: 58.982,
        y: 29.212999999999994
      }),
      new Costume("remettre", "./Capot/costumes/remettre.svg", {
        x: 58.982,
        y: 29.212999999999994
      })
    ];

    this.sounds = [new Sound("pop", "./Capot/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "initbuttons" },
        this.whenIReceiveInitbuttons
      )
    ];

    this.vars.xoffset = 0;
  }

  *whenthisspriteclicked() {
    if (this.costumeNumber === 1) {
      this.broadcast("retirerCapot");
      this.costumeNumber++;
    } else {
      this.broadcast("remettreCapot");
      this.costumeNumber++;
    }
  }

  *whenIReceiveInitbuttons() {
    this.goto(this.toNumber(this.vars.xoffset) + 50, -20);
    this.size = 50;
  }
}
