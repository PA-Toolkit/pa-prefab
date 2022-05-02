/**
 * Prefab Type enum. Contains all possible prefab types.
 */
export enum PrefabType {
    Bombs = 0,
    Bullets = 1,
    Beams = 2,
    Spinners = 3,
    Pulses = 4,
    Characters = 5,
    Misc1 = 6,
    Misc2 = 7,
    Misc3 = 8,
    Misc4 = 9
}

/**
 * Prefab Object Type enum. Contains all possible object types.
 */
export enum PrefabObjectType {
    Normal = 0,
    Helper = 1,
    Decoration = 2,
    Empty = 3
}

/**
 * Prefab Object Shape enum. Contains all possible object shapes.
 */
export enum PrefabObjectShape {
    Square = 0,
    Circle = 1,
    Triangle = 2,
    ArrowUp = 3,
    Text = 4,
    Hexagon = 5
}

/**
 * Prefab Square Option enum. Contains all possible options for the Square shape.
 */
export enum PrefabSquareOption {
    Solid = 0,
    HollowThick = 1,
    HollowThin = 2
}

/**
 * Prefab Circle Option enum. Contains all possible options for the Circle shape.
 */
export enum PrefabCircleOption {
    Solid = 0,
    HollowThick = 1,
    HalfSolid = 2,
    HalfHollow = 3,
    HollowThin = 4,
    QuarterSolid = 5,
    QuarterHollow = 6,
    HalfQuarterSolid = 7,
    HalfQuarterHollow = 8
}

/**
 * Prefab Triangle Option enum. Contains all possible options for the Triangle shape.
 */
export enum PrefabTriangleOption {
    Solid = 0,
    Hollow = 1,
    RightAngledSolid = 2,
    RightAngledHollow = 3
}

/**
 * Prefab Arrow Option enum. Contains all possible options for the Arrow shape.
 */
export enum PrefabArrowOption {
    Normal = 0,
    Head = 1
}

/**
 * Prefab Hexagon Option enum. Contains all possible options for the Hexagon shape.
 */
export enum PrefabHexagonOption {
    Solid = 0,
    HollowThick = 1,
    HollowThin = 2,
    Half = 3,
    HalfHollowThick = 4,
    HalfHollowThin = 5
}

/**
 * Prefab Object Auto Kill Type enum. Contains all possible object auto kill types.
 */
export enum PrefabObjectAutoKillType {
    /**
     * @deprecated This auto kill type is obsolete and will be removed in future versions of Project Arrhythmia.
     */
    NoAutokill = 0,
    LastKeyframe = 1,
    LastKeyframeOffset = 2,
    Fixed = 3,
    SongTime = 4
}

/**
 * Prefab Object Random Mode enum. Contains all possible object random modes.
 */
export enum PrefabObjectRandomMode {
    None = 0,
    Range = 1,
    /**
     * @deprecated This is no longer used and only exists for backwards-compatibility purposes. Please use interval instead.
     */
    Snap = 2,
    Toggle = 3,
    Scale = 4
}

/**
 * Prefab Object Easing enum. Contains all possible object curve types.
 */
export enum PrefabObjectEasing {
    Linear,
    Instant,
    InSine,
    OutSine,
    InOutSine,
    InElastic,
    OutElastic,
    InOutElastic,
    InBack,
    OutBack,
    InOutBack,
    InBounce,
    OutBounce,
    InOutBounce,
    InQuad,
    OutQuad,
    InOutQuad,
    InCirc,
    OutCirc,
    InOutCirc,
    InExpo,
    OutExpo,
    InOutExpo
}

/**
 * Prefab Build Flags enum. Used for setting certain configurations to the prefab builder.
 */
export enum PrefabBuildFlags {
    None             = 0b00000000,
    SortObjects      = 0b00000001,
    SortKeyframes    = 0b00000010,
    AbsoluteRotation = 0b00000100
}
