import PropTypes from "prop-types";

const AddRecipe = ({ recipe, handleButtonClick, addCurrent, index }) => {
  console.log(recipe);
  const { recipe_id, recipe_name, preparing_time, calories } = recipe;
  return (
    <>
      <tr className="bg-[#28282808] text-[#282828B3]">
        <td className="text-black">{index + 1}</td>
        <td>{recipe_name}</td>
        <td>{preparing_time}minutes</td>
        <td>{calories}calories</td>
        <td>
          <button
            onClick={() =>
              handleButtonClick(
                recipe_id,
                addCurrent(recipe, preparing_time, calories)
              )
            }
            className="px-3 py-1 rounded-full text-black bg-green-500 text-lg font-semibold"
          >
            Preparing
          </button>
        </td>
      </tr>
    </>
  );
};

AddRecipe.propTypes = {
  recipe: PropTypes.object,
  decrease: PropTypes.func,
  addCurrent: PropTypes.func,
  handleButtonClick: PropTypes.func,
  index: PropTypes.number,
};
export default AddRecipe;
