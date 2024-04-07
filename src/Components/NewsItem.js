import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="container my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}>
          <span className=" badge rounded-pill bg-success">{source}</span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://tse3.mm.bing.net/th?id=OIP.1Sghzzkxl33nqCTTBGr4rQHaE8&pid=Api&P=0&h=220"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              {" "}
              By{"  " + author} on {new Date(date).toGMTString()}{" "}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
