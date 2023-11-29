/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Resetbutton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("remettre", "./Resetbutton/costumes/remettre.svg", {
        x: 58.98200000000003,
        y: 29.212999999999994
      })
    ];

    this.sounds = [new Sound("pop", "./Resetbutton/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "initbuttons" },
        this.whenIReceiveInitbuttons
      )
    ];

    this.vars.sindex = 10;
    this.vars.xoffset = 0;
  }

  *whenthisspriteclicked() {
    this.vars.sindex = 1;
    for (
      let i = 0;
      i < this.toNumber(this.stage.vars.slidersnombredecolonnes);
      i++
    ) {
      this.stage.vars.selectedsliderindex = this.vars.sindex;
      this.stage.vars.slidernouvellevaleur = 0;
      this.broadcast("moveSelectedSlider");
      this.vars.sindex++;
      yield;
    }
  }

  *whenIReceiveInitbuttons() {
    this.goto(this.toNumber(this.vars.xoffset) + 50, 20);
    this.size = 50;
  }
}
