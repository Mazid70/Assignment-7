import PropTypes from "prop-types";
const Currentlycooking = ({ res, index }) => {
  const { recipe_name, preparing_time, calories } = res;

  return (
    <tr className="bg-[#28282808] text-[#282828B3]">
      <td className="text-black">{index + 1}</td>
      <td>{recipe_name}</td>
      <td>{preparing_time}minutes</td>
      <td>{calories}calories</td>
    </tr>
  );
};
Currentlycooking.propTypes = {
  res: PropTypes.array,
  index: PropTypes.number,
};
export default Currentlycooking;
