/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Reset extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Reset/costumes/costume1.svg", {
        x: 195.8007900118063,
        y: 167.9155773255734
      })
    ];

    this.sounds = [new Sound("pop", "./Reset/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "initReset" },
        this.whenIReceiveInitreset
      )
    ];

    this.vars.xoffset = 0;
  }

  *whenIReceiveInitreset() {
    this.goto(
      this.toNumber(this.vars.xoffset),
      this.toNumber(this.stage.vars.yoffset)
    );
    this.moveAhead();
  }
}
