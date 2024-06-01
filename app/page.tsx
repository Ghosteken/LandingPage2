import Image from "next/image";
import Navbar from "./components/nav/Navbar";
import FindingRightFit from "./components/FindingRightFit";
import MarketPlace from "./components/MarketPlace";
import ExploreMore from "./components/ExploreMore";
import HowItWorked from "./components/HowItWorked";
import GoodHands from "./components/GoodHands";
import YourJourney from "./components/YourJourney";
import Slider from "./components/Slider";
import Questions from "./components/Questions";
import NeedAJob from "./components/NeedAJob";
import SlantedBlackBG from "./components/SlantedBlackBG";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="max-w-[1440px] w-full min-h-screen px4 lg:px-0 pt-[65px] bg-white flex flex-col relative">
      <FindingRightFit />
      <MarketPlace />
      <ExploreMore />
      <HowItWorked />
      <GoodHands />
      <YourJourney />
      <Slider />
      <Questions />
      <div className="bg-[#f3f3f3] -mt-10 h-10 w-full -skew-y-3"></div>
      <div className="bg-[#0C0C0C] h-10 w-full -skew-y-3"></div>
      <NeedAJob />
      <div className="bg-[#0C0C0C] h-32 w-full -mt-16 -skew-y-3"></div>
      <Footer />
    </main>
  );
}
