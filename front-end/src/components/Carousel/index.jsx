
import Carousel from 'react-bootstrap/Carousel';
import "./style.css";


function CarouselFade({link1, link2, link3, link4, link5, link6}) {
    return (
      <Carousel data-bs-theme="dark" className='carouselPai'>
        <Carousel.Item className='carouselItem'>
          <div className='div2img'>
          <img
            className="d-block w-100 carouselImg"
            src={link1}
            alt="First slide"
          />
          <img
            className="d-block w-100 carouselImg2"
            src={link2}
            alt="Produto"
          />  
          </div>
        </Carousel.Item>
        <Carousel.Item className='carouselItem'>
        <div className='div2img'>
          <img
            className="d-block w-100 carouselImg"
            src={link3}
            alt="Produto"
          />
          <img
            className="d-block w-100 carouselImg2"
            src={link4}
            alt="Produto"
          />  
          </div>
        </Carousel.Item>
        <Carousel.Item className='carouselItem'>
        <div className='div2img'>
          <img
            className="d-block w-100 carouselImg"
            src={link5}
            alt="Produto"
          />
          <img
            className="d-block w-100 carouselImg2"
            src={link6}
            alt="Produto"
          />  
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }

export default CarouselFade;