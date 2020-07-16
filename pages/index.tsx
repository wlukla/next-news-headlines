import React from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { NextPage } from 'next';
import Link from 'next/link';

import MainLayout from '../components/MainLayout';

const Home: NextPage = () => (
  <MainLayout>
    <h2 className="mt-2">This is website that gives you top news headlines</h2>
    <h3 className="mt-5 mb-5">Feel free to:</h3>
    <Link href="/categories">
      <a>
        <Button size="lg" variant="dark">
          Browse categories
        </Button>
      </a>
    </Link>
    <h3 className="mt-4 mb-4">OR</h3>
    <Link href="/search">
      <a>
        <OverlayTrigger
          placement="bottom"
          overlay={
            <Tooltip id="some-id">
              eg. Gambling, Casino, Roulette, Slots
            </Tooltip>
          }
        >
          <Button size="lg" variant="dark">
            Search for something specific
          </Button>
        </OverlayTrigger>
      </a>
    </Link>
  </MainLayout>
);

export default Home;
