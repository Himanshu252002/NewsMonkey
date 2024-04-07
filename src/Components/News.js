import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capt = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    document.title = `NewsMonkey - ${capt(props.category)}`;
    const fetchData = async () => {
      props.setProgress(5);
      let url = `https://newsapi.org/v2/top-headlines?country=${
        props.country
      }&category=${props.category}&apiKey=${props.apiKey}&page=${
        page + 1
      }&pageSize=${props.pageSize}`;

      setLoading(true);
      props.setProgress(20);
      let data = await fetch(url);
      props.setProgress(50);
      let parsedData = await data.json();
      props.setProgress(70);
      console.log(parsedData);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);
    };
    fetchData();
    //eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    // this.setState({loading:false});
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-center mt-5">
        NewsMonkey - Top Headlines on {capt(props.category)}
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loading && <Spinner />}>
        <div className="container">
          <div className="row my-3" key={articles.name}>
            {articles.map((e) => {
              return (
                <div className="col-md-3" key={e.url}>
                  <NewsItem
                    title={e.title ? e.title : " "}
                    description={e.description ? e.description : " "}
                    imageUrl={e.urlToImage}
                    newsUrl={e.url ? e.url : ""}
                    author={e.author ? e.author : " Unknown"}
                    date={e.publishedAt ? e.publishedAt : " Not Mentioned"}
                    source={e.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
