import React from 'react';
import '../styles/home.css'

import { Container, Row,Col } from 'reactstrap';
import heroImg from "../assets/images/hero-img01.jpg"
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'

import worldImg from '../assets/images/world.png';
import experienceImg from "../assets/images/experience.png"
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';

import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonial from '../components/Testimonial/Testimonial';
import Newsletter from '../shared/Newsletter';




const Home =() => {
  return(

  <>

    {/* =====================hero section start============ */}

    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero_content ">
              <div className="hero_subtitle d-flex align-items-center ">
                <span style={{ fontFamily: '"Times New Roman",sans-serif', fontStyle: 'italic', fontSize: '10px', fontWeight: 'bold', color: '#333', textDecoration: 'underline' }}>
                  <Subtitle subtitle={'Navigate Your Journey'} />
                  
                </span>
                <img src={worldImg} alt="world " />
              </div>
              <h1>Traveling opens the door to creating{" "}
                  <span className="highlight">memories </span>
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores exercitationem vitae quasi minima corporis placeat repudiandae necessitatibus minus enim, sapiente voluptatum mollitia nostrum quia rem veritatis itaque consectetur eum cum.</p>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero_img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero_img-box hero_video-box mt-4">
              <video src={heroVideo} alt="" controls />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero_img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>
          <SearchBar />
        </Row>
      </Container>
    </section>
    {/* =====================hero section ends============ */}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 style={{textAlign:"center", width:"10vmax"}} className="services_subtitle"> what we serve</h5>
            <h2 className="services_title"> we offer our best services</h2>
          </Col>
          <ServiceList></ServiceList>
        </Row>
      </Container>
    </section>

    {/* ================featured tour section start=============== */}
    <section>
      <Container>
        <Row>
          <Col lg="12" className=" mb-5">
          <h5 className="services_subtitle"> Explore</h5>
            <h2 className="featured_tour-title">Our featured tours</h2>
          </Col>
            < FeaturedTourList />
        </Row>
      </Container>
    </section>   
        {/* ================featured tour section end=============== */}

        {/* ================ experience  tour section start=============== */}
         <section>
          <Container>
            <Row>
              <Col lg ="6">
              <div className='experience_content'>
              <h5 className="services_subtitle"> Experience</h5>

              <h2> 
                With our all experience <br /> we will serve you
              </h2>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                  Quas aliquam,hic tempora inventore suscipit unde.
              </p>
              </div>
              <div className="counter_wrapper d-flex align-items-center gap-5">
                <div className="counter_box">
                  <span>12k+</span>
                  <h6> Successful trip</h6>
                </div>
                <div className="counter_box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter_box">
                  <span>15</span>
                  <h6> Years experience</h6>
                </div>
              </div>
              </Col>
              <Col lg ="6">
                <div className='experience_img'>
                  <img src={experienceImg} alt="" />
                </div>
              </Col>
            </Row>

          </Container>
         </section>


        {/* ================ experience tour section end=============== */}

        {/* ================ gallery tour section start=============== */}

        <section>
          <Container>
            <Row>
              <Col lg="12">
              <h5 className="services_subtitle">Gallery</h5>
                <h2 className='gallery_title'>
                  Visit our customers tour gallery
                </h2>
              </Col>
              <Col lg="12">
                <MasonryImagesGallery />
              </Col>
            </Row>
          </Container>
        </section>
         {/* ================ gallery tour section end=============== */}
         {/* ================   testimonial section start=============== */}
            <section>
              <Container>
                <Row>
                  <Col lg="12">
                  <h5 className="services_subtitle">Fans Love</h5>
                  <h2 className='testimonial_title'>what our fans say about us</h2>
                  </Col>
                  <Col lg="12">
                    <Testimonial />
                  </Col>
                </Row>
              </Container>
            </section>
         {/* ================ testimonial  section end=============== */}
        <Newsletter />
  </>
  );
};

export default Home;
