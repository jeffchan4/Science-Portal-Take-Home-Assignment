"use client";

import { Button, Row, Col } from 'react-bootstrap';

function FirstSlide({ title, description, imageSrc, linkUrl, linkTitle }) {
  return (
    <Row className="align-items-center my-4">
      <Col lg={6} sm={12}>
        <img src={imageSrc} alt={title} className="img-fluid" height={250} width={450} />
      </Col>
      <Col lg={6} sm={12}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button href={linkUrl}>{linkTitle}</Button>
      </Col>
    </Row>
  );
}

export default FirstSlide;
