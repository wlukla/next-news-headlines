import React from 'react';
import { NextPage } from 'next';

import MainLayout from '../../components/MainLayout';
import { MyPageContext } from '../../types';

interface CategoryProps {
  articles: any;
}

const Category: NextPage<CategoryProps> = ({ articles }) => {
  console.log(articles);
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

Category.getInitialProps = async ({ mobxStore, query }: MyPageContext) => {
  const { category } = query;
  await mobxStore.categoryStore.fetchHeadlines(category.toString());

  return {
    articles: mobxStore.categoryStore.articles,
  };
};

export default Category;
