"use client";

import { useState } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';

function CardComponent({ title, description, imageSrc, linkUrl, linkTitle }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={imageSrc} height={250} width={450} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="link" onClick={() => setOpen(!open)}>
          {open ? "Hide Details" : "Show Details"}
        </Button>
        <Collapse in={open}>
          <div>{description}</div>
        </Collapse>
        <Button href={linkUrl} variant="primary">{linkTitle}</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
