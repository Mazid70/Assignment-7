const WantToCook = () => {
  return (
    <div className="w-[40%] border rounded-xl p-10">
      <h1 className="font-semibold text-xl ">Want to cook:</h1>
      <hr className="my-6 " />
      <div className="flex">
        <p className="ml-10 text-[#878787]">Name</p>
        <p className=" ml-32 text-[#878787]">Time</p>
        <p className="ml-16 text-[#878787]">Calories</p>
      </div>
      <div className="flex justify-between items-center gap-10 bg-[#28282808] -ml-10 -mr-10 p-2 mt-5">
        <p className="ml-5">1</p>
        <p className="text-[#878787]">A quick and delicious chicken stir fry with vegetables.</p>
        <p className="text-[#878787]">25minutes</p>
        <p className="text-[#878787]">250caloriess</p>
        <button className="px-5 py-3 rounded-full text-black bg-green-500 text-base font-medium">Preparing</button>
      </div>
    </div>
  );
};

export default WantToCook;
