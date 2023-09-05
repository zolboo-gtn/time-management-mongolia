import { type ConfigFactory } from "@nestjs/config";

import { Schemas } from "./schema";

export const configuration: ConfigFactory = () => {
  return {
    app: {
      port: process.env.PORT,
    },
  };
};

export const validate = (config: Record<string, unknown>) => {
  const appEnv = Schemas["common"].shape.APP_ENV.safeParse(config.APP_ENV);
  if (!appEnv.success) {
    for (const error of appEnv.error.errors) {
      console.error(JSON.stringify(error));
    }
    // TODO: ???
    throw Error("INVALID_CONFIG");
  }

  const schema = Schemas["common"].merge(Schemas[appEnv.data]);

  const result = schema.safeParse(config);

  if (!result.success) {
    for (const error of result.error.errors) {
      console.error(JSON.stringify(error));
    }
    // TODO: ???
    throw Error("INVALID_CONFIG");
  }

  return result.data;
};
