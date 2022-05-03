/**
 * An object that is convertible to json.
 */
export interface Serializable {
    /**
     * Converts this object into json.
     * @returns Json object
     */
    toJson(): any;
}