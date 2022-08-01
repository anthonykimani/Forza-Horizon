const HomeText = () => {
    return ( 
        <div className="relative flex flex-col justify-between h-96 text-center items-center z-20 text-white">
            <div className="flex flex-col text-5xl sm:text-8xl font-extrabold font-sans">
                <h1>Cars.</h1>
                <h1>Community.</h1>
                <h1>Creativity.</h1>
            </div>
            <div>
                <h2>Welcome to Forza </h2>
            </div>
            <div className="">
                <button className="bg-white rounded text-black py-1 px-2 mx-1">Get the Game</button>
                <button className="bg-transparent border border-solid rounded-sm text-white py-1 px-2 mx-1">My Forza</button>
            </div>
        </div>
     );
}
 
export default HomeText;