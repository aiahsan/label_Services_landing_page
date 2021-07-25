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

function App() {
  return (
    <>
      <Navbar />

      <section class='banner'>
        <Element name='home'>
          <div class='container'>
            <div class='row'>
              <div class='col-12'>
                <div class='banner-inner'>
                  <h1>
                    Shipping Made <br></br> Easier, Faster &amp;{' '}
                    <span class='blue-text'> Cheaper</span>
                  </h1>
                  <div class='d-flex mt-md-5 mt-4 align-items-center justify-content-center'>
                    <a href='#_' class='nav-btn mr-4 ml-0 site-btn'>
                      Ship Now!
                    </a>
                    <a href='#_' class='nav-btn ml-0 border-btn'>
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='container-fluid'>
            <div class='row'>
              <div class='col-12 px-0'>
                <img
                  src='/images/banner-img.png'
                  alt=''
                  class='img-fluid w-100'
                />
              </div>
            </div>
          </div>
        </Element>
        <Element name='Features'>
          <div class='container pb-5'>
            <div class='row'>
              <div class='col-12 text-center'>
                <h2>Features</h2>
                <p class='light-text'>What does lables service offer to you?</p>
              </div>
              <div class='col-lg-5 mx-auto mt-5'>
                <div class='features-card'>
                  <img
                    src='/images/cloud-bg.png'
                    alt=''
                    class='img-fluid cloud-1'
                  />
                  <img
                    src='/images/cloud-sm.png'
                    alt=''
                    class='img-fluid cloud-2'
                  />
                  <img
                    src='/images/cloud-sm.png'
                    alt=''
                    class='img-fluid cloud-3'
                  />
                  <h3 class='mt-3'>Create &amp; Order</h3>
                  <p>
                    Lorem Ipusum is dummy text to fill pages in order to fill
                    pages lorem ipsum is generated is simply dummy text of the
                    printing and typesetting industry simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </div>
              </div>
              <div class='col-lg-5 mx-auto offset-lg-1 mt-5'>
                <div class='features-card'>
                  <img
                    src='/images/cloud-bg.png'
                    alt=''
                    class='img-fluid cloud-1'
                  />
                  <img
                    src='/images/cloud-sm.png'
                    alt=''
                    class='img-fluid cloud-2'
                  />
                  <img
                    src='/images/cloud-sm.png'
                    alt=''
                    class='img-fluid cloud-3'
                  />
                  <h3 class='mt-3'>Easy Payment</h3>
                  <p>
                    Lorem Ipusum is dummy text to fill pages in order to fill
                    pages lorem ipsum is generated is simply dummy text of the
                    printing and typesetting industry simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </div>
              </div>
              <div class='col-lg-5 mx-auto mt-5'>
                <div class='features-card'>
                  <img
                    src='/images/cloud-bg.png'
                    alt=''
                    class='img-fluid cloud-1'
                  />
                  <img
                    src='/images/cloud-sm.png'
                    alt=''
                    class='img-fluid cloud-2'
                  />
                  <img
                    src='/images/cloud-sm.png'
                    alt=''
                    class='img-fluid cloud-3'
                  />
                  <h3 class='mt-3'>Friendly APIs</h3>
                  <p>
                    Lorem Ipusum is dummy text to fill pages in order to fill
                    pages lorem ipsum is generated is simply dummy text of the
                    printing and typesetting industry simply dummy text of the
                    printing and typesetting industry.
                  </p>
                </div>
              </div>
              <div class='col-lg-5 mx-auto offset-lg-1 mt-5'>
                <div class='features-card'>
                  <img
                    src='/images/cloud-bg.png'
                    alt=''
                    class='img-fluid cloud-1'
                  />
                  <img
                    src='/images/cloud-sm.png'
                    alt=''
                    class='img-fluid cloud-2'
                  />
                  <img
                    src='/images/cloud-sm.png'
                    alt=''
                    class='img-fluid cloud-3'
                  />
                  <h3 class='mt-3'>24/7 Support</h3>
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
        <section class='pricing' id='#pricing'>
          <div class='container-fluid'>
            <div class='row'>
              <div class='col-12 text-center'>
                <h2>Pricing</h2>
                <p class='light-text'>How much does lables service cost you?</p>
              </div>
              <div class='col-xl-11 mx-auto'>
                <div class='row'>
                  <div class='col-lg-4 px-4'>
                    <div class='features-card p-4 down-cards pricing-card'>
                      <h3>FedEx USA</h3>
                      <p>Price is adjusted depending on volume.</p>
                      <ul class='pl-0'>
                        <li class='media align-items-center'>
                          <i class='fas fa-check-circle'></i>
                          <div class='media-body ml-2'>
                            <p class='mb-0'>
                              Lorem Ipusum is dummy text to fill pages in order
                              to fill pages lorem ipsum
                            </p>
                          </div>
                        </li>
                        <li class='media align-items-center'>
                          <i class='fas fa-check-circle'></i>
                          <div class='media-body ml-2'>
                            <p class='mb-0'>
                              Lorem Ipusum is dummy text to fill pages in order
                              to fill pages lorem ipsum
                            </p>
                          </div>
                        </li>
                        <li class='media align-items-center'>
                          <i class='fas fa-check-circle'></i>
                          <div class='media-body ml-2'>
                            <p class='mb-0'>
                              Lorem Ipusum is dummy text to fill pages in order
                              to fill pages lorem ipsum
                            </p>
                          </div>
                        </li>
                      </ul>
                      <a href='#_' class='nav-btn mt-5 ml-auto'>
                        Purchase!
                      </a>
                    </div>
                  </div>
                  <div class='col-lg-4 px-4 mt-5'>
                    <div class='features-card p-4 pricing-card'>
                      <h3>FedEx USA</h3>
                      <p>Price is adjusted depending on volume.</p>
                      <ul class='pl-0'>
                        <li class='media align-items-center'>
                          <i class='fas fa-check-circle'></i>
                          <div class='media-body ml-2'>
                            <p class='mb-0'>
                              Lorem Ipusum is dummy text to fill pages in order
                              to fill pages lorem ipsum
                            </p>
                          </div>
                        </li>
                        <li class='media align-items-center'>
                          <i class='fas fa-check-circle'></i>
                          <div class='media-body ml-2'>
                            <p class='mb-0'>
                              Lorem Ipusum is dummy text to fill pages in order
                              to fill pages lorem ipsum
                            </p>
                          </div>
                        </li>
                        <li class='media align-items-center'>
                          <i class='fas fa-check-circle'></i>
                          <div class='media-body ml-2'>
                            <p class='mb-0'>
                              Lorem Ipusum is dummy text to fill pages in order
                              to fill pages lorem ipsum
                            </p>
                          </div>
                        </li>
                      </ul>
                      <a href='#_' class='nav-btn mt-5 ml-auto'>
                        Purchase!
                      </a>
                    </div>
                  </div>
                  <div class='col-lg-4 px-4'>
                    <div class='features-card p-4 down-cards pricing-card'>
                      <h3>FedEx USA</h3>
                      <p>Price is adjusted depending on volume.</p>
                      <ul class='pl-0'>
                        <li class='media align-items-center'>
                          <i class='fas fa-check-circle'></i>
                          <div class='media-body ml-2'>
                            <p class='mb-0'>
                              Lorem Ipusum is dummy text to fill pages in order
                              to fill pages lorem ipsum
                            </p>
                          </div>
                        </li>
                        <li class='media align-items-center'>
                          <i class='fas fa-check-circle'></i>
                          <div class='media-body ml-2'>
                            <p class='mb-0'>
                              Lorem Ipusum is dummy text to fill pages in order
                              to fill pages lorem ipsum
                            </p>
                          </div>
                        </li>
                        <li class='media align-items-center'>
                          <i class='fas fa-check-circle'></i>
                          <div class='media-body ml-2'>
                            <p class='mb-0'>
                              Lorem Ipusum is dummy text to fill pages in order
                              to fill pages lorem ipsum
                            </p>
                          </div>
                        </li>
                      </ul>
                      <a href='#_' class='nav-btn mt-5 ml-auto'>
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
            class='img-fluid pricing-bg'
          />
          <img src='/images/plane.png' alt='' class='img-fluid plane-bg' />
        </section>
      </Element>
      <Element name='faq'>
        <section class='faq'>
          <div class='container'>
            <div class='row'>
              <div class='col-12'>
                <div class='text-center'>
                  <h2>Frequently Asked Questions</h2>
                  <p class='light-text'>
                    Feel free to ask us any other questions you may have.
                  </p>
                </div>

                <Accordion defaultActiveKey='0'>
                  <Card className='mt-4'>
                    <Card.Header>
                      <Accordion.Toggle
                        class='btn d-flex w-100 align-items-center justify-content-between collapsed'
                        as={Button}
                        variant='link'
                        eventKey='0'
                      >
                        <span>
                          Why should I choose{' '}
                          <span class='blue-text'>Labels?</span>
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
                        class='btn d-flex w-100 align-items-center justify-content-between collapsed'
                        as={Button}
                        variant='link'
                        eventKey='1'
                      >
                        <span>
                          Why should I choose{' '}
                          <span class='blue-text'>Labels?</span>
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
                        class='btn d-flex w-100 align-items-center justify-content-between collapsed'
                        as={Button}
                        variant='link'
                        eventKey='2'
                      >
                        <span>
                          Why should I choose{' '}
                          <span class='blue-text'>Labels?</span>
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
        <div class='container'>
          <div class='row p-18'>
            <div class='col-12 text-center'>
              <p class='mb-0 '>2021 Labels Services</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
