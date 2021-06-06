import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import slider1 from "../../assets/images/slider1.png";
import slider2 from "../../assets/images/slider2.png";
import slider3 from "../../assets/images/slider3.png";

import { getImageData } from "../../actions/home";
import { useHistory } from "react-router";

function Home() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { imageData } = useSelector((state) => state.homeDataReducer);

  const goDetail = (id) => {
    history.push(`/detail/${id}`);
  };

  useEffect(() => {
    dispatch(getImageData());
  }, []);

  return (
    <div className="home">
      <div className="slider-section">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={slider1} alt="First slide" />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slider2} alt="Second slide" />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slider3} alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="washbay_type">
        <div className="slider_bottom_img">
          <img
            alt="slider_bottom_img"
            src={require("../../assets/images/slider_bottom_img3.png").default}
          ></img>
        </div>
        <div className="washbay_detail d-flex flex-wrap">
          {imageData &&
            imageData.map((data, index) => {
              return (
                <div
                  className="p-3"
                  key={index}
                  onClick={() => goDetail(data._id)}
                >
                  <h4>{data.title}</h4>
                  <img src={data.image1} style={{ maxWidth: "240px" }} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
