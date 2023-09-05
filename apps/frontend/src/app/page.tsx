import { use } from "react";

import { trpc } from "./trpc";

const HomePage: React.Page = () => {
  const { greeting } = use(trpc.hello.query({ name: "Zolboo" }));
  return <div>{greeting}</div>;
};
export default HomePage;
