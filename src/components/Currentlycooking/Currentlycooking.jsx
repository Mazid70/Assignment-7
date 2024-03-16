import PropTypes from "prop-types";
const Currentlycooking = ({ res }) => {
  const { recipe_id, recipe_name, preparing_time, calories } = res;

  return (
    <tr className="bg-[#28282808] text-[#282828B3]">
      <td className="text-black">{recipe_id}</td>
      <td>{recipe_name}</td>
      <td>{preparing_time}minutes</td>
      <td>{calories}calories</td>
    </tr>
  );
};
Currentlycooking.propTypes = {
  res: PropTypes.array,
};
export default Currentlycooking;
