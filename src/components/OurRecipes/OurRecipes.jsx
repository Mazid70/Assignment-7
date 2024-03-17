import { useState } from "react";
import AllRecipe from "../AllRecipe/AllRecipe";
import WantToCook from "../WantToCook/WantToCook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OurRecipes = () => {
  const [count, setCount] = useState(0);
  const [recipe, setRecipe] = useState([]);
  const addRecipe = (res) => {
    const newCount = count + 1;
    const isExists = recipe.find((item) => item.recipe_id == res.recipe_id);
    if (!isExists) {
      setRecipe([...recipe, res]);
      setCount(newCount);
    } else {
      toast.warn("Already Exist", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  const handleButtonClick = (id) => {
    const newCart = recipe.filter((item) => item.recipe_id != id);
    setRecipe(newCart);
    decrease();
  };
  const decrease = () => {
    const des = count - 1;
    setCount(des);
  };

  return (
    <section className="text-center mt-10">
      <div>
        <h1 className="font-semibold text-4xl">Our Recipes</h1>
        <p className="mt-5 text-[#150B2B99]">
          Welcome to Our Recipes. Discover a diverse selection of culinary
          delights, ranging from comforting classics <br /> to innovative
          creations. Let us inspire your next culinary adventure!
        </p>
      </div>
      <ToastContainer />
      <div className="flex flex-col sm:flex-col lg:flex-row gap-20 mt-10">
        <AllRecipe addRecipe={addRecipe}></AllRecipe>
        <WantToCook
          recipe={recipe}
          count={count}
          decrease={decrease}
          addRecipe={addRecipe}
          handleButtonClick={handleButtonClick}
        ></WantToCook>
      </div>
    </section>
  );
};
export default OurRecipes;
