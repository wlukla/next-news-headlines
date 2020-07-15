import React from 'react';
import styled from 'styled-components';

import MainLayout from '../../components/MainLayout';
import { getTopHeadlinesByCategory } from '../../services/news-service';

interface CategoriesProps {
  articles: any;
}

const Categories = ({ articles }: CategoriesProps) => {
  return (
    <MainLayout>
      <ul>
        {articles.map(({ title, description, urlToImage, url }) => (
          <li key={title}>
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={urlToImage} width="200" height="100" />
            <a href={url} target="_blank">
              Go to article
            </a>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

Categories.getInitialProps = async () => {
  const headlinesData = await getTopHeadlinesByCategory('general');
  const { articles } = headlinesData;

  return {
    articles,
  };
};

export default Categories;
