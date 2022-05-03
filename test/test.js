const {
    PositionKeyframe,
    Prefab,
    PrefabType,
    ScaleKeyframe,
    RotationKeyframe, ColorKeyframe
} = require("../build/pa-prefab");

let prefab = new Prefab({
    name: "Hello",
    type: PrefabType.Bombs
});

let object = prefab.createObject("Hello world!");
object.positionKeyframes.push(PositionKeyframe(0.0, 1.0, 2.5));
object.scaleKeyframes.push(ScaleKeyframe(0.0, 1.0, 1.0));
object.rotationKeyframes.push(RotationKeyframe(0.0, 90.0));
object.colorKeyframes.push(ColorKeyframe(0.0, 1));

console.log(prefab.toString());
