/*
Procedural bomb generator test.
 */

const {Prefab, PrefabType} = require("..");
const {PAObject, ObjectType, Shape} = require("pa-common");

const fs = require("fs");

// Create new prefab
let prefab = new Prefab("Procedural Bomb", PrefabType.Bombs);

// Base object for all the bullets
let parent = new PAObject("Base", prefab);
prefab.addObject(parent);

parent.objectType = ObjectType.Empty;

// Add default keyframes
parent.pushPosition(0.0, 0.0, 0.0);
parent.pushScale(0.0, 1.0, 1.0);
parent.pushRotation(0.0, 0.0);
parent.pushColor(0.0, 0);

// Create bullets
for (let i = 0; i < 32; i++) {
    let dirX = Math.cos(i / 16.0 * Math.PI);
    let dirY = Math.sin(i / 16.0 * Math.PI);

    let bullet = new PAObject(`Bullet ${i}`, prefab);
    prefab.addObject(bullet);

    bullet.editorBin = 1;
    bullet.shape = Shape.Circle;
    bullet.parent = parent;

    bullet.pushPosition(0.0, 0.0, 0.0);
    bullet.pushPosition(10.0, dirX * 60.0, dirY * 60.0);
    bullet.pushScale(0.0, 1.0, 1.0);
    bullet.pushRotation(0.0, 0.0);
    bullet.pushColor(0.0, 0);
}

if (!fs.existsSync("test/result")) {
    fs.mkdirSync("test/result");
}
fs.writeFileSync("test/result/procedural_bomb.lsp", prefab.toString(), { flag: 'w+' });

// Read test
let jsonStr = fs.readFileSync("test/result/procedural_bomb.lsp").toString();

let readPrefab = new Prefab("", PrefabType.Bombs);
readPrefab.fromJson(JSON.parse(jsonStr));

console.log("original json >\n" + prefab.toString());
console.log("");
console.log("Read back json >\n" + readPrefab.toString());

console.assert(readPrefab.toString() === jsonStr);
