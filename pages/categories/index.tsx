import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import { NextPage } from 'next';

import CategoryCard from '../../components/CategoryCard';
import MainLayout from '../../components/MainLayout';

const Categories: NextPage = () => {
  const categories = [
    {
      label: 'Business',
      path: '/categories/business',
      subtitle: 'Top news about business',
    },
    {
      label: 'Entertainment',
      path: '/categories/entertainment',
      subtitle: 'Top news about entertainment',
    },
    {
      label: 'General',
      path: '/categories/general',
      subtitle: 'Top news in category General',
    },
    {
      label: 'Health',
      path: '/categories/health',
      subtitle: 'Top news about health',
    },
    {
      label: 'Science',
      path: '/categories/science',
      subtitle: 'Top news about science',
    },
    {
      label: 'Sports',
      path: '/categories/sports',
      subtitle: 'Top news about sports',
    },
    {
      label: 'Technology',
      path: '/categories/technology',
      subtitle: 'Top news about technologies',
    },
  ];

  return (
    <MainLayout>
      <Container fluid className="mt-5">
        <Row className="justify-content-md-center mb-5">
          {categories.slice(0, 4).map((cardData) => (
            <CategoryCard cardData={cardData} key={cardData.label} />
          ))}
        </Row>
        <Row className="justify-content-md-center">
          {categories.slice(4).map((cardData) => (
            <CategoryCard cardData={cardData} key={cardData.label} />
          ))}
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Categories;
