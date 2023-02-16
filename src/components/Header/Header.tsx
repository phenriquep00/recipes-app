import { Logo } from "../../assets/Logo";
import { Menu } from "./Menu";
import { SearchBar } from "./Seachbar";

export function Header() {
  return (
    <header className="flex flex-row items-center justify-around w-full mt-10 h-14">
      <Menu />
      <SearchBar />
      <Logo />
    </header>
  );
}
