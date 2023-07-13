import '../Faq/Faq.css';
import Accordion from 'react-bootstrap/Accordion';

function Faq() {


  return (
    <section className='container faq'>
      <div className='row'>
        <div className='col-lg-12'>
          <h1>FAQs</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12'>
          <p className='title-p'>Here are the highlight of the repeated questions that we keep on getting</p>
        </div>
      </div>
      <div className='container-faqs'>
        <div className='row '>
          <div className='col-lg-5 '>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='card-h3'>Head Line 3</Accordion.Header>
                <Accordion.Body className='card-p'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar pharetra lorem, vitae vulputate risus vestibulum at. Nullam semper ex est, nec tempus urna pretium vel.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className='card-h3'>Head Line 3</Accordion.Header>
                <Accordion.Body className='card-p'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar pharetra lorem, vitae vulputate risus vestibulum at. Nullam semper ex est, nec tempus urna pretium vel.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className='card-h3'>Head Line 3</Accordion.Header>
                <Accordion.Body className='card-p'>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar pharetra lorem, vitae vulputate risus vestibulum at. Nullam semper ex est, nec tempus urna pretium vel.</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <div className="col-lg-5 ">
            <Accordion className='accordion2' defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='card-h3 accordion2-btn'>Head Line 3</Accordion.Header>
                <Accordion.Body className='card-p '>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar pharetra lorem, vitae vulputate risus vestibulum at. Nullam semper ex est, nec tempus urna pretium vel.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className='card-h3 accordion2-btn'>Head Line 3</Accordion.Header>
                <Accordion.Body className='card-p'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar pharetra lorem, vitae vulputate risus vestibulum at. Nullam semper ex est, nec tempus urna pretium vel.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className='card-h3 accordion2-btn'>Head Line 3</Accordion.Header>
                <Accordion.Body className='card-p'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar pharetra lorem, vitae vulputate risus vestibulum at. Nullam semper ex est, nec tempus urna pretium vel.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}




export default Faq;