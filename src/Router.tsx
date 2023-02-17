import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { RecipeDescription } from "./pages/RecipeDescription";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:recipeTitle" element={<RecipeDescription />}/>
    </Routes>
  );
}
