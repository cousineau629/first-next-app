import { Carousel } from "react-bootstrap";

export function CarouselSlide() {
  return (
    <div
      style={{
        width: 700,
        height: 4000,
        padding: 35,
        margin: 50,
        marginLeft: 400,
      }}
    >
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src="./jr1.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>WHAT I DID DO NOW?</h3>
            <p>Durka Durka Durka Durka</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="./cm1.jpg" alt="Second slide" />

          <Carousel.Caption>
            <h3>SLeeeeeeeEEEEeeeeeeppppPPP</h3>
            <p>ZZZZZZZZZZzzzzzzzzzzzz</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="./cm2.webp" alt="Third slide" />

          <Carousel.Caption>
            <h3>You gon' do em like that?</h3>
            <p>Yep.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
