/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Start extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("remettre", "./Start/costumes/remettre.svg", {
        x: 58.982000000000056,
        y: 29.212999999999994
      })
    ];

    this.sounds = [new Sound("pop", "./Start/sounds/pop.wav")];

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
    this.broadcast("start");
  }

  *whenIReceiveInitbuttons() {
    this.goto(this.toNumber(this.vars.xoffset) + 50, 60);
    this.size = 50;
  }
}
