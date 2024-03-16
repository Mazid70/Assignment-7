import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const AllRecipe = ({ addRecipe }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className=" grid grid-cols-2 gap-10 flex-1">
      {recipes.map((res, id) => (
        <Recipe recipe={res} key={id} addRecipe={addRecipe}></Recipe>
      ))}
    </div>
  );
};
AllRecipe.propTypes = {
  addRecipe: PropTypes.func,
};
export default AllRecipe;
