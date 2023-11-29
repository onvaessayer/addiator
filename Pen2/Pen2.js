/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pen2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Pencil-a", "./Pen2/costumes/Pencil-a.svg", {
        x: -0.8030503429169755,
        y: 23.57173675137102
      })
    ];

    this.sounds = [new Sound("pop", "./Pen2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "initPen" },
        this.whenIReceiveInitpen
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "clickOn" },
        this.whenIReceiveClickon
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "clickOff" },
        this.whenIReceiveClickoff
      )
    ];
  }

  *whenIReceiveInitpen() {
    this.moveAhead();
    while (true) {
      this.goto(this.sprites["Pen"].x, this.sprites["Pen"].y);
      yield;
    }
  }

  *whenIReceiveClickon() {
    this.effects.color = -20;
  }

  *whenIReceiveClickoff() {
    this.effects.color = 0;
  }
}
