import Banner from "../Banner/Banner";
import Country from '../Country/Country';
import NewsletterSection from "../NewsLetter/NewsletterSection";
import Services from "../Services/Services";
import TouristSpot from "../TouristSpot/TouristSpot";



const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Country></Country>
            <TouristSpot></TouristSpot>
            <Services></Services>
            <NewsletterSection></NewsletterSection>
            
        </div>
    );
};

export default Home;