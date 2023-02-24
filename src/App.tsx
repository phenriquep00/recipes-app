import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ShowResultsProvider } from "./hooks/ShowResultsContext";

function App() {
  return (
    <BrowserRouter>
      <ShowResultsProvider>
        <Router />
      </ShowResultsProvider>
    </BrowserRouter>
  );
}

export default App;
