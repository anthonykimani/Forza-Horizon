import HomeText from "./HomeText";
import LatestNews from "./LatestNews";

const Background = () => {
  return (
    <>
      <video
        autoPlay="autoplay"
        loop="loop"
        muted="muted"
        playsInline
        className="absolute top-0 left-0 z-0 h-[55rem] w-full object-cover object-center"
      >
        <source
          src={
            process.env.PUBLIC_URL +
            "/F_Mnet_Splash_Video_5_Mbps_1_Frame_Short_050654d1eb.mp4"
          }
        />
      </video>
      <HomeText />
      <LatestNews />
    </>
  );
};

export default Background;
