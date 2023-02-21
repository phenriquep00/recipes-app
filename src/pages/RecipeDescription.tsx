import { useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { useEffect, useState } from "react";

import sanitizeHtml from "sanitize-html";
import { fetchSingleRecipe } from "../utils/fetchSingleRecipe";
import { Loading } from "../components/Loading/Loading";
import { Ingredient } from "../components/Ingredients/Ingredient";

export function RecipeDescription() {
  const { id } = useParams<{ id: string }>();

  const [recipe, setRecipe] = useState<any | null>({
    vegetarian: false,
    vegan: false,
    glutenFree: true,
    dairyFree: true,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 29,
    gaps: "no",
    preparationMinutes: -1,
    cookingMinutes: -1,
    aggregateLikes: 61,
    healthScore: 2,
    creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    license: "CC BY 3.0",
    sourceName: "Foodista",
    pricePerServing: 153.49,
    extendedIngredients: [
      {
        id: 10110088,
        aisle: "Meat",
        image: "raw-pork-ribs.jpg",
        consistency: "SOLID",
        name: "slabs of pork ribs",
        nameClean: "pork ribs",
        original: "2 Large Slabs of Pork Ribs",
        originalName: "Large Slabs of Pork Ribs",
        amount: 2,
        unit: "",
        meta: [],
        measures: {
          us: {
            amount: 2,
            unitShort: "",
            unitLong: "",
          },
          metric: {
            amount: 2,
            unitShort: "",
            unitLong: "",
          },
        },
      },
      {
        id: 5006,
        aisle: "Meat",
        image: "whole-chicken.jpg",
        consistency: "SOLID",
        name: "broth",
        nameClean: "whole chicken",
        original:
          "¼ Cup Broth (Beef or Chicken-either works fine, you could even use water)",
        originalName:
          "Broth (Beef or Chicken-either works fine, you could even use water)",
        amount: 0.25,
        unit: "Cup",
        meta: [
          "fine",
          "(Beef or Chicken-either works , you could even use water)",
        ],
        measures: {
          us: {
            amount: 0.25,
            unitShort: "cups",
            unitLong: "cups",
          },
          metric: {
            amount: 0.25,
            unitShort: "cups",
            unitLong: "cups",
          },
        },
      },
      {
        id: 6150,
        aisle: "Condiments",
        image: "barbecue-sauce.jpg",
        consistency: "SOLID",
        name: "bbq sauce *i didn't need that much but it's what i had and didn't measure but it leaves extra",
        nameClean: "barbecue sauce",
        original:
          "40 oz. Bottle of your favorite BBQ Sauce *I didn't need that much but it's what I had and didn't measure but it leaves extra for dipping.",
        originalName:
          "your favorite BBQ Sauce *I didn't need that much but it's what I had and didn't measure but it leaves extra for dipping",
        amount: 40,
        unit: "oz",
        meta: ["for dipping.", "your favorite"],
        measures: {
          us: {
            amount: 40,
            unitShort: "oz",
            unitLong: "ounces",
          },
          metric: {
            amount: 1.134,
            unitShort: "kgs",
            unitLong: "kgs",
          },
        },
      },
      {
        id: 1022020,
        aisle: "Spices and Seasonings",
        image: "garlic-powder.png",
        consistency: "SOLID",
        name: "salt",
        nameClean: "garlic powder",
        original: "Salt, Pepper and Garlic Powder to taste",
        originalName: "Salt, Pepper and Garlic Powder to taste",
        amount: 4,
        unit: "servings",
        meta: ["to taste"],
        measures: {
          us: {
            amount: 4,
            unitShort: "servings",
            unitLong: "servings",
          },
          metric: {
            amount: 4,
            unitShort: "servings",
            unitLong: "servings",
          },
        },
      },
    ],
    id: 632075,
    title: "All Day Simple Slow-Cooker FALL OFF the BONE Ribs",
    readyInMinutes: 45,
    servings: 4,
    sourceUrl:
      "https://www.foodista.com/recipe/WKSRCLNF/all-day-simple-slow-cooker-fall-off-the-bone-ribs",
    image: "https://spoonacular.com/recipeImages/632075-556x370.jpg",
    imageType: "jpg",
    summary:
      'All Day Simple Slow-Cooker FALL OFF the BONE Ribs takes around <b>45 minutes</b> from beginning to end. This recipe makes 4 servings with <b>614 calories</b>, <b>10g of protein</b>, and <b>12g of fat</b> each. For <b>$1.53 per serving</b>, this recipe <b>covers 12%</b> of your daily requirements of vitamins and minerals. If you have salt, broth, bbq sauce *i didn\'t need that much but it\'s what i had and didn\'t measure but it leaves extra, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. <b>Autumn</b> will be even more special with this recipe. 61 person have tried and liked this recipe. It works well as a hor d\'oeuvre. It is a good option if you\'re following a <b>gluten free and dairy free</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 39%</b>. This score is rather bad. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/fall-off-the-bone-slow-cooker-ribs-603823">Fall-Off-The-Bone Slow Cooker Ribs</a>, <a href="https://spoonacular.com/recipes/slow-cooker-fall-off-the-bone-pork-ribs-944004">Slow Cooker Fall Off the Bone Pork Ribs</a>, and <a href="https://spoonacular.com/recipes/3-2-1-ribs-fall-off-the-bone-smoked-baby-back-ribs-1664243">3-2-1 Ribs: Fall Off the Bone Smoked Baby Back Ribs</a>.',
    cuisines: [],
    dishTypes: [
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre",
    ],
    diets: ["gluten free", "dairy free"],
    occasions: ["fall"],
    instructions:
      "Portion 2 slabs to allow them to fit in the slow-cooker easily.\nSeason each piece with salt, pepper and onion salt.\nCover bottom of Slow-cooker with BBQ sauce\nAdd broth. (I only do this so the BBQ sauce doesnt burn up and this step could possibly be skipped)\nPlace sectioned/portioned ribs into slow-cooker, brushing them with BBQ sauce as you set them in.\nLayer them in so they all fit.\nCook on low for 8-10 hours or until they fall off the bone.\nRemove from slow-cooker and transfer them to a foil lined baking sheet.\nBrush each portion with BBQ sauce\nBroil for 5 minutes or until the sauce starts to bubble and caramelize.\nRemove from broiler let cool slightly\nENJOY!!!!!",
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Portion 2 slabs to allow them to fit in the slow-cooker easily.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 2,
            step: "Season each piece with salt, pepper and onion salt.",
            ingredients: [
              {
                id: 1072047,
                name: "onion salt",
                localizedName: "onion salt",
                image: "garlic-salt.jpg",
              },
              {
                id: 1002030,
                name: "pepper",
                localizedName: "pepper",
                image: "pepper.jpg",
              },
              {
                id: 2047,
                name: "salt",
                localizedName: "salt",
                image: "salt.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 3,
            step: "Cover bottom of Slow-cooker with BBQ sauce",
            ingredients: [
              {
                id: 6150,
                name: "barbecue sauce",
                localizedName: "barbecue sauce",
                image: "barbecue-sauce.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 4,
            step: "Add broth. (I only do this so the BBQ sauce doesnt burn up and this step could possibly be skipped)",
            ingredients: [
              {
                id: 6150,
                name: "barbecue sauce",
                localizedName: "barbecue sauce",
                image: "barbecue-sauce.jpg",
              },
              {
                id: 1006615,
                name: "broth",
                localizedName: "broth",
                image: "chicken-broth.png",
              },
            ],
            equipment: [],
          },
          {
            number: 5,
            step: "Place sectioned/portioned ribs into slow-cooker, brushing them with BBQ sauce as you set them in.",
            ingredients: [
              {
                id: 6150,
                name: "barbecue sauce",
                localizedName: "barbecue sauce",
                image: "barbecue-sauce.jpg",
              },
              {
                id: 23236,
                name: "ribs",
                localizedName: "ribs",
                image: "ribs.png",
              },
            ],
            equipment: [],
          },
          {
            number: 6,
            step: "Layer them in so they all fit.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 7,
            step: "Cook on low for 8-10 hours or until they fall off the bone.",
            ingredients: [
              {
                id: 0,
                name: "bone",
                localizedName: "bone",
                image: "",
              },
            ],
            equipment: [],
            length: {
              number: 600,
              unit: "minutes",
            },
          },
          {
            number: 8,
            step: "Remove from slow-cooker and transfer them to a foil lined baking sheet.",
            ingredients: [],
            equipment: [
              {
                id: 404727,
                name: "baking sheet",
                localizedName: "baking sheet",
                image: "baking-sheet.jpg",
              },
              {
                id: 404765,
                name: "aluminum foil",
                localizedName: "aluminum foil",
                image: "aluminum-foil.png",
              },
            ],
          },
          {
            number: 9,
            step: "Brush each portion with BBQ sauce",
            ingredients: [
              {
                id: 6150,
                name: "barbecue sauce",
                localizedName: "barbecue sauce",
                image: "barbecue-sauce.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 10,
            step: "Broil for 5 minutes or until the sauce starts to bubble and caramelize.",
            ingredients: [
              {
                id: 0,
                name: "sauce",
                localizedName: "sauce",
                image: "",
              },
            ],
            equipment: [],
            length: {
              number: 5,
              unit: "minutes",
            },
          },
          {
            number: 11,
            step: "Remove from broiler let cool slightly",
            ingredients: [],
            equipment: [
              {
                id: 405914,
                name: "broiler",
                localizedName: "broiler",
                image: "oven.jpg",
              },
            ],
          },
          {
            number: 12,
            step: "ENJOY!!!!!",
            ingredients: [],
            equipment: [],
          },
        ],
      },
    ],
    originalId: null,
    spoonacularSourceUrl:
      "https://spoonacular.com/all-day-simple-slow-cooker-fall-off-the-bone-ribs-632075",
  });
  const [ingredients, setIngredients] = useState<any | null>(null);

  /* useEffect(() => {
    async function getRecipe() {
      try {
        const data = await fetchSingleRecipe(parseInt(id!));
        setRecipe(data);
      } catch (error) {
        console.error(error);
      }
    }
    getRecipe();
  }, [id]); */

  /* check if the recipe object exists, then extract the ingredients from it */
  useEffect(() => {
    if (recipe) {
      setIngredients(recipe.extendedIngredients);
    }
  }, [recipe]);

  if (!recipe) {
    return <Loading />;
  }
  return (
    <main className="flex flex-col items-center min-w-[100vw] min-h-screen gap-10 pb-5 bg-gradient-to-bl from-zinc-100 to-zinc-300">
      <Header />
      <h1 className="text-black font-bold text-xl">{recipe.title}</h1>
      {/* General Description */}
      <div className="flex gap-4 w-[85%] items-center justify-center">
        <img
          className="rounded-2xl shadow-2xl drop-shadow"
          src={recipe.image}
          alt={recipe.title}
        />
        <div className="bg-zinc-300 p-4 rounded-xl text-gray-700 font-medium text-lg">
          <p>
            {sanitizeHtml(recipe.summary, {
              allowedTags: [],
              allowedAttributes: {},
            })}
          </p>
        </div>
      </div>
      {/* --------------------------------------------------------------------------- */}
      {/* Ingredients */}
      <div className="bg-zinc-300 w-[85%] p-4 flex flex-col items-center gap-3 rounded-xl">
        <h2 className="font-bold text-xl text-zinc-700 mb-3">Ingredients</h2>
        {ingredients !== null &&
          ingredients.map((ingredient: any) => {
            return (
              <Ingredient
                key={ingredient.id}
                name={ingredient.nameClean}
                amount={ingredient.amount}
                unit={ingredient.unit}
              />
            );
          })}
      </div>

      {/* --------------------------------------------------------------------------- */}
      {/* Preparation */}
      {/* --------------------------------------------------------------------------- */}
      {/* Suggested recipes */}
      {/* --------------------------------------------------------------------------- */}
    </main>
  );
}
