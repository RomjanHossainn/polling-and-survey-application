import Navbar from "../../ShareComponets/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Blog from "../../components/Blog/Blog";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Fqa from "../../components/Fqa/Fqa";
import MostVoted from "../../components/MostVoted/MostVoted";
import RecentCreatedSurvey from "../../components/RecentCreatedSurvey/RecentCreatedSurvey";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {


   

    return (
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <MostVoted></MostVoted>
        <RecentCreatedSurvey></RecentCreatedSurvey>
        <Blog></Blog>
        <Fqa></Fqa>
        <Testimonial></Testimonial>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
};

export default Home;