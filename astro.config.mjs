import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";

export default defineConfig({
	site: "https://o4bit.mywire.org/",
	integrations: [react(), tailwind(), sitemap(), robotsTxt(), icon()],
	vite: {
		build: {
			rollupOptions: {
				external: ['virtual:image-loader']
			}
		}
	}
});
