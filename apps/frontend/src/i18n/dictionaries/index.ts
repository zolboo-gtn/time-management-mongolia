import "server-only";

import { config, type Locale } from "@/i18n";

const dictionaries = {
  ja: () => import("./ja.json").then((module) => module.default),
};

export const getDictionary = (locale?: Locale | null) => {
  if (!locale) {
    return dictionaries[config.default]();
  }

  return dictionaries[locale]();
};
export type Translations = Awaited<ReturnType<typeof getDictionary>>;
