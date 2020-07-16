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
      {articles.length ? (
        <>
          <h2 className="mb-5">Your results:</h2>
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
        </>
      ) : (
        <h3 className="mt-5">Sorry, but we didn't find anything for you :(</h3>
      )}
    </MainLayout>
  );
};

Category.getInitialProps = async ({ mobxStore, query }: MyPageContext) => {
  await mobxStore.searchQueryStore.fetchHeadlines(query.query.toString());

  return {
    articles: mobxStore.searchQueryStore.articles,
  };
};

export default Category;
