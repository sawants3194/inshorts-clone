import React, { useEffect, useState } from 'react';
import NavInshorts from './NavInshorts';
import NewsContent from "./NewsContent/NewsContent";
import Footer from "./Footer/Footer";
import Menu from '../../Menu';
import { NEWS_API } from "../../ApiKey";

const NewsApp = () => {
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);

  useEffect(() => {
    let isMounted = true;

    const fetchNews = async (countryCode) => {
      const url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${NEWS_API}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        
        // If articles are found, set them, otherwise, fallback to another country
        if (data.articles.length > 0) {
          if (isMounted) {
            setNewsArray(data.articles);
            setNewsResults(data.totalResults);
          }
        } else {
          // If no results for the first country (in this case, India), fall back to the US
          if (countryCode === 'in') {
            fetchNews('us');  // Attempt to fetch news from the US
          }
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews('in'); // Try fetching news for India first

    return () => {
      isMounted = false; // Cleanup on unmount
    };
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div className="App">
      <Menu />
      <NavInshorts />
      {newsResults ? (
        <NewsContent
          newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />
      ) : (
        <p>Loading...</p> // Display loading message while fetching data
      )}
      <Footer />
    </div>
  );
};

export default NewsApp;
