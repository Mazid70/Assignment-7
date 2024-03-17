import { IoPerson } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <h1 className="font-bold text-2xl sm:text-2xl lg:text-4xl ">
        FeastFusion
      </h1>
      <div className="hidden sm:hidden lg:flex justify-between gap-12 text-[#150B2BB3]">
        <a href="#">Home</a>
        <a href="#">Recipes</a>
        <a href="#">About</a>
        <a href="#">Search</a>
      </div>
      <div className="flex p-5 items-center gap-4">
        <div className="bg-[#150B2B0D] px-2 sm:px-2 lg:px-6 lg:py-2 rounded-full flex items-center">
          <IoIosSearch className="text-[#150B2BB3] text-2xl " />
          <input
            className="w-full h-full p-2 bg-transparent"
            type="text"
            placeholder="Search"
          />
        </div>
        <button className="h-8 w-8 lg:h-12 lg:w-12 bg-green-500 rounded-full flex justify-center items-center">
          <IoPerson></IoPerson>
        </button>
      </div>
    </header>
  );
};

export default Header;
