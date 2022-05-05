import {PrefabType} from "./PrefabType";
import {ObjectOwner, PAObject, Serializable, Utils} from "pa-common";

/**
 * The prefab, the base of the library.
 */
export default class Prefab implements ObjectOwner, Serializable {
    /**
     * The prefab's name. This will be visible in the Project Arrhythmia Editor.
     */
    name: string = "";

    /**
     * The prefab's type. This will be visible the in the Project Arrhythmia Editor.
     */
    type: PrefabType = PrefabType.Bombs;

    /**
     * The prefab's offset. I don't even know what this does but I'll put it here anyway. fuck me
     */
    offset: number = 0.0;

    readonly objects: Map<string, PAObject> = new Map<string, PAObject>();

    /**
     * Prefab constructor.
     * @param name Name of the prefab
     * @param type Type of the prefab
     */
    constructor(name: string, type: PrefabType) {
        this.name = name;
        this.type = type;
    }

    getId(): string {
        return Utils.randId();
    }

    getObject(id: string): PAObject {
        return this.objects[id];
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

    fromJson(json: any): any {
        this.name = json.name;
        this.type = Number.parseInt(json.type);
        this.offset = json.offset !== undefined ? Number.parseFloat(json.offset) : 0.0;

        if (json.objects !== undefined) {
            for (let objJson of json.objects) {
                let object: PAObject = new PAObject("", this);
                object.fromJson(objJson);
                this.objects[objJson.id] = object;
            }
        }
    }

    /**
     * Adds an object to this prefab.
     */
    addObject(object: PAObject) {
        if (object.owner !== this) {
            throw new Error("Mismatch owner!");
        }
        if (this.objects.has(object.id)) {
            throw new Error("This object is already added to the prefab!");
        }
        this.objects[object.id] = object;
    }

    /**
     * Remove an object from this prefab.
     * @param id The object's id
     */
    removeObject(id: string) {
        this.objects.delete(id);
    }
}
