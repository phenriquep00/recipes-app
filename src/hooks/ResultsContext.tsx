import {createContext, PropsWithChildren, useEffect, useState} from 'react';

type TResultsProvider = PropsWithChildren<{}>;

export const resultsContext = createContext<any | null>(null);

export function ResultsProvider({children}: TResultsProvider) {
    const [results, setResults] = useState(null);

    useEffect(() => {setResults(results)}, [results]);

    return (
        <resultsContext.Provider value={{results, setResults}}>
            {children}
        </resultsContext.Provider>
    )
}