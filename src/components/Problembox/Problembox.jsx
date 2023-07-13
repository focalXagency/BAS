import '../Problembox/Problembox.css';
import title from '../images/title.svg';




function Problembox() {
    return (
        <section className='problem-box'>
            <h1>Company's problem:</h1>
            < img className='title-img' src={title} alt='latesr-img' />
            <p className='p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </section>

    )
}

export default Problembox;