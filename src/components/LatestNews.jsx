const LatestNews = () => {
    return ( 
        <div className="relative text-white sm:px-10 mt-24">
            <div className="flex flex-col justify-between items-center sm:flex-row">
                <h1 className="text-4xl font-bold">Latest News</h1>
                <nav className="mt-3">
                    <ul className="flex">
                        <li className="px-1.5 text-xs sm:text-xl">All</li>
                        <li className="px-1.5 text-xs sm:text-xl">Community</li>
                        <li className="px-1.5 text-xs sm:text-xl">Horizon</li>
                        <li className="px-1.5 text-xs sm:text-xl">Motorsport</li>
                        <li className="px-1.5 text-xs sm:text-xl">Gameplay</li>
                    </ul>
                </nav>
            </div>
        </div>
     );
}
 
export default LatestNews;