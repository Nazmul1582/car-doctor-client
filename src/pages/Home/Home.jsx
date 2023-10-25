import Services from "../Services/Services";
import About from "./About/About";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <Services />
        </>
    );
};

export default Home;