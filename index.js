import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Manager from "./Manager/Manager.js";
import Pen from "./Pen/Pen.js";
import Slider from "./Slider/Slider.js";
import Cover from "./Cover/Cover.js";
import Reset from "./Reset/Reset.js";
import Addiator from "./Addiator/Addiator.js";
import Start from "./Start/Start.js";
import Resetbutton from "./Resetbutton/Resetbutton.js";
import Capot from "./Capot/Capot.js";
import Back from "./Back/Back.js";
import Pen2 from "./Pen2/Pen2.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Manager: new Manager({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Pen: new Pen({
    x: -146,
    y: 63,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 11
  }),
  Slider: new Slider({
    x: -140,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Cover: new Cover({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 8
  }),
  Reset: new Reset({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 9
  }),
  Addiator: new Addiator({
    x: -100,
    y: -15,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  Start: new Start({
    x: 50,
    y: 60,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 4
  }),
  Resetbutton: new Resetbutton({
    x: 50,
    y: 20,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 5
  }),
  Capot: new Capot({
    x: 50,
    y: -20,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 6
  }),
  Back: new Back({
    x: 50,
    y: -60,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 3
  }),
  Pen2: new Pen2({
    x: -146,
    y: 63,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 10
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
