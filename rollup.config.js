import ts from "rollup-plugin-ts";
import pkg from "./package.json";

export default [
    {
        input: "src/index.ts",
        output: {
            name: "pa-prefab",
            file: pkg.main,
            format: "umd"
        },
        plugins: [
            ts()
        ]
    }
];