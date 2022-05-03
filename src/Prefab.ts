import {PrefabType} from "./Enums";
import PrefabObject from "./PrefabObject";
import {randId} from "./Utils";
import {Serializable} from "./Serializable";

/**
 * The prefab, the base of the library.
 */
export default class Prefab implements Serializable {
    /**
     * The prefab's name. This will be visible in the Project Arrhythmia Editor.
     */
    name: string;

    /**
     * The prefab's type. This will be visible the in the Project Arrhythmia Editor.
     */
    type: PrefabType;

    /**
     * The prefab's offset. I don't even know what this does but I'll put it here anyway. fuck me
     */
    offset: number;

    readonly objects: Map<string, PrefabObject> = new Map<string, PrefabObject>();

    /**
     * Prefab constructor.
     * @param json The prefab json. Offset and objects can be omitted.
     */
    constructor(json) {
        this.name = json.name;
        this.type = Number.parseInt(json.type);
        this.offset = json.offset !== undefined ? Number.parseFloat(json.offset) : 0.0;

        if (json.objects !== undefined) {
            for (let objJson of json.objects) {
                this.objects[objJson.id] = new PrefabObject(objJson, this);
            }
            for (let [, obj] of Object.entries(this.objects)) {
                let parent: PrefabObject = obj.getParent();
                if (parent != null) {
                    parent.childrenIds.add(obj.id);
                }
            }
        }
    }

    toString(): string {
        return JSON.stringify(this.toJson());
    }

    toJson(): any {
        let json: any = {};
        json.name = this.name;
        json.type = this.type.toString();
        json.offset = this.offset.toString();
        json.objects = [];
        for (let [, object] of Object.entries(this.objects)) {
            json.objects.push(object.toJson());
        }
        return json;
    }

    /**
     * Creates an object and stores it the prefab.
     * @param name A new prefab object
     */
    createObject(name: string): PrefabObject {
        let id: string = randId();
        let obj: PrefabObject = new PrefabObject({
            name: name,
            id: id
        }, this);
        this.objects[id] = obj;
        return obj;
    }

    /**
     * Unparents all object's children and deletes the object.
     * @param object An existing object
     */
    deleteObject(object: PrefabObject) {
        if (object.prefab != this) {
            throw Error("Specified object does not belong to this prefab!");
        }
        for (let child of object.getChildren()) {
            child.setParent(null);
        }
        this.objects.delete(object.id);
    }
}
