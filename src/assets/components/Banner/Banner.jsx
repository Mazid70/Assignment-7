const Banner = () => {
  return (
    <section
      className="bg-[url(https://res.cloudinary.com/dfqs868ch/image/upload/v1710514480/assignment7/zim5yry1f7sy6mg4tke6.png)] 
    bg-no-repeat bg-cover bg-center p-48 text-center text-white space-y-10 rounded-2xl"
    >
      <h1 className="font-bold text-5xl">
        Discover an exceptional cooking <br /> class tailored for you!
      </h1>
      <p>
        Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
        Database and solve 500+ coding <br /> problems to become an exceptionally well
        world-class Programmer.
      </p>
      <div className="flex gap-6 justify-center">
        <button className="px-5 py-3 rounded-full text-black bg-green-500 text-xl font-semibold">Explore Now</button>
        <button className="px-5 py-3 rounded-full text-white  text-xl font-semibold border-2">Our Feedback</button>
      </div>
    </section>
  );
};

export default Banner;