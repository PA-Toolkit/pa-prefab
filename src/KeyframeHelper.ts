import {ColorValue, Keyframe, PositionValue, RotationValue, ScaleValue} from "./Keyframe";

/**
 * Creates a position keyframe.
 * @param time The keyframe's time
 * @param x The keyframe's x component
 * @param y The keyframe's y component
 */
export function PositionKeyframe(time: number, x: number, y: number): Keyframe<PositionValue> {
    return new Keyframe<PositionValue>(() => new PositionValue(), { t: time, x: x, y: y });
}

/**
 * Creates a scale keyframe.
 * @param time The keyframe's time
 * @param x The keyframe's x component
 * @param y The keyframe's y component
 */
export function ScaleKeyframe(time: number, x: number, y: number): Keyframe<ScaleValue> {
    return new Keyframe<ScaleValue>(() => new ScaleValue(), { t: time, x: x, y: y });
}

/**
 * Creates a rotation keyframe.
 * @param time The keyframe's time
 * @param value The keyframe's value
 */
export function RotationKeyframe(time: number, value: number): Keyframe<RotationValue> {
    return new Keyframe<RotationValue>(() => new RotationValue(), { t: time, x: value });
}

/**
 * Creates a color keyframe.
 * @param time The keyframe's time
 * @param value The keyframe's value (should be integer)
 */
export function ColorKeyframe(time: number, value: number): Keyframe<ColorValue> {
    return new Keyframe<ColorValue>(() => new ColorValue(), { t: time, x: value });
}
