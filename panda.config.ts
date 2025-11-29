import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	preflight: true,
	include: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
	exclude: [],
	theme: {
		extend: {},
	},
	outdir: "styled-system",
	jsxFramework: "react"
});
