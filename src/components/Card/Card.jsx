
import '../Card/Card.css';


function Card(props) {

    return (

        <div className="card card-white card-wight" >
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <img className='card-img' src={props.img} alt='servimg' />
                    </div>
                    <h3 className="card-title card-h3">{props.title}</h3>
                </div>
            </div>
            <p className="card-textv card-p">{props.text}</p>
        </div>

    )
}

export default Card;