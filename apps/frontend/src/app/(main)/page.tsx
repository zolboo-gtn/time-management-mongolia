import { use } from "react";
import { ThemeToggler } from "ui";

import { GeoLocation } from "../geo_location";
import { trpc } from "../trpc";

const HomePage: React.Page = () => {
  const { greeting } = use(trpc.hello.query({ name: "Zolboo" }));

  return (
    <div>
      {greeting}
      <GeoLocation />
      <ThemeToggler />
    </div>
  );
};
export default HomePage;
