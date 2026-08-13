import type { Config } from "tailwindcss";

const config: Config = { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { primary: "#2563EB", background: "#F8FAFC", surface: "#FFFFFF", success: "#10B981", danger: "#DC2626" } } }, plugins: [] };
export default config;
