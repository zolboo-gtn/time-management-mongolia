import { use } from "react";

import { GeoLocation } from "../geo_location";
import { trpc } from "../trpc";

const HomePage: React.Page = () => {
  const { greeting } = use(trpc.hello.query({ name: "Zolboo" }));

  return (
    <div className="h-[2000px] bg-gradient-to-b from-cyan-500 to-blue-500">
      {greeting}
      <GeoLocation />
    </div>
  );
};
export default HomePage;
