import { Menu } from "./Menu";
import { SearchBar } from "./Seachbar";

export function Header() {
  return (
    <header className="flex flex-row items-center justify-center w-full mt-10 h-14">
      <Menu />
      <SearchBar />
    </header>
  );
}
