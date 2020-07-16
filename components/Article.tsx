import React from 'react';
import { Jumbotron } from 'react-bootstrap';

import { ArticleData } from '../types';

interface ArticleProps {
  articleData: ArticleData;
}

const Article: React.FC<ArticleProps> = ({ articleData }) => {
  const { title, description, content } = articleData;

  return (
    <Jumbotron className="w-75">
      <h4>{title}</h4>
      <small>{description}</small>
      <p>{content}</p>
    </Jumbotron>
  );
};

export default Article;
