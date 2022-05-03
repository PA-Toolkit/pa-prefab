import {PrefabObjectAutoKillType, PrefabObjectShape, PrefabObjectType, PrefabSquareOption} from "./Enums";
import Prefab from "./Prefab";
import KeyframeList from "./KeyframeList";
import {ColorValue, PositionValue, RotationValue, ScaleValue} from "./Keyframe";
import {Serializable} from "./Serializable";

/**
 * The prefab object. This will end up as an actual object in the Project Arrhythmia Editor.
 */
export default class PrefabObject implements Serializable {
    /**
     * The object's name.
     */
    name: string = "";

    /**
     * The object's ID. This value is chosen randomly. This field is read-only.
     */
    readonly id: string;

    /**
     * The object's position parent type. If this value is true, the object's position is not affected by the parent.
     */
    positionParenting: boolean = true;

    /**
     * The object's scale parent type. If this value is true, the object's scale is not affected by the parent.
     */
    scaleParenting: boolean = false;

    /**
     * The object's rotation parent type. If this value is true, the object's rotation is not affected by the parent.
     */
    rotationParenting: boolean = true;

    /**
     * The object's position parent offset. The object's position lags behind the parent the amount of time equals to the value.
     */
    positionParentOffset: number = 0.0;

    /**
     * The object's scale parent offset. The object's scale lags behind the parent the amount of time equals to the value.
     */
    scaleParentOffset: number = 0.0;

    /**
     * The object's position rotation offset. The object's rotation lags behind the parent the amount of time equals to the value.
     */
    rotationParentOffset: number = 0.0;

    /**
     * The object's render depth. Specifies how far away the object should be from the camera.
     */
    renderDepth: number = 15;

    objectType: PrefabObjectType = PrefabObjectType.Normal;
    shape: PrefabObjectShape = PrefabObjectShape.Square;

    /**
     * The object's shape option. Use the prefab option enum for this value.
     */
    shapeOption: number = PrefabSquareOption.Solid;

    /**
     * The object's text. This value is ignored if object shape is not text.
     */
    text: string = "";

    /**
     * The object's start time. Determines when the object is spawned.
     */
    startTime: number = 0.0;

    /**
     * The object's auto kill type. Determines when the object is killed.
     */
    autoKillType: PrefabObjectAutoKillType = PrefabObjectAutoKillType.LastKeyframe;

    /**
     * The object's auto kill offset. Determines when the object is killed. Depends on auto kill type.
     */
    autoKillOffset: number = 0.0;

    originX: number = 0.0;
    originY: number = 0.0;

    editorLocked: boolean = false;
    editorCollapse: boolean = false;
    editorBin: number = 0;
    editorLayer: number = 0;

    readonly positionKeyframes: KeyframeList<PositionValue> = new KeyframeList<PositionValue>(() => new PositionValue(), []);
    readonly scaleKeyframes: KeyframeList<ScaleValue> = new KeyframeList<ScaleValue>(() => new ScaleValue(), []);
    readonly rotationKeyframes: KeyframeList<RotationValue> = new KeyframeList<RotationValue>(() => new RotationValue(), []);
    readonly colorKeyframes: KeyframeList<ColorValue> = new KeyframeList<ColorValue>(() => new ColorValue(), []);

    readonly prefab: Prefab;

    parentId: string = "";
    readonly childrenIds: Set<string> = new Set<string>();

    constructor(json, prefab: Prefab) {
        this.prefab = prefab;

        this.name = json.name;
        this.id = json.id;

        if (json.p !== undefined) {
            this.parentId = json.p;
        }

        if (json.pt !== undefined) {
            this.positionParenting = json.pt[0] === '1';
            this.scaleParenting = json.pt[1] === '1';
            this.rotationParenting = json.pt[2] === '1';
        }

        if (json.po !== undefined) {
            this.positionParentOffset = Number.parseFloat(json.po[0]);
            this.scaleParentOffset = Number.parseFloat(json.po[1]);
            this.rotationParentOffset = Number.parseFloat(json.po[2]);
        }

        if (json.d !== undefined) {
            this.renderDepth = Number.parseInt(json.d);
        }

        if (json.ot !== undefined) {
            this.objectType = Number.parseInt(json.ot);
        }

        if (json.shape !== undefined) {
            this.shape = Number.parseInt(json.shape);
        }

        if (json.so !== undefined) {
            this.shapeOption = Number.parseInt(json.so);
        }

        if (json.text !== undefined) {
            this.text = json.text;
        }

        if (json.st !== undefined) {
            this.startTime = Number.parseFloat(json.st);
        }

        if (json.akt !== undefined) {
            this.autoKillType = Number.parseInt(json.akt);
        }

        if (json.ako !== undefined) {
            this.autoKillOffset = Number.parseFloat(json.ako);
        }

        if (json.o !== undefined) {
            this.originX = Number.parseFloat(json.o.x);
            this.originY = Number.parseFloat(json.o.y);
        }

        if (json.ed !== undefined) {
            if (json.ed.locked !== undefined) {
                this.editorLocked = json.ed.locked.toString() === "true";
            }
            if (json.ed.shrink !== undefined) {
                this.editorCollapse = json.ed.shrink.toString() === "true";
            }
            if (json.ed.bin !== undefined) {
                this.editorBin = Number.parseInt(json.ed.bin);
            }
            if (json.ed.layer !== undefined) {
                this.editorLayer = Number.parseInt(json.ed.layer);
            }
        }

        if (json.events !== undefined) {
            if (json.events.pos !== undefined) {
                this.positionKeyframes = new KeyframeList<PositionValue>(() => new PositionValue(), json.events.pos);
            }
            if (json.events.sca !== undefined) {
                this.scaleKeyframes = new KeyframeList<ScaleValue>(() => new ScaleValue(), json.events.sca);
            }
            if (json.events.rot !== undefined) {
                this.rotationKeyframes = new KeyframeList<RotationValue>(() => new RotationValue(), json.events.rot);
            }
            if (json.events.col !== undefined) {
                this.colorKeyframes = new KeyframeList<ColorValue>(() => new ColorValue(), json.events.col);
            }
        }
    }

    toString(): string {
        return JSON.stringify(this.toJson());
    }

    toJson(): any {
        let json: any = {};
        json.name = this.name;
        json.id = this.id;
        json.p = this.parentId;
        json.pt = (this.positionParenting ? "1" : "0") + (this.scaleParenting ? "1" : "0") + (this.rotationParenting ? "1" : "0");
        json.po = [
            this.positionParentOffset.toString(),
            this.scaleParentOffset.toString(),
            this.rotationParentOffset.toString()
        ];
        json.d = this.renderDepth.toString();
        json.ot = this.objectType.toString();
        json.shape = this.shape.toString();
        json.so = this.shapeOption.toString();
        if (this.text !== "") {
            json.text = this.text;
        }
        json.st = this.startTime.toString();
        json.akt = this.autoKillType.toString();
        json.ako = this.autoKillOffset.toString();

        json.o = {};
        json.o.x = this.originX.toString();
        json.o.y = this.originY.toString();

        json.ed = {};
        json.ed.locked = this.editorLocked ? "true" : "false";
        json.ed.shrink = this.editorCollapse ? "true" : "false";
        json.ed.bin = this.editorBin.toString();
        json.ed.layer = this.editorLayer.toString();

        json.events = {};
        json.events.pos = this.positionKeyframes.toJson();
        json.events.sca = this.scaleKeyframes.toJson();
        json.events.rot = this.rotationKeyframes.toJson();
        json.events.col = this.colorKeyframes.toJson();
        return json;
    }

    /**
     * Gets the object's parent. Returns null if object is not parented.
     */
    getParent(): PrefabObject {
        return this.parentId !== "" ? this.prefab.objects[this.parentId] : null;
    }

    /**
     * Gets an array of children.
     */
    getChildren(): PrefabObject[] {
        let objects: PrefabObject[] = [];
        for (let id in this.childrenIds.values()) {
            objects.push(this.prefab.objects[id]);
        }
        return objects;
    }

    /**
     * Sets the object's parent.
     * @param object The new parent. Null for unparent.
     */
    setParent(object: PrefabObject) {
        if (object != null && object.prefab != this.prefab) {
            throw Error("Specified object's prefab does not match this object's prefab!");
        }

        let oldParent: PrefabObject = this.getParent();
        if (oldParent != null) {
            oldParent.childrenIds.delete(this.id);
        }

        if (object != null) {
            object.childrenIds.add(this.id);
            this.parentId = object.id;
        } else {
            this.parentId = "";
        }
    }
}
