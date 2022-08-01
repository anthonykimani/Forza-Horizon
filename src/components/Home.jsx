import Navbar from "./Navbar";

const Home = () => {
    return ( 
        <div className="h-screen w-full">
            <Navbar />
            <video autoPlay="autoplay" loop="loop" muted="muted" playsInline className="absolute top-0 left-0 z-0 h-full w-full object-cover object-center" >
                <source src="https://forza.azureedge.net/strapi-uploads/assets/F_Mnet_Splash_Video_5_Mbps_1_Frame_Short_050654d1eb.mp4" />
            </video>
        </div>
     );
}
 
export default Home;