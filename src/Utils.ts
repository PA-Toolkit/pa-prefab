import {ColorValue, Keyframe, PositionValue, RotationValue, ScaleValue} from "./Keyframe";
import {PrefabType} from "./Enums";
import Prefab from "./Prefab";

function RandInt(max: number): number {
    return Math.floor(Math.random() * max);
}

/**
 * Creates a random ID.
 * @return 16-character long ID string
 */
export function RandId(): string {
    const idChars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*_+{}|:<>?,./;'[]▓▒░▐▆▉☰☱☲☳☴☵☶☷►▼◄▬▩▨▧▦▥▤▣▢□■¤ÿòèµ¶™ßÃ®¾ð¥œ⁕(◠‿◠✿)";
    let id = "";
    for (let i: number = 0; i < 16; i++) {
        id += idChars[RandInt(idChars.length)];
    }
    return id;
}

/**
 * Creates a position keyframe.
 * @param time The keyframe's time
 * @param x The keyframe's x component
 * @param y The keyframe's y component
 */
export function CreatePositionKeyframe(time: number, x: number, y: number): Keyframe<PositionValue> {
    return new Keyframe<PositionValue>(() => new PositionValue(), { t: time, x: x, y: y });
}

/**
 * Creates a scale keyframe.
 * @param time The keyframe's time
 * @param x The keyframe's x component
 * @param y The keyframe's y component
 */
export function CreateScaleKeyframe(time: number, x: number, y: number): Keyframe<ScaleValue> {
    return new Keyframe<ScaleValue>(() => new ScaleValue(), { t: time, x: x, y: y });
}

/**
 * Creates a rotation keyframe.
 * @param time The keyframe's time
 * @param value The keyframe's value
 */
export function CreateRotationKeyframe(time: number, value: number): Keyframe<RotationValue> {
    return new Keyframe<RotationValue>(() => new RotationValue(), { t: time, x: value });
}

/**
 * Creates a color keyframe.
 * @param time The keyframe's time
 * @param value The keyframe's value (should be integer)
 */
export function CreateColorKeyframe(time: number, value: number): Keyframe<ColorValue> {
    return new Keyframe<ColorValue>(() => new ColorValue(), { t: time, x: value });
}

/**
 * Creates a new prefab.
 * @param name The prefab's name
 * @param type The prefab's type
 */
export function CreatePrefab(name: string, type: PrefabType): Prefab {
    return new Prefab({ name: name, type: type });
}

/**
 * Creates a new prefab from json.
 * @param json The json to parse
 */
export function CreatePrefabFromJson(json: any): Prefab {
    return new Prefab(json);
}
