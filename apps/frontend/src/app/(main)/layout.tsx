import { cn } from "utils";

const MainLayout: React.Layout = ({ children }) => {
  return (
    <div className={cn("flex h-[100dvh] w-[100dvw] flex-col overflow-auto")}>
      <div
        className={cn(
          "sticky top-0 h-16 w-full flex-none bg-red-200",
          "dark:bg-red-400"
        )}
      ></div>
      <div className="flex-auto">{children}</div>
      <div
        className={cn(
          "sticky bottom-0 h-16 w-full flex-none bg-blue-200",
          "dark:bg-blue-400",
          "md:hidden"
        )}
      ></div>
    </div>
  );
};
export default MainLayout;
