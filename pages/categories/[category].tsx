import React from 'react';
import { NextPage } from 'next';

import MainLayout from '../../components/MainLayout';
import { getTopHeadlinesByCategory } from '../../services/news-service';

interface CategoryProps {
  articles: any;
}

const Category: NextPage<CategoryProps> = ({ articles }) => {
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

Category.getInitialProps = async (ctx) => {
  const { category } = ctx.query;
  const headlinesData = await getTopHeadlinesByCategory(category.toString());
  const { articles } = headlinesData;

  console.log('requested');

  return {
    articles,
  };
};

export default Category;
