import AllRecipe from "../AllRecipe/AllRecipe";
import WantToCook from "../WantToCook/WantToCook";

const OurRecipes = () => {
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
        <AllRecipe></AllRecipe>
        <WantToCook></WantToCook>
      </div>
    </section>
  );
};

export default OurRecipes;
