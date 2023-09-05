import { FC, PropsWithChildren, ReactNode } from "react";

import { type Locale } from "@/i18n";
import { type Translations as _Translations } from "@/i18n/dictionaries";

declare module "react" {
  export declare type FCC<P = {}> = FC<PropsWithChildren<P>>;
  export declare type Page<P = {}, SP = {}> = FC<RouterParams<P, SP>>;
  export declare type Layout<P = {}> = FCC<RouterParams<P>>;

  export declare type TranslationKeys = keyof _Translations;
  export declare type Translation<T extends TranslationKeys> = _Translations[T];
  export declare type Translations<T extends keyof _Translations> = {
    translations: { [P in T]: _Translations[P] };
  };
}

declare type RouterParams<P, SP> = {
  params: P & {
    lang: Locale;
  };
  searchParams: SP;
};
