import { MagnifyingGlass } from "phosphor-react";

export function SearchBar() {
  return (
    <div className="flex justify-between h-12 items-center gap-2 bg-zinc-400 rounded-lg w-1/2">
      <input
        type="search"
        name="search"
        id="search"
        className="bg-transparent rounded-lg w-[90%] text-gray-100 h-full pl-8 placeholder:text-gray-200"
        aria-label="search bar"
        placeholder="Search for recipes or ingredients..."
      />
      <button className="flex justify-center flex-1 h-full items-center rounded-lg">
        <MagnifyingGlass size={32} color="#f3f4f6" />
      </button>
    </div>
  );
}
