import React from 'react';
import styled from 'styled-components';

import { getTopHeadlinesByCategory } from '../../services/news-service';

interface CategoriesProps {
  articles: any;
}

const Categories = ({ articles }: CategoriesProps) => {
  return (
    <div>
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
    </div>
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
