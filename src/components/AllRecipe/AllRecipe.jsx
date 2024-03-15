import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const AllRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  console.log(recipes);
  return (
    <div className=" grid grid-cols-2 gap-10 flex-1">
      {recipes.map((res,id) => (
        <Recipe recipe={res} key={id}></Recipe>
      ))}
    </div>
  );
};

export default AllRecipe;
