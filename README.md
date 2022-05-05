<h1 align="center">Welcome to pa-prefab 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-2.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Reads and generates Project Arrhythmia prefabs procedurally

GitHub repository: https://github.com/PA-Toolkit/pa-prefab

## IMPORTANT: This library depends on [pa-common](https://github.com/PA-Toolkit/pa-common)!

## Install

```sh
npm install pa-prefab
```

## Build

```sh
npm run build
```

## Usage
## Importing
### Node.js
```js
const { Prefab, PrefabType } = require("pa-prefab");
```
or
```js
import { Prefab, PrefabType } from "pa-prefab";
```

### Browser
```html
<head>
    <script type="text/javascript" src="path/to/pa-prefab.js"/>
</head>

<script>
    const Prefab = PAPrefab.Prefab;
    const PrefabType = PAPrefab.PrefabType;
</script>
```

## Creating a prefab
```js
const { Prefab, PrefabType } = require("pa-prefab");

let myPrefab = new Prefab("Hello Prefab Toolkit!", PrefabType.Misc1);
```
## Creating an object
To create an object, make a new object with `new PAObject(name, Prefab)` and add it to the prefab with `Prefab.addObject(PAObject)`.
```js
const { Prefab, PrefabType } = require("pa-prefab");
const { PAObject } = require("pa-common");

let myPrefab = new Prefab("Hello Prefab Toolkit!", PrefabType.Misc1);
let myObject = new PAObject("Hello Object!", myPrefab);
myPrefab.addObject(myObject);
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
const { ObjectType } = require("pa-common");

myObject.objectType = ObjectType.Helper;
```
Changing object shape
```js
const { Shape } = require("pa-common");

myObject.shape = Shape.Circle;
```
Changing object sub-shape
```js
const { CircleOption } = require("pa-common");

myObject.shapeOption = CircleOption.HalfHollow;
```
Changing object text
```js
myObject.text = "The quick brown fox jumps over the lazy dog."; // Note: This will be ignored unless your object shape is Text.
```
Changing object auto kill type
```js
const { AutoKillType } = require("pa-common");

myObject.autoKillType = AutoKillType.Fixed;
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
myObject.pushPosition(0.0, 0.0, 0.0);
myObject.pushScale(0.0, 1.0, 1.0);
myObject.pushRotation(0.0, 0.0);
myObject.pushColor(0.0, 0);
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
const { Prefab, PrefabType } = require("pa-prefab");

let json = JSON.parse(jsonStr);
let prefab = new Prefab("", PrefabType.Bombs); // will be overriden by fromJson!
prefab.fromJson(json);
```

## Run tests

```sh
npm run test
```

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
