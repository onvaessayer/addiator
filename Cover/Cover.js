/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cover extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Cover/costumes/costume1.svg", {
        x: 198.16218625575897,
        y: 168.41760004088195
      }),
      new Costume("costume2", "./Cover/costumes/costume2.svg", {
        x: 185.9362174756682,
        y: 79.78536483647196
      })
    ];

    this.sounds = [new Sound("pop", "./Cover/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "initReset" },
        this.whenIReceiveInitreset
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "remettreCapot" },
        this.whenIReceiveRemettrecapot
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "retirerCapot" },
        this.whenIReceiveRetirercapot
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
    this.visible = true;
  }

  *whenIReceiveRemettrecapot() {
    this.costume = "costume1";
  }

  *whenIReceiveRetirercapot() {
    this.costume = "costume2";
  }
}
