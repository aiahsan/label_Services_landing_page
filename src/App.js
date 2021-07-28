import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/navbar';
import { Accordion, Card, Button } from 'react-bootstrap';
import { FaPlus, FaMinus, FaTwitter } from 'react-icons/fa';
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import Heroimg from './componentes/heroimg';

function App() {
  return (
    <>
      <Navbar />

      <section className='banner'>
        <Element name='home'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='banner-inner'>
                  <h1>
                    Shipping Made <br></br> Easier, Faster &amp;{' '}
                    <span className='blue-text'> Cheaper</span>
                  </h1>
                  <div className='d-flex mt-md-5 mt-4 align-items-center justify-content-center'>
                    <a href='#_' className='nav-btn mr-4 ml-0 site-btn'>
                      Ship Now!
                    </a>
                    <a href='#_' className='nav-btn ml-0 border-btn'>
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12 px-0 d-flex justify-content-center'>
                <Heroimg />
              </div>
            </div>
          </div>
        </Element>
        <Element name='Features'>
          <div className='container pb-5'>
            <div className='row'>
              <div className='col-12 text-center'>
                <h2>Features</h2>
                <p className='light-text'>
                  What does lables service offer to you?
                </p>
              </div>
              <div className='col-lg-5 mx-auto mt-5'>
                <div className='features-card'>
                  <img
                    src='/images/cloud-bg.png'
                    alt=''
                    className='img-fluid cloud-1'
                  />
                  <img
                    src='/images/cloud-sm.png'
                    alt=''
                    className='img-fluid cloud-2'
                  />
                  <img
                    src='/images/cloud-sm.png'
                    alt=''
                    className='img-fluid cloud-3'
                  />
                  <h3 className='mt-3'>Create &amp; Order</h3>
                  <p>
                    Lorem Ipusum is dummy text to fill pages in order to fill
                    pages lorem ipsum is generated is simply dummy text of the
                    printing and typesetting industry simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </div>
              </div>
              <div className='col-lg-5 mx-auto offset-lg-1 mt-5'>
                <div className='features-card'>
                  <img
                    src='/images/cloud-bg.png'
                    alt=''
                    className='img-fluid cloud-1'
                  />
                  <img
                    src='/images/cloud-sm.png'
                    alt=''
                    className='img-fluid cloud-2'
                  />
                  <img
                    src='/images/cloud-sm.png'
                    alt=''
                    className='img-fluid cloud-3'
                  />
                  <h3 className='mt-3'>Easy Payment</h3>
                  <p>
                    Lorem Ipusum is dummy text to fill pages in order to fill
                    pages lorem ipsum is generated is simply dummy text of the
                    printing and typesetting industry simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </div>
              </div>
              <div className='col-lg-5 mx-auto mt-5'>
                <div className='features-card'>
                  <img
                    src='/images/cloud-bg.png'
                    alt=''
                    className='img-fluid cloud-1'
                  />
                  <img
                    src='/images/cloud-sm.png'
                    alt=''
                    className='img-fluid cloud-2'
                  />
                  <img
                    src='/images/cloud-sm.png'
                    alt=''
                    className='img-fluid cloud-3'
                  />
                  <h3 className='mt-3'>Friendly APIs</h3>
                  <p>
                    Lorem Ipusum is dummy text to fill pages in order to fill
                    pages lorem ipsum is generated is simply dummy text of the
                    printing and typesetting industry simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </div>
              </div>
              <div className='col-lg-5 mx-auto offset-lg-1 mt-5'>
                <div className='features-card'>
                  <img
                    src='/images/cloud-bg.png'
                    alt=''
                    className='img-fluid cloud-1'
                  />
                  <img
                    src='/images/cloud-sm.png'
                    alt=''
                    className='img-fluid cloud-2'
                  />
                  <img
                    src='/images/cloud-sm.png'
                    alt=''
                    className='img-fluid cloud-3'
                  />
                  <h3 className='mt-3'>24/7 Support</h3>
                  <p>
                    Lorem Ipusum is dummy text to fill pages in order to fill
                    pages lorem ipsum is generated is simply dummy text of the
                    printing and typesetting industry simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Element>
      </section>
      <Element name='pricing'>
        <section className='pricing' id='#pricing'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12 text-center'>
                <h2>Pricing</h2>
                <p className='light-text'>
                  How much does lables service cost you?
                </p>
              </div>
              <div className='col-xl-11 mx-auto'>
                <div className='row'>
                  <div className='col-lg-4 px-4'>
                    <div className='features-card p-4 down-cards pricing-card'>
                      <h3>FedEx USA</h3>
                      <p>Price is adjusted depending on volume.</p>
                      <ul className='pl-0'>
                        <li className='media align-items-center'>
                          <i className='fas fa-check-circle'></i>
                          <div className='media-body ml-2'>
                            <p className='mb-0'>
                              Lorem Ipusum is dummy text to fill pages in order
                              to fill pages lorem ipsum
                            </p>
                          </div>
                        </li>
                        <li className='media align-items-center'>
                          <i className='fas fa-check-circle'></i>
                          <div className='media-body ml-2'>
                            <p className='mb-0'>
                              Lorem Ipusum is dummy text to fill pages in order
                              to fill pages lorem ipsum
                            </p>
                          </div>
                        </li>
                        <li className='media align-items-center'>
                          <i className='fas fa-check-circle'></i>
                          <div className='media-body ml-2'>
                            <p className='mb-0'>
                              Lorem Ipusum is dummy text to fill pages in order
                              to fill pages lorem ipsum
                            </p>
                          </div>
                        </li>
                      </ul>
                      <a href='#_' className='nav-btn mt-5 ml-auto'>
                        Purchase!
                      </a>
                    </div>
                  </div>
                  <div className='col-lg-4 px-4 mt-5'>
                    <div className='features-card p-4 pricing-card'>
                      <h3>FedEx USA</h3>
                      <p>Price is adjusted depending on volume.</p>
                      <ul className='pl-0'>
                        <li className='media align-items-center'>
                          <i className='fas fa-check-circle'></i>
                          <div className='media-body ml-2'>
                            <p className='mb-0'>
                              Lorem Ipusum is dummy text to fill pages in order
                              to fill pages lorem ipsum
                            </p>
                          </div>
                        </li>
                        <li className='media align-items-center'>
                          <i className='fas fa-check-circle'></i>
                          <div className='media-body ml-2'>
                            <p className='mb-0'>
                              Lorem Ipusum is dummy text to fill pages in order
                              to fill pages lorem ipsum
                            </p>
                          </div>
                        </li>
                        <li className='media align-items-center'>
                          <i className='fas fa-check-circle'></i>
                          <div className='media-body ml-2'>
                            <p className='mb-0'>
                              Lorem Ipusum is dummy text to fill pages in order
                              to fill pages lorem ipsum
                            </p>
                          </div>
                        </li>
                      </ul>
                      <a href='#_' className='nav-btn mt-5 ml-auto'>
                        Purchase!
                      </a>
                    </div>
                  </div>
                  <div className='col-lg-4 px-4'>
                    <div className='features-card p-4 down-cards pricing-card'>
                      <h3>FedEx USA</h3>
                      <p>Price is adjusted depending on volume.</p>
                      <ul className='pl-0'>
                        <li className='media align-items-center'>
                          <i className='fas fa-check-circle'></i>
                          <div className='media-body ml-2'>
                            <p className='mb-0'>
                              Lorem Ipusum is dummy text to fill pages in order
                              to fill pages lorem ipsum
                            </p>
                          </div>
                        </li>
                        <li className='media align-items-center'>
                          <i className='fas fa-check-circle'></i>
                          <div className='media-body ml-2'>
                            <p className='mb-0'>
                              Lorem Ipusum is dummy text to fill pages in order
                              to fill pages lorem ipsum
                            </p>
                          </div>
                        </li>
                        <li className='media align-items-center'>
                          <i className='fas fa-check-circle'></i>
                          <div className='media-body ml-2'>
                            <p className='mb-0'>
                              Lorem Ipusum is dummy text to fill pages in order
                              to fill pages lorem ipsum
                            </p>
                          </div>
                        </li>
                      </ul>
                      <a href='#_' className='nav-btn mt-5 ml-auto'>
                        Purchase!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src='/images/pricing-bg-1.png'
            alt=''
            className='img-fluid pricing-bg'
          />
          <img src='/images/plane.png' alt='' className='img-fluid plane-bg' />
        </section>
      </Element>
      <Element name='faq'>
        <section className='faq'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='text-center'>
                  <h2>Frequently Asked Questions</h2>
                  <p className='light-text'>
                    Feel free to ask us any other questions you may have.
                  </p>
                </div>

                <Accordion defaultActiveKey='0'>
                  <Card className='mt-4'>
                    <Card.Header>
                      <Accordion.Toggle
                        className='btn d-flex w-100 align-items-center justify-content-between collapsed'
                        as={Button}
                        variant='link'
                        eventKey='0'
                      >
                        <span>
                          Why should I choose{' '}
                          <span className='blue-text'>Labels?</span>
                        </span>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey='0'>
                      <Card.Body>
                        {' '}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer.!
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className='mt-4'>
                    <Card.Header>
                      <Accordion.Toggle
                        className='btn d-flex w-100 align-items-center justify-content-between collapsed'
                        as={Button}
                        variant='link'
                        eventKey='1'
                      >
                        <span>
                          Why should I choose{' '}
                          <span className='blue-text'>Labels?</span>
                        </span>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey='1'>
                      <Card.Body>
                        {' '}
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer.!
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card className='mt-4'>
                    <Card.Header>
                      <Accordion.Toggle
                        className='btn d-flex w-100 align-items-center justify-content-between collapsed'
                        as={Button}
                        variant='link'
                        eventKey='2'
                      >
                        <span>
                          Why should I choose{' '}
                          <span className='blue-text'>Labels?</span>
                        </span>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey='2'>
                      <Card.Body>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer.!
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </Element>
      <footer>
        <a href='#_'>
          <FaTwitter />
        </a>
        <div className='container'>
          <div className='row p-18'>
            <div className='col-12 text-center'>
              <p className='mb-0 '>2021 Labels Services</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
