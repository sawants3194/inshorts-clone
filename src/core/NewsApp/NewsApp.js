import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavInshorts from './NavInshorts'
import NewsContent from "./NewsContent/NewsContent"
import Footer from "./Footer/Footer"
import { NEWS_API } from '../../ApiKey';
import Menu from '../../Menu';


const NewsApp = () => {
  const [category, setCategory] = useState("general");
  const [newsArray, setnewsArray] = useState([]);
  const [newsResults, setnewsResults] = useState();
  const [loadMore, setLoadMore] = useState(40);

  // console.log(process.env);
  // console.log(NEWS_API);
  var config = {
    headers: { 'Access-Control-Allow-Origin': '*' }
  };
  useEffect(() => {
    const newsApi = async () => {
      await axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=${NEWS_API}&category=${category}&pageSize=${loadMore}`
          , config)
        .then(function (response) {
          // handle success
          console.log(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${NEWS_API}&category=${category}&pageSize=${loadMore}`)
          setnewsArray(response.data.articles);
          newsArray.map(n => {
            console.log(n)
          })
          setnewsResults(response.data.totalResults);
        })
        .catch(function (error) {
          // handle error
          console.log("Error", error.message);
        });
    };

    newsApi();
  }, [newsResults, category, loadMore]);
  return (
    <div className="App">
      <Menu />
      <NavInshorts setCategory={setCategory} />
      {newsResults && (
        <NewsContent
          newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />
      )}
      <Footer />
    </div>
  );
}

export default NewsApp
