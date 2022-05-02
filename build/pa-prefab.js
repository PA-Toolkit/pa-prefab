(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["pa-prefab"] = {}));
})(this, (function (exports) { 'use strict';

    /**
     * Prefab Type enum. Contains all possible prefab types.
     */
    exports.PrefabType = void 0;
    (function (PrefabType) {
        PrefabType[PrefabType["Bombs"] = 0] = "Bombs";
        PrefabType[PrefabType["Bullets"] = 1] = "Bullets";
        PrefabType[PrefabType["Beams"] = 2] = "Beams";
        PrefabType[PrefabType["Spinners"] = 3] = "Spinners";
        PrefabType[PrefabType["Pulses"] = 4] = "Pulses";
        PrefabType[PrefabType["Characters"] = 5] = "Characters";
        PrefabType[PrefabType["Misc1"] = 6] = "Misc1";
        PrefabType[PrefabType["Misc2"] = 7] = "Misc2";
        PrefabType[PrefabType["Misc3"] = 8] = "Misc3";
        PrefabType[PrefabType["Misc4"] = 9] = "Misc4";
    })(exports.PrefabType || (exports.PrefabType = {}));
    /**
     * Prefab Object Type enum. Contains all possible object types.
     */
    exports.PrefabObjectType = void 0;
    (function (PrefabObjectType) {
        PrefabObjectType[PrefabObjectType["Normal"] = 0] = "Normal";
        PrefabObjectType[PrefabObjectType["Helper"] = 1] = "Helper";
        PrefabObjectType[PrefabObjectType["Decoration"] = 2] = "Decoration";
        PrefabObjectType[PrefabObjectType["Empty"] = 3] = "Empty";
    })(exports.PrefabObjectType || (exports.PrefabObjectType = {}));
    /**
     * Prefab Object Shape enum. Contains all possible object shapes.
     */
    exports.PrefabObjectShape = void 0;
    (function (PrefabObjectShape) {
        PrefabObjectShape[PrefabObjectShape["Square"] = 0] = "Square";
        PrefabObjectShape[PrefabObjectShape["Circle"] = 1] = "Circle";
        PrefabObjectShape[PrefabObjectShape["Triangle"] = 2] = "Triangle";
        PrefabObjectShape[PrefabObjectShape["ArrowUp"] = 3] = "ArrowUp";
        PrefabObjectShape[PrefabObjectShape["Text"] = 4] = "Text";
        PrefabObjectShape[PrefabObjectShape["Hexagon"] = 5] = "Hexagon";
    })(exports.PrefabObjectShape || (exports.PrefabObjectShape = {}));
    /**
     * Prefab Square Option enum. Contains all possible options for the Square shape.
     */
    exports.PrefabSquareOption = void 0;
    (function (PrefabSquareOption) {
        PrefabSquareOption[PrefabSquareOption["Solid"] = 0] = "Solid";
        PrefabSquareOption[PrefabSquareOption["HollowThick"] = 1] = "HollowThick";
        PrefabSquareOption[PrefabSquareOption["HollowThin"] = 2] = "HollowThin";
    })(exports.PrefabSquareOption || (exports.PrefabSquareOption = {}));
    /**
     * Prefab Circle Option enum. Contains all possible options for the Circle shape.
     */
    exports.PrefabCircleOption = void 0;
    (function (PrefabCircleOption) {
        PrefabCircleOption[PrefabCircleOption["Solid"] = 0] = "Solid";
        PrefabCircleOption[PrefabCircleOption["HollowThick"] = 1] = "HollowThick";
        PrefabCircleOption[PrefabCircleOption["HalfSolid"] = 2] = "HalfSolid";
        PrefabCircleOption[PrefabCircleOption["HalfHollow"] = 3] = "HalfHollow";
        PrefabCircleOption[PrefabCircleOption["HollowThin"] = 4] = "HollowThin";
        PrefabCircleOption[PrefabCircleOption["QuarterSolid"] = 5] = "QuarterSolid";
        PrefabCircleOption[PrefabCircleOption["QuarterHollow"] = 6] = "QuarterHollow";
        PrefabCircleOption[PrefabCircleOption["HalfQuarterSolid"] = 7] = "HalfQuarterSolid";
        PrefabCircleOption[PrefabCircleOption["HalfQuarterHollow"] = 8] = "HalfQuarterHollow";
    })(exports.PrefabCircleOption || (exports.PrefabCircleOption = {}));
    /**
     * Prefab Triangle Option enum. Contains all possible options for the Triangle shape.
     */
    exports.PrefabTriangleOption = void 0;
    (function (PrefabTriangleOption) {
        PrefabTriangleOption[PrefabTriangleOption["Solid"] = 0] = "Solid";
        PrefabTriangleOption[PrefabTriangleOption["Hollow"] = 1] = "Hollow";
        PrefabTriangleOption[PrefabTriangleOption["RightAngledSolid"] = 2] = "RightAngledSolid";
        PrefabTriangleOption[PrefabTriangleOption["RightAngledHollow"] = 3] = "RightAngledHollow";
    })(exports.PrefabTriangleOption || (exports.PrefabTriangleOption = {}));
    /**
     * Prefab Arrow Option enum. Contains all possible options for the Arrow shape.
     */
    exports.PrefabArrowOption = void 0;
    (function (PrefabArrowOption) {
        PrefabArrowOption[PrefabArrowOption["Normal"] = 0] = "Normal";
        PrefabArrowOption[PrefabArrowOption["Head"] = 1] = "Head";
    })(exports.PrefabArrowOption || (exports.PrefabArrowOption = {}));
    /**
     * Prefab Hexagon Option enum. Contains all possible options for the Hexagon shape.
     */
    exports.PrefabHexagonOption = void 0;
    (function (PrefabHexagonOption) {
        PrefabHexagonOption[PrefabHexagonOption["Solid"] = 0] = "Solid";
        PrefabHexagonOption[PrefabHexagonOption["HollowThick"] = 1] = "HollowThick";
        PrefabHexagonOption[PrefabHexagonOption["HollowThin"] = 2] = "HollowThin";
        PrefabHexagonOption[PrefabHexagonOption["Half"] = 3] = "Half";
        PrefabHexagonOption[PrefabHexagonOption["HalfHollowThick"] = 4] = "HalfHollowThick";
        PrefabHexagonOption[PrefabHexagonOption["HalfHollowThin"] = 5] = "HalfHollowThin";
    })(exports.PrefabHexagonOption || (exports.PrefabHexagonOption = {}));
    /**
     * Prefab Object Auto Kill Type enum. Contains all possible object auto kill types.
     */
    exports.PrefabObjectAutoKillType = void 0;
    (function (PrefabObjectAutoKillType) {
        /**
         * @deprecated This auto kill type is obsolete and will be removed in future versions of Project Arrhythmia.
         */
        PrefabObjectAutoKillType[PrefabObjectAutoKillType["NoAutokill"] = 0] = "NoAutokill";
        PrefabObjectAutoKillType[PrefabObjectAutoKillType["LastKeyframe"] = 1] = "LastKeyframe";
        PrefabObjectAutoKillType[PrefabObjectAutoKillType["LastKeyframeOffset"] = 2] = "LastKeyframeOffset";
        PrefabObjectAutoKillType[PrefabObjectAutoKillType["Fixed"] = 3] = "Fixed";
        PrefabObjectAutoKillType[PrefabObjectAutoKillType["SongTime"] = 4] = "SongTime";
    })(exports.PrefabObjectAutoKillType || (exports.PrefabObjectAutoKillType = {}));
    /**
     * Prefab Object Random Mode enum. Contains all possible object random modes.
     */
    exports.PrefabObjectRandomMode = void 0;
    (function (PrefabObjectRandomMode) {
        PrefabObjectRandomMode[PrefabObjectRandomMode["None"] = 0] = "None";
        PrefabObjectRandomMode[PrefabObjectRandomMode["Range"] = 1] = "Range";
        /**
         * @deprecated This is no longer used and only exists for backwards-compatibility purposes. Please use interval instead.
         */
        PrefabObjectRandomMode[PrefabObjectRandomMode["Snap"] = 2] = "Snap";
        PrefabObjectRandomMode[PrefabObjectRandomMode["Toggle"] = 3] = "Toggle";
        PrefabObjectRandomMode[PrefabObjectRandomMode["Scale"] = 4] = "Scale";
    })(exports.PrefabObjectRandomMode || (exports.PrefabObjectRandomMode = {}));
    /**
     * Prefab Object Easing enum. Contains all possible object curve types.
     */
    exports.PrefabObjectEasing = void 0;
    (function (PrefabObjectEasing) {
        PrefabObjectEasing[PrefabObjectEasing["Linear"] = 0] = "Linear";
        PrefabObjectEasing[PrefabObjectEasing["Instant"] = 1] = "Instant";
        PrefabObjectEasing[PrefabObjectEasing["InSine"] = 2] = "InSine";
        PrefabObjectEasing[PrefabObjectEasing["OutSine"] = 3] = "OutSine";
        PrefabObjectEasing[PrefabObjectEasing["InOutSine"] = 4] = "InOutSine";
        PrefabObjectEasing[PrefabObjectEasing["InElastic"] = 5] = "InElastic";
        PrefabObjectEasing[PrefabObjectEasing["OutElastic"] = 6] = "OutElastic";
        PrefabObjectEasing[PrefabObjectEasing["InOutElastic"] = 7] = "InOutElastic";
        PrefabObjectEasing[PrefabObjectEasing["InBack"] = 8] = "InBack";
        PrefabObjectEasing[PrefabObjectEasing["OutBack"] = 9] = "OutBack";
        PrefabObjectEasing[PrefabObjectEasing["InOutBack"] = 10] = "InOutBack";
        PrefabObjectEasing[PrefabObjectEasing["InBounce"] = 11] = "InBounce";
        PrefabObjectEasing[PrefabObjectEasing["OutBounce"] = 12] = "OutBounce";
        PrefabObjectEasing[PrefabObjectEasing["InOutBounce"] = 13] = "InOutBounce";
        PrefabObjectEasing[PrefabObjectEasing["InQuad"] = 14] = "InQuad";
        PrefabObjectEasing[PrefabObjectEasing["OutQuad"] = 15] = "OutQuad";
        PrefabObjectEasing[PrefabObjectEasing["InOutQuad"] = 16] = "InOutQuad";
        PrefabObjectEasing[PrefabObjectEasing["InCirc"] = 17] = "InCirc";
        PrefabObjectEasing[PrefabObjectEasing["OutCirc"] = 18] = "OutCirc";
        PrefabObjectEasing[PrefabObjectEasing["InOutCirc"] = 19] = "InOutCirc";
        PrefabObjectEasing[PrefabObjectEasing["InExpo"] = 20] = "InExpo";
        PrefabObjectEasing[PrefabObjectEasing["OutExpo"] = 21] = "OutExpo";
        PrefabObjectEasing[PrefabObjectEasing["InOutExpo"] = 22] = "InOutExpo";
    })(exports.PrefabObjectEasing || (exports.PrefabObjectEasing = {}));
    /**
     * Prefab Build Flags enum. Used for setting certain configurations to the prefab builder.
     */
    exports.PrefabBuildFlags = void 0;
    (function (PrefabBuildFlags) {
        PrefabBuildFlags[PrefabBuildFlags["None"] = 0] = "None";
        PrefabBuildFlags[PrefabBuildFlags["SortObjects"] = 1] = "SortObjects";
        PrefabBuildFlags[PrefabBuildFlags["SortKeyframes"] = 2] = "SortKeyframes";
        PrefabBuildFlags[PrefabBuildFlags["AbsoluteRotation"] = 4] = "AbsoluteRotation";
    })(exports.PrefabBuildFlags || (exports.PrefabBuildFlags = {}));

    /**
     * The prefab object. This will end up as an actual object in the Project Arrhythmia Editor.
     */
    var PrefabObject = /** @class */ (function () {
        function PrefabObject(json, prefab) {
            /**
             * The object's name.
             */
            this.name = "";
            /**
             * The object's position parent type. If this value is true, the object's position is not affected by the parent.
             */
            this.positionParenting = true;
            /**
             * The object's scale parent type. If this value is true, the object's scale is not affected by the parent.
             */
            this.scaleParenting = false;
            /**
             * The object's rotation parent type. If this value is true, the object's rotation is not affected by the parent.
             */
            this.rotationParenting = true;
            /**
             * The object's position parent offset. The object's position lags behind the parent the amount of time equals to the value.
             */
            this.positionParentOffset = 0.0;
            /**
             * The object's scale parent offset. The object's scale lags behind the parent the amount of time equals to the value.
             */
            this.scaleParentOffset = 0.0;
            /**
             * The object's position rotation offset. The object's rotation lags behind the parent the amount of time equals to the value.
             */
            this.rotationParentOffset = 0.0;
            /**
             * The object's render depth. Specifies how far away the object should be from the camera.
             */
            this.renderDepth = 15;
            this.objectType = exports.PrefabObjectType.Normal;
            this.shape = exports.PrefabObjectShape.Square;
            /**
             * The object's shape option. Use the prefab option enum for this value.
             */
            this.shapeOption = exports.PrefabSquareOption.Solid;
            /**
             * The object's text. This value is ignored if object shape is not text.
             */
            this.text = "";
            /**
             * The object's start time. Determines when the object is spawned.
             */
            this.startTime = 0.0;
            /**
             * The object's auto kill type. Determines when the object is killed.
             */
            this.autoKillType = exports.PrefabObjectAutoKillType.LastKeyframe;
            /**
             * The object's auto kill offset. Determines when the object is killed. Depends on auto kill type.
             */
            this.autoKillOffset = 0.0;
            this.originX = 0.0;
            this.originY = 0.0;
            this.editorLocked = false;
            this.editorCollapse = false;
            this.editorBin = 0;
            this.editorLayer = 0;
            this.parentId = "";
            this.childrenIds = new Set();
            this.prefab = prefab;
            this.name = json.name;
            this.id = json.id;
            if (json.p !== undefined) {
                this.parentId = json.p;
            }
            if (json.pt !== undefined) {
                this.positionParenting = json.pt[0] == '1';
                this.scaleParenting = json.pt[1] == '1';
                this.rotationParenting = json.pt[2] == '1';
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
            // TODO: implement parsing events
        }
        /**
         * Gets the object's parent. Returns null if object is not parented.
         */
        PrefabObject.prototype.getParent = function () {
            return this.parentId !== "" ? this.prefab.objects[this.parentId] : null;
        };
        /**
         * Gets an array of children.
         */
        PrefabObject.prototype.getChildren = function () {
            var objects = [];
            for (var id in this.childrenIds.values()) {
                objects.push(this.prefab.objects[id]);
            }
            return objects;
        };
        /**
         * Sets the object's parent.
         * @param object The new parent. Null for unparent.
         */
        PrefabObject.prototype.setParent = function (object) {
            if (object != null && object.prefab != this.prefab) {
                throw Error("Specified object's prefab does not match this object's prefab!");
            }
            var oldParent = this.getParent();
            if (oldParent != null) {
                oldParent.childrenIds["delete"](this.id);
            }
            if (object != null) {
                object.childrenIds.add(this.id);
                this.parentId = object.id;
            }
            else {
                this.parentId = "";
            }
        };
        return PrefabObject;
    }());

    function randInt(max) {
        return Math.floor(Math.random() * max);
    }
    function randId() {
        var idChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*_+{}|:<>?,./;'[]▓▒░▐▆▉☰☱☲☳☴☵☶☷►▼◄▬▩▨▧▦▥▤▣▢□■¤ÿòèµ¶™ßÃ®¾ð¥œ⁕(◠‿◠✿)";
        var id = "";
        for (var i = 0; i < 16; i++) {
            id += idChars[randInt(idChars.length)];
        }
        return id;
    }

    /**
     * The prefab, the base of the library. Use this to make a prefab and export to a file or to a stream.
     */
    var Prefab = /** @class */ (function () {
        /**
         * Prefab constructor.
         * @param json The prefab json. Offset and objects can be omitted.
         */
        function Prefab(json) {
            this.objects = new Map();
            this.name = json.name;
            this.type = Number.parseInt(json.type);
            this.offset = json.offset !== undefined ? Number.parseFloat(json.offset) : 0.0;
            if (json.objects !== undefined) {
                for (var _i = 0, _a = json.objects; _i < _a.length; _i++) {
                    var objJson = _a[_i];
                    this.objects[objJson.id] = new PrefabObject(objJson, this);
                }
                for (var _b = 0, _c = Object.entries(this.objects); _b < _c.length; _b++) {
                    var _d = _c[_b], obj = _d[1];
                    var parent_1 = obj.getParent();
                    if (parent_1 != null) {
                        parent_1.childrenIds.add(obj.id);
                    }
                }
            }
        }
        /**
         * Creates an object and stores it the prefab.
         * @param name A new prefab object
         */
        Prefab.prototype.createObject = function (name) {
            var id = randId();
            var obj = new PrefabObject({
                name: name,
                id: id
            }, this);
            this.objects[id] = obj;
            return obj;
        };
        /**
         * Unparents all object's children and deletes the object.
         * @param object An existing object
         */
        Prefab.prototype.deleteObject = function (object) {
            if (object.prefab != this) {
                throw Error("Specified object does not belong to this prefab!");
            }
            for (var _i = 0, _a = object.getChildren(); _i < _a.length; _i++) {
                var child = _a[_i];
                child.setParent(null);
            }
            this.objects["delete"](object.id);
        };
        return Prefab;
    }());

    exports.Prefab = Prefab;
    exports.PrefabObject = PrefabObject;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
