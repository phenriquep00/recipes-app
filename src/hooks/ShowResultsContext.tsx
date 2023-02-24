import { createContext, PropsWithChildren, useState, useEffect } from "react";

type TShowResultsProvider = PropsWithChildren<{}>;

export const ShowResultsContext = createContext<any>(false);

export function ShowResultsProvider({ children }: TShowResultsProvider) {
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    setShowResults(showResults);
  }, [showResults]);

  return (
    <ShowResultsContext.Provider value={{ showResults, setShowResults }}>
      {children}
    </ShowResultsContext.Provider>
  );
}
