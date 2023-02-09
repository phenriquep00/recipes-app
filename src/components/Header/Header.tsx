import { RightMenu } from "./RightMenu";
import { SearchBar } from "./Seachbar";

export function Header() {
  return (
    <header className="flex flex-row items-center justify-center w-full mt-10 h-14">
      <RightMenu />
      <SearchBar />
    </header>
  );
}
