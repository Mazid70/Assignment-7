import PropTypes from "prop-types";
import { useState } from "react";

const AddRecipe = ({ recipe, decrease, addCurrent }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleButtonClick = () => {
    setIsVisible(false);
    decrease();
    addCurrent(recipe, preparing_time, calories);
  };
  console.log(recipe);
  const { recipe_id, recipe_name, preparing_time, calories } = recipe;
  return (
    <>
      {isVisible && (
        <tr className="bg-[#28282808] text-[#282828B3]">
          <td className="text-black">{recipe_id}</td>
          <td>{recipe_name}</td>
          <td>{preparing_time}minutes</td>
          <td>{calories}calories</td>
          <td>
            <button
              onClick={handleButtonClick}
              className="px-3 py-1 rounded-full text-black bg-green-500 text-lg font-semibold"
            >
              Preparing
            </button>
          </td>
        </tr>
      )}
    </>
  );
};

AddRecipe.propTypes = {
  recipe: PropTypes.object,
  decrease: PropTypes.func,
  addCurrent: PropTypes.func,
};
export default AddRecipe;
