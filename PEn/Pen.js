/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pen extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("free", "./Pen/costumes/free.svg", {
        x: 1.9374999999999147,
        y: 1.796875
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "initPen" },
        this.whenIReceiveInitpen
      )
    ];

    this.vars.yc = 172;
    this.vars.xc = -240;
    this.vars.xoffset = 0;
  }

  *whenIReceiveInitpen() {
    this.moveAhead();
    while (true) {
      this.vars.xc = this.mouse.x - this.toNumber(this.vars.xoffset);
      this.vars.yc = this.mouse.y - this.toNumber(this.stage.vars.yoffset);
      if (this.toNumber(this.stage.vars.selectedsliderindex) === 0) {
        this.visible = false;
      } else {
        this.visible = true;
        yield* this.setpenvalue();
        yield* this.setpenordonnee();
        yield* this.setslidernouvellevaleur();
        if (this.mouse.down) {
          if (
            this.compare(
              this.mouse.down,
              this.stage.vars.sourispresseeprecedent
            ) === 0
          ) {
            if (
              this.compare(
                this.stage.vars.selectedsliderindex,
                this.stage.vars.selectedsliderindexprecedent
              ) === 0
            ) {
              if (
                !(this.compare(this.stage.vars.slidernouvellevaleur, 10) > 0) &&
                !(this.compare(this.stage.vars.slidernouvellevaleur, -1) < 0)
              ) {
                yield* this.setretenue();
                if (this.toNumber(this.stage.vars.retenue) === 0) {
                  yield* this.broadcastAndWait("moveSelectedSlider");
                } else {
                  if (this.compare(this.stage.vars.penvalue, 10) < 0) {
                    this.stage.vars.penvalue = 9;
                    yield* this.setpenordonnee();
                    if (
                      this.toNumber(this.stage.vars.penvalueprecedent) === 10
                    ) {
                      yield* this.broadcastAndWait("retenue");
                    }
                  } else {
                    if (
                      this.toNumber(this.stage.vars.penvalue) === 10 &&
                      this.toNumber(this.stage.vars.penvalueprecedent) === 9
                    ) {
                      yield* this.broadcastAndWait("annulerRetenue");
                    }
                  }
                }
              } else {
                this.stage.vars.penvalue = this.stage.vars.penvalueprecedent;
                this.stage.vars.penordonnee = this.stage.vars.penordonneeprecedent;
              }
            }
          } else {
            this.stage.vars.chiffreAjouter = this.stage.vars.penvalue;
            this.broadcast("save");
            this.broadcast("clickOn");
          }
        } else {
          this.stage.vars.retenue = 0;
          this.broadcast("clickOff");
          this.stage.vars.chiffreAjouter = "";
        }
        if (this.toNumber(this.stage.vars.retenue) === 0) {
          this.stage.vars.penabscisse =
            0 -
            (this.toNumber(this.stage.vars.selectedsliderindex) + 0.3) *
              this.toNumber(this.stage.vars.sliderlargeur);
        } else {
          this.stage.vars.penabscisse =
            0 -
            (this.toNumber(this.stage.vars.selectedsliderindex) + 0.7) *
              this.toNumber(this.stage.vars.sliderlargeur);
        }
        this.goto(
          this.toNumber(this.stage.vars.penabscisse) +
            this.toNumber(this.vars.xoffset),
          this.toNumber(this.stage.vars.yoffset) +
            this.toNumber(this.stage.vars.penordonnee)
        );
        this.stage.vars.selectedsliderindexprecedent = this.stage.vars.selectedsliderindex;
        this.stage.vars.sourispresseeprecedent = this.mouse.down;
      }
      yield;
    }
  }

  *limitera1lechangementdepenvalue() {
    if (
      this.compare(
        Math.abs(
          this.toNumber(this.stage.vars.penvalue) -
            this.toNumber(this.stage.vars.penvalueprecedent)
        ),
        1
      ) > 0
    ) {
      if (
        this.compare(
          this.stage.vars.penvalue,
          this.stage.vars.penvalueprecedent
        ) > 0
      ) {
        this.stage.vars.penvalue =
          this.toNumber(this.stage.vars.penvalueprecedent) + 1;
      } else {
        this.stage.vars.penvalue =
          this.toNumber(this.stage.vars.penvalueprecedent) - 1;
      }
    }
  }

  *setretenue() {
    if (
      this.toNumber(this.stage.vars.penvalue) === 10 &&
      this.toNumber(this.stage.vars.penvalueprecedent) === 10
    ) {
      if (
        this.compare(
          this.vars.xc,
          0 -
            (this.toNumber(this.stage.vars.selectedsliderindex) + 0.35) *
              this.toNumber(this.stage.vars.sliderlargeur)
        ) < 0
      ) {
        this.stage.vars.retenue = 1;
      } else {
        this.stage.vars.retenue = 0;
      }
    }
  }

  *setpenordonnee() {
    this.stage.vars.penordonneeprecedent = this.stage.vars.penordonnee;
    this.stage.vars.penordonnee =
      this.toNumber(this.stage.vars.y00penplus) +
      this.toNumber(this.stage.vars.penvalue) *
        ((this.toNumber(this.stage.vars.y10penplus) -
          this.toNumber(this.stage.vars.y00penplus)) /
          10);
    yield* this.setslidernouvellevaleur();
  }

  *setslidernouvellevaleur() {
    this.stage.vars.slidernouvellevaleur =
      this.toNumber(this.stage.vars.selectedslidervalue) +
      (this.toNumber(this.stage.vars.penvalueprecedent) -
        this.toNumber(this.stage.vars.penvalue));
  }

  *setpenvalue() {
    if (this.compare(this.vars.yc, this.stage.vars.y10penplus) > 0) {
      this.vars.yc = this.stage.vars.y10penplus;
    }
    if (this.compare(this.vars.yc, this.stage.vars.y00penplus) < 0) {
      this.vars.yc = this.stage.vars.y00penplus;
    }
    this.stage.vars.penvalueprecedent = this.stage.vars.penvalue;
    this.stage.vars.penvalue = Math.round(
      10 *
        ((this.toNumber(this.vars.yc) -
          this.toNumber(this.stage.vars.y00penplus)) /
          (this.toNumber(this.stage.vars.y10penplus) -
            this.toNumber(this.stage.vars.y00penplus)))
    );
    yield* this.setpenordonnee();
  }
}
