/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Manager extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("vide", "./Manager/costumes/vide.svg", {
        x: -26.49243832597614,
        y: 159.20252373487943
      }),
      new Costume("direct", "./Manager/costumes/direct.svg", {
        x: 19.392464258512007,
        y: -133.11520264181763
      }),
      new Costume("complement", "./Manager/costumes/complement.svg", {
        x: 22.763881630868923,
        y: -133.8159925371275
      })
    ];

    this.sounds = [new Sound("pop", "./Manager/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
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

    this.vars.xoffset = 0;
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.broadcast("start");
  }

  *whenIReceiveStart() {
    yield* this.broadcastAndWait("detruireClones");
    this.vars.xoffset = 0;
    this.stage.vars.yoffset = 0;
    this.stage.vars.slidersnombredecolonnes = 9;
    this.stage.vars.sliderlargeur = 20;
    this.stage.vars.y10penplus = 63;
    this.stage.vars.y00penplus = -16;
    this.stage.vars.penvalue = 99;
    this.stage.vars.chiffreAjouter = "";
    yield* this.broadcastAndWait("initSliders");
    yield* this.broadcastAndWait("initCover");
    yield* this.broadcastAndWait("initReset");
    this.broadcast("initbuttons");
    this.broadcast("initPen");
  }

  *whenIReceiveClickon() {
    if (
      this.compare(
        this.toNumber(this.stage.vars.chiffreAjouter) +
          this.toNumber(this.stage.vars.selectedslidervalue),
        10
      ) < 0
    ) {
      this.costume = "direct";
    } else {
      this.costume = "complement";
    }
  }

  *whenIReceiveClickoff() {
    this.costume = "vide";
  }
}
