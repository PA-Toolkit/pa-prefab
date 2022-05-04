/*
Procedural bomb generator test.
 */

const {
    CreatePrefab,
    PrefabType,
    PrefabObjectType,
    CreatePositionKeyframe,
    CreateScaleKeyframe,
    CreateRotationKeyframe,
    CreateColorKeyframe,
    PrefabObjectShape,
    CreatePrefabFromJson
} = require("../build/index");
const fs = require("fs");

// Create new prefab
let prefab = CreatePrefab("Procedural Bomb", PrefabType.Bombs);

// Base object for all the bullets
let parent = prefab.createObject("Base");
parent.objectType = PrefabObjectType.Empty;

// Add default keyframes
parent.positionKeyframes.push(CreatePositionKeyframe(0.0, 0.0, 0.0));
parent.scaleKeyframes.push(CreateScaleKeyframe(0.0, 1.0, 1.0));
parent.rotationKeyframes.push(CreateRotationKeyframe(0.0, 0.0));
parent.colorKeyframes.push(CreateColorKeyframe(0.0, 0));

// Create bullets
for (let i = 0; i < 32; i++) {
    let dirX = Math.cos(i / 16.0 * Math.PI);
    let dirY = Math.sin(i / 16.0 * Math.PI);
    let bullet = prefab.createObject(`Bullet ${i}`);
    bullet.editorBin = 1;
    bullet.shape = PrefabObjectShape.Circle;
    bullet.setParent(parent);

    bullet.positionKeyframes.push(CreatePositionKeyframe(0.0, 0.0, 0.0));
    bullet.positionKeyframes.push(CreatePositionKeyframe(10.0, dirX * 60.0, dirY * 60.0));
    bullet.scaleKeyframes.push(CreateScaleKeyframe(0.0, 1.0, 1.0));
    bullet.rotationKeyframes.push(CreateRotationKeyframe(0.0, 0.0));
    bullet.colorKeyframes.push(CreateColorKeyframe(0.0, 0));
}

if (!fs.existsSync("test/result")) {
    fs.mkdirSync("test/result");
}
fs.writeFileSync("test/result/procedural_bomb.lsp", prefab.toString(), { flag: 'w+' });

// Read test
let jsonStr = fs.readFileSync("test/result/procedural_bomb.lsp").toString();

let readPrefab = CreatePrefabFromJson(JSON.parse(jsonStr));
console.log(readPrefab.toString() === jsonStr ? "Test passed!" : "Test failed!");
