import { cn } from "utils";

const MainLayout: React.Layout = ({ children }) => {
  return (
    <div className="flex h-[100dvh] w-[100dvw] flex-col overflow-auto">
      <div className="sticky top-0 h-16 w-full flex-none bg-red-200"></div>
      <div className="flex-auto">{children}</div>
      <div
        className={cn(
          "sticky bottom-0 h-16 w-full flex-none bg-blue-200",
          "md:hidden"
        )}
      ></div>
    </div>
  );
};
export default MainLayout;
