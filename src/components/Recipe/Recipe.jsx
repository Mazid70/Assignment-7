import { CiClock2 } from "react-icons/ci";
import { PiFireSimple } from "react-icons/pi";
import PropTypes from "prop-types";
const Recipe = ({ recipe }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div className=" border text-left flex flex-col justify-center items-center shadow-xl p-10 gap-4 rounded-xl">
      <div>
        <img className="h-[200px] w-[330px] rounded-xl" src={recipe_image} alt="" />
      </div>
      <div className="space-y-4">
        <h1 className=" text-xl font-semibold">{recipe_name}</h1>
        <p className=" font-normal text-base text-[#878787]">
          {short_description}
        </p>
        <hr  className="my-10"/>
        <h1 className="text-lg font-semibold">
          Ingredients:{ingredients.length}
        </h1>
        <ul className="list-disc font-normal text-base text-[#878787]">
          {ingredients.map((ind, id) => (
            <li key={id}>{ind}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between w-full">
        <p className=" font-normal text-base text-[#878787] flex items-center gap-2">
          <CiClock2></CiClock2>
          {preparing_time}minutes
        </p>
        <p className=" font-normal text-base text-[#878787] flex items-center gap-2">
          <PiFireSimple></PiFireSimple>
          {calories}calories
        </p>
      </div>
      <button className="px-5 py-3 rounded-full text-black bg-green-500 text-xl font-semibold">
        Want to Cook
      </button>
    </div>
  );
};
Recipe.propTypes = {
  recipe: PropTypes.object,
};
export default Recipe;
