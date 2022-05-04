import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

export default [
    {
        input: "src/index.ts",
        output: {
            dir: "build",
			format: "cjs"
        },
        plugins: [
            typescript()
        ]
    }
];