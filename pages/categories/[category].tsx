import React from 'react';
import { NextPage } from 'next';
import { Container, Row } from 'react-bootstrap';

import MainLayout from '../../components/MainLayout';
import Article from '../../components/Article';
import { ArticleData, MyPageContext } from '../../types';

interface CategoryProps {
  articles: ArticleData[];
}

const Category: NextPage<CategoryProps> = ({ articles }) => {
  return (
    <MainLayout>
      <Container>
        {articles.map((articleData) => (
          <Row
            className="d-flex justify-content-center"
            key={articleData.title}
          >
            <Article articleData={articleData} />
          </Row>
        ))}
      </Container>
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
