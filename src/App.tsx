import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ShowResultsProvider } from "./hooks/ShowResultsContext";
import { ResultsProvider } from "./hooks/ResultsContext";

function App() {
  return (
    <BrowserRouter>
      <ResultsProvider>
        <ShowResultsProvider>
          <Router />
        </ShowResultsProvider>
      </ResultsProvider>
    </BrowserRouter>
  );
}

export default App;
