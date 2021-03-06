import React from 'react';
import { Container } from 'react-bootstrap';
import { NextPage } from 'next';

import CategoryCard from 'components/CategoryCard';
import MainLayout from 'components/MainLayout';

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

const Categories: NextPage = () => {
  return (
    <MainLayout>
      <h3>Pick one category from listed below</h3>
      <Container fluid className="mt-5 w-75 d-flex justify-content-space-around justify-content-around flex-wrap">
        {categories.map((cardData) => (
          <CategoryCard cardData={cardData} key={cardData.label} />
        ))}
      </Container>
    </MainLayout>
  );
};

export default Categories;
