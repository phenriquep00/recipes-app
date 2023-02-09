import { LeftMenu } from "./LeftMenu";
import { RightMenu } from "./RightMenu";
import { SearchBar } from "./Seachbar";

export function Header() {
    return (
        <header className="flex flex-row items-center justify-evenly w-[90%] mt-12 h-14">
            <RightMenu />
            <SearchBar />
            <LeftMenu />
        </header>
    )
}