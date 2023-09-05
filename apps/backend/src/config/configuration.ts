import { Schemas } from "./schema";

export const configuration = () => {
  return {
    app: {
      port: process.env.PORT,
    },
  };
};

export const validate = (env: Record<string, any>) => {
  const appEnv = Schemas["common"].shape.APP_ENV.safeParse(env.APP_ENV);

  if (!appEnv.success) {
    return appEnv.error;
  }

  const schema = Schemas["common"].merge(Schemas[appEnv.data]);

  const result = schema.safeParse(env);

  if (!result.success) {
    for (const error of result.error.errors) {
      console.error(JSON.stringify(error));
    }
    // TODO: ???
    throw Error("INVALID_CONFIG");
  }

  return result.data;
};
