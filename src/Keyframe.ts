import {PrefabObjectEasing, PrefabObjectRandomMode} from "./Enums";
import {Serializable} from "./Serializable";

export interface KeyframeValue {
    readJson(json);
    writeJson(json);
    readRandomJson(json);
    writeRandomJson(json);
}

export class PositionValue implements KeyframeValue {
    x: number;
    y: number;

    readJson(json) {
        this.x = Number.parseFloat(json.x);
        this.y = Number.parseFloat(json.y);
    }

    writeJson(json) {
        json.x = this.x.toString();
        json.y = this.y.toString();
    }

    readRandomJson(json) {
        this.x = Number.parseFloat(json.rx);
        this.y = Number.parseFloat(json.ry);
    }

    writeRandomJson(json) {
        json.rx = this.x.toString();
        json.ry = this.y.toString();
    }
}

export class ScaleValue implements KeyframeValue {
    x: number;
    y: number;

    readJson(json) {
        this.x = Number.parseFloat(json.x);
        this.y = Number.parseFloat(json.y);
    }

    writeJson(json) {
        json.x = this.x.toString();
        json.y = this.y.toString();
    }

    readRandomJson(json) {
        this.x = Number.parseFloat(json.rx);
        this.y = Number.parseFloat(json.ry);
    }

    writeRandomJson(json) {
        json.rx = this.x.toString();
        json.ry = this.y.toString();
    }
}

export class RotationValue implements KeyframeValue {
    value: number;

    readJson(json) {
        this.value = Number.parseFloat(json.x);
    }

    writeJson(json) {
        json.x = this.value.toString();
    }

    readRandomJson(json) {
        this.value = Number.parseFloat(json.rx);
    }

    writeRandomJson(json) {
        json.rx = this.value.toString();
    }
}

export class ColorValue implements KeyframeValue {
    value: number;

    readJson(json) {
        this.value = Number.parseInt(json.x);
    }

    writeJson(json) {
        json.x = Math.floor(this.value).toString();
    }

    readRandomJson(json) {
        throw Error("Color keyframe can not be randomized!");
    }

    writeRandomJson(json) {
        throw Error("Color keyframe can not be randomized!");
    }
}

export type KeyframeValueFactory<T extends KeyframeValue> = () => T;

export class Keyframe<T extends KeyframeValue> implements Serializable {
    time: number = 0.0;
    value: T;
    easing: PrefabObjectEasing = PrefabObjectEasing.Linear;
    randomMode: PrefabObjectRandomMode = PrefabObjectRandomMode.None;
    randomValue: T;
    randomInterval: number = 0.0;

    constructor(valueFactory: KeyframeValueFactory<T>, json) {
        this.value = valueFactory();
        this.randomValue = valueFactory();

        this.time = Number.parseFloat(json.t);
        this.value.readJson(json);

        if (json.ct !== undefined) {
            this.easing = json.ct;
        }

        if (json.r !== undefined) {
            this.randomMode = Number.parseInt(json.r);
            this.randomValue.readRandomJson(json);
            this.randomInterval = Number.parseFloat(json.rz);
        }
    }

    toJson(): any {
        let json: any = {};
        json.t = this.time.toString();
        this.value.writeJson(json);
        if (this.easing !== PrefabObjectEasing.Linear) {
            json.ct = this.easing;
        }
        if (this.randomMode !== PrefabObjectRandomMode.None) {
            json.r = this.randomMode.toString();
            this.randomValue.writeRandomJson(json);
            json.rz = this.randomInterval.toString();
        }
        return json;
    }
}