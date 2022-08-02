const HomeText = () => {
  return (
    <div className="relative flex flex-col justify-between h-[37rem] text-center items-center z-20 text-white mt-10">
      <div className="flex flex-col text-5xl sm:text-8xl font-extrabold font-sans">
        <h1>Cars.</h1>
        <h1>Community.</h1>
        <h1>Creativity.</h1>
      </div>
      <div>
        <h2>
          Welcome to Forza.net, your home for news and community in the world of
          Forza. Explore Horizon
        </h2>
      </div>
      <div className="flex flex-col justify-between sm:flex-row">
        <button className="bg-pink-500 rounded text-white py-3 px-6 mb-3 mx-1 sm:mb-0">
          Explore Horizon
        </button>
        <button className="bg-yellow-500 rounded-sm text-black py-3 px-6 mx-1">
          Explore Motorsport
        </button>
      </div>
    </div>
  );
};

export default HomeText;
