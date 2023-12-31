import { Helmet } from "react-helmet";
import FirstChart from "../Components/Charts/FirstChart";
import SecondChart from "../Components/Charts/SecondChart";
import HomeHero from "../Components/HomeHero";
import LeafMap from "../Components/Leaflet/LeafMap";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <HomeHero />
            <FirstChart />
            <SecondChart />
            <LeafMap />
        </div>
    );
};

export default Home;