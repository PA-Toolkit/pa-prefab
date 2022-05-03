const {PositionValue, PositionKeyframe, PrefabObjectRandomMode, PrefabObjectEasing} = require("../build/pa-prefab");

let rPos = new PositionValue();
rPos.x = 12.9;
rPos.y = -4.1;

let kf = PositionKeyframe(0.0, -2.4, 8.2);
kf.randomMode = PrefabObjectRandomMode.Snap;
kf.randomValue = rPos;
kf.easing = PrefabObjectEasing.InExpo;

console.log(kf.toJson());
