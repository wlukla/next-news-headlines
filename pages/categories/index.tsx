import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import Link from 'next/link';

import MainLayout from '../../components/MainLayout';

const Categories = () => {
  const categories = [
    { label: 'Business', path: '/categories/business' },
    { label: 'Entertainment', path: '/categories/entertainment' },
    { label: 'General', path: '/categories/general' },
    { label: 'Health', path: '/categories/health' },
    { label: 'Science', path: '/categories/science' },
    { label: 'Sports', path: '/categories/sports' },
    { label: 'Technology', path: '/categories/technology' },
  ];

  return (
    <MainLayout>
      <Container fluid className="mt-5">
        <Row className="justify-content-md-center mb-5">
          {categories.slice(0, 4).map(({ label, path }) => (
            <Card className="mr-1 ml-1" style={{ width: '18rem' }} key={label}>
              <Card.Body>
                <Card.Title>{label}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link>
                  <Link href={path}>
                    <a>Go to category: {label}</a>
                  </Link>
                </Card.Link>
              </Card.Body>
            </Card>
          ))}
        </Row>
        <Row className="justify-content-md-center">
          {categories.slice(4).map(({ label, path }) => (
            <Card className="mr-1 ml-1" style={{ width: '18rem' }} key={label}>
              <Card.Body>
                <Card.Title>{label}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link>
                  <Link href={path}>
                    <a>Go to category: {label}</a>
                  </Link>
                </Card.Link>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Categories;
