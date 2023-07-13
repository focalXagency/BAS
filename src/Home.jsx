import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Whatwedo from './components/Whatwedo/Whatwedo';
import Whoweare from './components/Whoweare/Whoweare';
import Latestprojects from './components/Latestprojects/Latestprojects';
import Reviews from './components/Reviews/Reviwes';
import Faq from './components/Faq/Faq';
import Ourcustomers from './components/Ourcustomers/Ourcustomers';
/* import TeamCard from './components/OurTeam/teamCard'; */
import Footer from './components/Footer/Footer';
// import ContactUs from './components/ContactUs';
import OurTeam from './components/OurTeam/OurTeam';
import ContactUs from './components/ContactUs/ContactUs';

function Home() { 
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Whatwedo />
      <Whoweare/>
      <Latestprojects/>
      <Reviews />
      <Faq />
      <Ourcustomers title="Partners" />
      <OurTeam />
      <ContactUs />
      <Footer />
    </div>
  )
}



export default Home;