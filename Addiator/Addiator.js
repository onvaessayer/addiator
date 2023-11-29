/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Addiator extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("addiator2", "./Addiator/costumes/addiator2.png", {
        x: 201,
        y: 302
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {}
}
