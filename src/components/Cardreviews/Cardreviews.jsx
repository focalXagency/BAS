import titleblack from '../images/title-black.png';
import samsung from '../images/samsung.png';
import '../Cardreviews/Cardriviews.css';

function Cardreviews() {
  return (
    <section className='cardreviews'>
      <div>
        <img className='profile-img' src={titleblack} alt="profile-img" />
        <h1>Alaa Darwish</h1>
        <p className='services'>Founder of Focal X agency </p>
      </div>
      <p className='p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\</p>
      <div className='name'>
        <img className='profile2-img' src={samsung} alt="profile-img" />

      </div>

    </section>

  )
}


export default Cardreviews;