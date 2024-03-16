import { useState } from "react";
import AllRecipe from "../AllRecipe/AllRecipe";
import WantToCook from "../WantToCook/WantToCook";

const OurRecipes = () => {
  const [count, setCount] = useState(0);
  const [recipe, setRecipe] = useState([]);
  const addRecipe = (res) => {
    const newRecipe = [...recipe, res];
    setRecipe(newRecipe);
    const newCount = count + 1;
    setCount(newCount);
  };
  const decrease = () => {
    const des = count - 1;
    setCount(des);
  };
  return (
    <section className="text-center mt-10">
      <div>
        <h1 className="font-semibold text-4xl">Our Recipes</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.
        </p>
      </div>
      <div className="flex gap-20 mt-10">
        <AllRecipe addRecipe={addRecipe}></AllRecipe>
        <WantToCook
          recipe={recipe}
          count={count}
          decrease={decrease}
          addRecipe={addRecipe}
        ></WantToCook>
      </div>
    </section>
  );
};

export default OurRecipes;
