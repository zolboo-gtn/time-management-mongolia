import type { Config } from "tailwindcss";
import sharedConfig from "tailwind-config/tailwind.config";

const config: Omit<Config, "contents"> = {
  presets: [sharedConfig],
};

export default config;
