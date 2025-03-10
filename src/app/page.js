
import Banner from "./components/HomePage/Banner/Banner";
import Package from "./components/HomePage/Package/Package";
import NetworkSolutions from "./components/NetworkSolutions/NetworkSolutions ";
import OfferSection from "./components/OfferSection/OfferSection";
import Global from "./components/Global/Global";

export default function Home() {
  return (
    <div className="">
      <div>
        <Banner></Banner>
      </div>
      <div>
        <Global></Global>
      </div>
      <div className="bg-gray-100">
        <NetworkSolutions></NetworkSolutions>
      </div>
      <div>
        {/* <LottiFile></LottiFile> */}
      </div>
      <div>
        <Package></Package>
      </div>
      <div>
        <OfferSection></OfferSection>
      </div>
    </div>
  );
}
