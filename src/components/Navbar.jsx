const Navbar = () => {
    return ( 
        <div className="flex items-center justify-between relative z-10 h-26 bg-gradient-to-b from-black to-transparent text-white">
            <div>
                <img src={process.env.PUBLIC_URL + '/forza-removebg-preview.png' } alt="" className="h-24" />
            </div>
            <div className="hidden sm:block">
                <nav>
                    <ul className="flex text-white text-base">
                        <li className="px-2">News</li>
                        <li className="px-2">Community</li>
                        <li className="px-2">Horizon</li>
                        <li className="px-2">Motorspot</li>
                        <li className="px-2">Forums</li>
                        <li className="px-2">Support</li>
                    </ul>
                </nav>
            </div>
            <div className="hidden md:flex">
                <button className="bg-white rounded text-black py-1 px-2 mx-1">Get the Game</button>
                <button className="bg-transparent border border-solid rounded-sm text-white py-1 px-2 mx-1">My Forza</button>
            </div>
            <div className="p-4 sm:hidden">
                <i className='bx bx-menu bx-md'></i>
            </div>
        </div>
     );
}
 
export default Navbar;