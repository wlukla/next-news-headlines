import React, { useState } from 'react';
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import MainLayout from 'components/MainLayout';

const Search: NextPage = () => {
  const [inputText, setInputText] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    if (inputText.length) {
      const query = `/search/${inputText}`;
      router.push(query);
    }
  };

  return (
    <MainLayout>
      <h2>Enter keywords about your topic and hit Enter</h2>
      <Container fluid className="p-5 mt-5 w-50">
        <form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Type your query..."
              aria-label="Type your query..."
              aria-describedby="basic-addon2"
              onChange={(evt) => setInputText(evt.target.value)}
            />
            <InputGroup.Append>
              <Button variant="dark" onClick={handleSubmit}>
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </form>
      </Container>
    </MainLayout>
  );
};

export default Search;
