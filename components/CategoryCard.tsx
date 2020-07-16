import React from 'react';
import Link from 'next/link';
import { Card } from 'react-bootstrap';

interface CategoryCardProps {
  cardData: {
    label: string;
    path: string;
    subtitle: string;
  };
}

const CategoryCard: React.FC<CategoryCardProps> = ({ cardData }) => {
  const { label, path, subtitle } = cardData;

  return (
    <Card className="mr-1 ml-1 mt-5" style={{ width: '18rem' }} key={label}>
      <Card.Body>
        <Card.Title>{label}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
        <Card.Link href={path} as={Link}>
          <a>Go to category: {label}</a>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CategoryCard;
