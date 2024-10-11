"use client";

import { Carousel, Row, Col, Button } from 'react-bootstrap';

function CarouselComponent() {
  const carouselItems = [
    {
      id: 1,
      title: 'First Slide',
      description: 'Welcome to the Science Portal Take home test! This first slide is meant to be an example displaying the capabilities of this very basic carousel. What you will notice is that this long chunk of text does not overflow beyond the bounds of the component, and that a user is able to scroll down through the text in order to see more. \n\n Long before the events of Elden Ring, the world was shrouded in fog and ruled by Everlasting Dragons. This era was known as the Age of the Archtrees, a time of gray crags, archtrees, and immortal dragons.\n\n The status quo changed dramatically with the arrival of the Greater Will, an outer god of immense power. The Greater Will sent a golden star crashing into the Lands Between, which would later be known as the Elden Beast. This cosmic entity became the embodiment of order in the world...',
      imageSrc: 'https://www.doctorswithoutborders.org/sites/default/files/styles/crop_article_desktop_1238_529/public/image_base_media/2019/05/MSF134504.jpg?itok=keKI0rga',
      linkUrl: '/instructions',
      linkTitle: 'Learn More'
    },
    {
      id: 2,
      title: 'Second Slide',
      description: 'Sample text for the second slide. This is another example of content.',
      imageSrc: 'https://www.doctorswithoutborders.org/sites/default/files/styles/crop_article_mobile_335_189/public/image_base_media/2022/06/MSB127143.jpg?itok=nIKK3T18',
      linkUrl: '/instructions',
      linkTitle: 'Learn More'
    },
    {
        id: 3,
        title: 'Third Slide',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\n Nulla facilisi. Maecenas non lectus in lacus varius venenatis. Proin sagittis, nisi in tincidunt tincidunt, nunc nulla aliquam nunc, vel tincidunt nisi nunc vel nunc. Sed euismod, nunc vel tincidunt tincidunt, nunc nulla aliquam nunc, vel tincidunt nisi nunc vel nunc. Sed euismod, nunc vel tincidunt tincidunt, nunc nulla aliquam nunc, vel tincidunt nisi nunc vel nunc.',
        imageSrc: 'https://www.doctorswithoutborders.org/sites/default/files/MSF163911%28High%29_0.jpg',
        linkUrl: '/instructions',
        linkTitle: 'Learn More'
      },
      {
        id: 4,
        title: 'Fourth Slide',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\n Nulla facilisi. Maecenas non lectus in lacus varius venenatis. Proin sagittis, nisi in tincidunt tincidunt, nunc nulla aliquam nunc, vel tincidunt nisi nunc vel nunc. Sed euismod, nunc vel tincidunt tincidunt, nunc nulla aliquam nunc, vel tincidunt nisi nunc vel nunc. Sed euismod, nunc vel tincidunt tincidunt, nunc nulla aliquam nunc, vel tincidunt nisi nunc vel nunc. \n\n Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem malesuada magna mollis euismod.',
        imageSrc: 'https://www.doctorswithoutborders.org/sites/default/files/MSF152109.jpg',
        linkUrl: '/instructions',
        linkTitle: 'Learn More'
      }
  ];

  return (
    <section>
      <Carousel variant="dark" indicators={false} touch={false}>
        {carouselItems.map((item) => (
          <Carousel.Item key={item.id}>
            <Row className="align-items-center">
              <Col lg={6} sm={12} xs={12}>
                <div className="image-container">
                  <img
                    className="img-fluid py-2 pl-lg-5 mx-auto d-block max-proportions"
                    alt={item.title}
                    src={item.imageSrc}
                    height={250}
                    width={450}
                  />
                </div>
              </Col> 
              <Col lg={6} sm={12} xs={12} className="py-2 pr-lg-5 ps-sm-5">
                <h3 className="text-left text-dark px-4 ms-sm-2 ms-md-0 ps-sm-3">{item.title}</h3>
                <Row className="text-left text-dark pr-lg-5 carousel-description overflow-auto" style={{ maxHeight: '200px' }}>
                  <span className="text-left ps-sm-3 preserve-newlines">{item.description}</span>
                </Row>
                <Row className="align-content-start">
                  <Col className="button-container ms-3 ps-sm-4">
                    <Button
                      href={item.linkUrl}
                      className="pill-btn"
                      target="_self"
                      rel="noreferrer"
                    >
                      {item.linkTitle}
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default CarouselComponent;
