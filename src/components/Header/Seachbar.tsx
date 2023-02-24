import { Faders, MagnifyingGlass } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { ShowResultsContext } from "../../hooks/ShowResultsContext";


export function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any | null>(null);

  const {showResults, setShowResults} = useContext(ShowResultsContext);

  async function searchRecipes(query: string): Promise<any[]> {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_SPOONACULAR_REACT_API_KEY
      }&query=${query}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: any = await response.json();
    return data.results;
  }

  const handleSearch = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const apiResult = await searchRecipes(query);
    setResults(apiResult);
    setShowResults(true);
  };

  useEffect(() => {
    console.log(results);
  }, [results]);

  return (
    <form
      onSubmit={handleSearch}
      className="flex justify-between h-12 items-center gap-2 bg-zinc-500 rounded-lg w-1/2 shadow-2xl drop-shadow-xl"
    >
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        name="search"
        id="search"
        className="bg-transparent rounded-lg w-[90%] text-gray-100 h-full pl-8 placeholder:text-gray-200"
        aria-label="search bar"
        placeholder="Search for recipes..."
      />
      <button
        type="submit"
        className="flex justify-center flex-1 h-full items-center rounded-lg"
      >
        <MagnifyingGlass size={32} color="#f3f4f6" />
      </button>
      {/* <a
        href="/"
        target="_blank"
        className="flex justify-center flex-1 h-full items-center mr-4 rounded-lg"
      >
        <Faders size={32} color="#f3f4f6" />
      </a> */}
    </form>
  );
}
