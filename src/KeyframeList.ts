import {Keyframe, KeyframeValue, KeyframeValueFactory} from "./Keyframe";
import {Serializable} from "./Serializable";

/**
 * A class that holds keyframes.
 */
export default class KeyframeList<T extends KeyframeValue> implements Serializable {
    /**
     * The keyframes stored in this object.
     */
    readonly keyframes: Keyframe<T>[] = [];

    constructor(valueFactory: KeyframeValueFactory<T>, json: []) {
        for (let kfJson of json) {
            let kf: Keyframe<T> = new Keyframe<T>(valueFactory, kfJson);
            this.keyframes.push(kf);
        }
    }

    push(keyframe: Keyframe<T>) {
        this.keyframes.push(keyframe);
    }

    toString(): string {
        return JSON.stringify(this.toJson());
    }

    toJson(): any {
        let json = [];
        for (let keyframe of this.keyframes) {
            json.push(keyframe.toJson());
        }
        return json;
    }
}