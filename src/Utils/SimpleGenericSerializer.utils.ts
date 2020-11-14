/**
 * @author Artur Ataíde
 */

export type Constructor<T> = new (...args: any[]) => T;

/**
 * Class that parses json data into typed data, both simple object and array
 */
export class SimpleGenericSerializer {
    /**
     * Gets a json object and returns an object of type T
     *
     * @param json data to be parsed
     * @param destinationConstructor of type T to create the new object
     *
     * @returns object of type T with json data
     */
    static fromJson<T>(json: any, destinationConstructor: Constructor<T>): T {
        return new destinationConstructor(json);
    }

    /**
     * Gets a json array object and returns an array of type T
     *
     * @param jsonArray data to be parsed
     * @param destinationConstructor of type T to create the new object
     *
     * @returns array of type Array<T> with the received data
     */
    static fromJsonArray<T>(
        jsonArray: any[],
        destinationConstructor: Constructor<T>,
    ): T[] {
        return jsonArray.map((json) =>
            SimpleGenericSerializer.fromJson<T>(json, destinationConstructor),
        );
    }
}
