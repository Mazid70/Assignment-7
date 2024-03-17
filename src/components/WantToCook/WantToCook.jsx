import PropTypes from "prop-types";
import AddRecipe from "../AddRecipe/AddRecipe";
import Currentlycooking from "../Currentlycooking/Currentlycooking";
import { useState } from "react";

const WantToCook = ({ recipe, count, decrease, handleButtonClick }) => {
  const [reci, setrci] = useState([]);
  const [Ccount, setCcount] = useState(0);
  const [num, setNum] = useState(0);
  const [numTwo, setNumTwo] = useState(0);
  const addCurrent = (res, number, numtwo) => {
    const newReci = [...reci, res];
    setrci(newReci);
    setCcount(Ccount + 1);
    setNum(num + number);
    setNumTwo(numTwo + numtwo);
  };

  return (
    <div className="lg:w-[40%] border rounded-xl lg:p-10">
      <h1 className="font-semibold text-xl ">Want to cook:{count}</h1>
      <hr className="my-6 " />
      <table className="w-full table-auto">
        <thead>
          <tr className="h-10">
            <th colSpan={2}>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
        </thead>
        <br />
        <tbody>
          {recipe.map((res, id) => (
            <AddRecipe
              key={id}
              recipe={res}
              decrease={decrease}
              addCurrent={addCurrent}
              handleButtonClick={handleButtonClick}
              index={id}
            ></AddRecipe>
          ))}
        </tbody>
      </table>
      <h1 className="font-semibold text-xl mt-10">
        Currently cooking:{Ccount}
      </h1>
      <hr className="my-6 " />
      <table className="w-full ">
        <thead>
          <tr className="">
            <th colSpan={2}>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
        </thead>
        <br />
        <tbody>
          {reci.map((res, id) => (
            <Currentlycooking key={id} res={res} index={id}></Currentlycooking>
          ))}
        </tbody>
        <br />
        <tfoot>
          <tr>
            <td colSpan={2}></td>
            <td>
              Total Time = <br />
              {num} minutes
            </td>
            <td>
              Total Calories = <br />
              {numTwo} calories
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
WantToCook.propTypes = {
  recipe: PropTypes.array,
  count: PropTypes.number,
  decrease: PropTypes.func,
  handleButtonClick: PropTypes.func,
};
export default WantToCook;
