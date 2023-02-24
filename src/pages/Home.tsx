import { useContext, useState } from "react";
import { Content } from "../components/Content/Content";
import { SearchResults } from "../components/Content/SearchResults";
import { Header } from "../components/Header/Header";
import { ShowResultsContext } from "../hooks/ShowResultsContext";

export function Home() {
  const {showResults, setShowResults} = useContext(ShowResultsContext);

  return (
    <main className="flex flex-col items-center min-w-[100vw] min-h-screen gap-10 pb-5 bg-gradient-to-bl from-zinc-100 to-zinc-300">
      <Header />
      {showResults && <SearchResults />}
      <Content />
    </main>
  );
}
