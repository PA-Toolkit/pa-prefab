const { Prefab, PrefabType } = require("..");

prefab = new Prefab({
    name: "Hello world",
    type: PrefabType.Bombs
});
console.log(prefab);