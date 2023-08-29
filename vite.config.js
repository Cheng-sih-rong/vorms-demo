import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import unocss from "unocss/vite"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), unocss({
		shortcuts: [
			{ "s-btn": "py-2 px-4 border-rd-1" },
		]
	})],
})
