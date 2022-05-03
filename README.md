<h1 align="center">Welcome to pa-prefab 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Reads and generates Project Arrhythmia prefabs procedurally.

## Install

```sh
npm install pa-prefab
```

## Build

```sh
npm run build
```

## Usage
## Creating a prefab
It is recommended to use the `CreatePrefab(string, PrefabType)` function to create a new prefab.
```js
const { Prefab, PrefabType } = require("pa-prefab");

let myPrefab = CreatePrefab("Hello Prefab Toolkit!", PrefabType.Misc1);
```
## Creating an object
To create an object, call `prefab.createObject(string);`. This returns an object which can be modified.
```js
const { Prefab, PrefabType } = require("pa-prefab");

let myPrefab = CreatePrefab("Hello Prefab Toolkit!", PrefabType.Misc1);
let myObject = myPrefab.createObject("Hello Prefab Object!");
```
## Modifying the object
Setting the object's name
```js
myObject.name = "Hello world!";
```
Toggling position/scale/rotation parenting
```js
myObject.positionParenting = true;
myObject.scaleParenting = false;
myObject.rotationParenting = true;
```
Similarly, for parent offset
```js
myObject.positionParentOffset = 0.0;
myObject.scaleParentOffset = 1.0;
myObject.rotationParentOffset = 2.0;
```
Changing render depth
```js
myObject.renderDepth = 5; // This should be an integer!
```
Changing object type
```js
const { PrefabObjectType } = require("pa-prefab");

myObject.objectType = PrefabObjectType.Helper;
```
Changing object shape
```js
const { PrefabObjectShape } = require("pa-prefab");

myObject.shape = PrefabObjectShape.Circle;
```
Changing object sub-shape
```js
const { PrefabCircleOption } = require("pa-prefab");

myObject.shapeOption = PrefabCircleOption.HalfHollow;
```
Changing object text
```js
myObject.text = "The quick brown fox jumps over the lazy dog."; // Note: This will be ignored unless your object shape is Text.
```
Changing object auto kill type
```js
const { PrefabObjectAutoKillType } = require("pa-prefab");

myObject.autoKillType = PrefabObjectAutoKillType.Fixed;
```
Changing object auto kill offset
```js
myObject.autoKillOffset = 5.0;
```
Changing object origin
```js
myObject.originX = 0.5;
myObject.originY = 0.5;
```
Changing editor locked/collapsed state and bin/layer
```js
myObject.editorLocked = false;
myObject.editorCollapse = true;
myObject.editorBin = 1;
myObject.editorLayer = 0;
```
## Animating the object
There are four lists of different keyframe types inside the object. Each list is empty initially. You can add keyframes to those list to animate them. Note that there should be at least one keyframe per list.
```js
myObject.positionKeyframes.push(CreatePositionKeyframe(0.0, 0.0, 0.0));
myObject.scaleKeyframes.push(CreateScaleKeyframe(0.0, 1.0, 1.0));
myObject.rotationKeyframes.push(CreateRotationKeyframe(0.0, 0.0));
myObject.colorKeyframes.push(CreateColorKeyframe(0.0, 0));
```
## Building the prefab
You can convert the prefab to a JSON string to write it to a file.
```js
const { fs } = require("fs");

fs.writeFileSync("my_new_prefab.lsp", prefab.toString());
```
## Reading an existing prefab
You can read an existing prefab from a string.
```js
const { fs } = require("fs");
const { CreatePrefabFromJson } = require("pa-prefab");

let jsonStr = fs.readFileSync("my_prefab.lsp");
let json = JSON.parse(jsonStr);
let prefab = CreatePrefabFromJson(json);
```

## Run tests

```sh
npm run test
```

## Author

👤 **Reimnop**

* Website: reimnop.me
* Github: [@Reimnop](https://github.com/Reimnop)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
