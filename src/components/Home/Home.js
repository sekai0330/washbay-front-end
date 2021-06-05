import { Carousel } from 'react-bootstrap';
import slider1 from '../../assets/images/slider1.png';
import slider2 from '../../assets/images/slider2.png';
import slider3 from '../../assets/images/slider3.png';

function Home() {
   
    return (
        <div className="home">
            <div className="slider-section">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="washbay_type">
                <div className="slider_bottom_img">
                    <img alt="slider_bottom_img" src={require("../../assets/images/slider_bottom_img3.png").default}></img>
                </div>
                <div className="washbay_detail">
                    
                </div>
            </div>
        </div>
    )
}

export default Home;