import AllRecipe from "../AllRecipe/AllRecipe";

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
      <div>
        <AllRecipe></AllRecipe>
      </div>
    </section>
  );
};

export default OurRecipes;
