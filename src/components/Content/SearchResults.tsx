import { X } from "phosphor-react";
import { ShowResultsContext } from "../../hooks/ShowResultsContext";
import { useContext } from "react";
import { resultsContext } from "../../hooks/ResultsContext";
import { Recipe } from "../Recipe/Recipe";

export function SearchResults() {

  const {showResults, setShowResults} = useContext(ShowResultsContext);

  const {results, setResults} = useContext(resultsContext)

  return (
    <section className="w-[60%] flex flex-col items-center pt-5 min-h-[420px] bg-zinc-300 rounded-lg transition-all ease-in-out">
      <button className="flex self-end pr-6 text-gray-500" onClick={() => setShowResults(false)}>
        <X size={24}/>
      </button>
      <h1 className="text-gray-500 text-lg -mt-6 font-bold">Results for: RECIPE NAME</h1>
      {/* TODO: add the carousel here:  */}
      <div className="mt-8 pl-4 flex w-full h-full pt-4 gap-3 text-white overflow-x-scroll pb-6">
      {results !== null &&
          results.map((recipe: any, index: number) => (
            <div key={recipe.id} >
              <Recipe
                recipeId={recipe.id}
                title={recipe.title}
                image={recipe.image}
                prepTime={recipe.readyInMinutes}
              />
            </div>
          ))}
      </div>
    </section>
  );
}
