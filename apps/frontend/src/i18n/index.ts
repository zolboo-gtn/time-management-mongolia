export const config = {
  default: "ja",
  locales: ["ja"],
} as const;
export type Locale = (typeof config)["locales"][number];
