import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';

import { ArticleData } from 'types';

interface ArticleProps {
  articleData: ArticleData;
}

const Article: React.FC<ArticleProps> = ({ articleData }) => {
  const { title, description, content, urlToImage, url } = articleData;

  return (
    <Jumbotron className="w-75 position-relative">
      {urlToImage && <StyledImg src={urlToImage} />}

      {title && <Heading padded={urlToImage}>{title}</Heading>}

      {description && <small>{description}</small>}

      {content && <p>{content.split(' [')[0]}</p>}

      {url && (
        <a href={url} target="_blank" rel="noreferrer">
          Go to article
        </a>
      )}
    </Jumbotron>
  );
};

const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 15rem;
  object-fit: cover;
  border-radius: 6px;
`;

const Heading = styled.h4<{ padded: string | null }>`
  ${(props) => props.padded && 'margin-top: 16rem;'}
`;

export default Article;
