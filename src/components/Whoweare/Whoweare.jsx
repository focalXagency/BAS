import Card from "../Card/Card";
import '../Whoweare/Whoweare.css';

function Sectionwhite() {
    return (
        <section className=" container container-white" id="Whoweare">
            <div className='row'>
                <div className='col-lg-12'>
                    <h1>Who we are</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12'>
                    <p className="p-white">Our company offers a wide range of services including strategic consulting, public relations management, data analysis, and case studies.  </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <Card
                        title="01"
                        text="We are a leading company in providing comprehensive business solutions, aiming to help companies achieve sustainable success and excellence in the business market.
              " />
                </div>
                <div className="col-lg-12">
                    <Card
                        title="02"
                        text="We differentiate ourselves with a team of experienced consultants who combine deep knowledge of business domains with practical expertise in delivering innovative solutions. " />
                </div>
                <div className="col-lg-12">
                    <Card
                        title="03"
                        text="We consider ourselves strategic partners to our clients, working closely with them to understand their unique needs and provide tailored solutions." />
                </div>
            </div>
        </section>

    )
}


export default Sectionwhite;