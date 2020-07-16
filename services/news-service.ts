import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2/';
const API_KEY = 'bfdf4747486f49ceb456503b77f55b9c';

const getTopHeadlinesByCategory = async (category: string) => {
  const url = `${BASE_URL}/top-headlines?category=${category}&language=en&apiKey=${API_KEY}`;
  const response = await axios.get(url);

  const { articles } = response.data;

  return articles;
};

const getTopHeadlinesByQuery = async (query: string) => {
  const url = `${BASE_URL}/top-headlines?q=${query}&language=en&apiKey=${API_KEY}`;
  const response = await axios.get(url);

  const { articles } = response.data;

  return articles;
};

export { getTopHeadlinesByCategory, getTopHeadlinesByQuery };
