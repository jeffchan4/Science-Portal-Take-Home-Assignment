import React from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

const HomeButton = ({ className = '', style = {} }) => {
  return (
    <Link href="/">
      <Button
        variant="primary"
        className={`home-button ${className}`}
        style={{ 
          borderRadius: '20px',
          padding: '10px 20px',
          fontWeight: 'bold',
          ...style 
        }}
      >
        Back to Home
      </Button>
    </Link>
  );
};

export default HomeButton;