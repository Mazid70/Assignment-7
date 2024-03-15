import { IoPerson } from "react-icons/io5";
const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <h1 className="font-bold text-4xl ">Recipe Calories</h1>
      <div className="flex justify-between gap-12 text-[#150B2BB3]">
        <a href="#">Home</a>
        <a href="#">Recipes</a>
        <a href="#">About</a>
        <a href="#">Search</a>
      </div>
      <div className="flex p-5 items-center gap-4">
        <div className="bg-[#150B2B0D] px-6 py-2 rounded-full">
          <input
            className="w-full h-full p-2 bg-transparent"
            type="text"
            placeholder="Search"
          />
        </div>
        <button className="h-12 w-12 bg-green-500 rounded-full flex justify-center items-center">
          <IoPerson></IoPerson>
        </button>
      </div>
    </header>
  );
};

export default Header;
