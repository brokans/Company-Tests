import React, { useEffect, useState } from "react";
import config from "../data/personel.json";
import { Spinner } from "react-bootstrap";
import "../App.css";

function Artikkel() {
  const [currentArticle, setCurrentArticle] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.articleDataURL)
      .then((res) => res.json())
      .then((json) => {
        setCurrentArticle(json || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching JSON:", error);
      });
  }, []);

  if (isLoading === true) {
    return <Spinner />;
  }

  const bodyText = currentArticle.body;

  const paragraphs = bodyText
    .split("\n")
    .map((paragraph, index) => (
      <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
    ));

  function removePfromText(html) {
    const cleanedText = html.replace(/<\/?p>/g, "");

    return cleanedText;
  }

  return (
    <div className="page">
      <div className="inline">
        <h1>{currentArticle.title}</h1>
        <div className="intro">
          <p>{removePfromText(currentArticle.intro)}</p>
        </div>
        <div className="image-container">
          <img
            className="article-image"
            tabIndex="0"
            src={currentArticle.image.medium}
            alt="Eiusmod sunt ex culpa aute in ipsum ipsum pariatur sint consequat incididunt."
            title="Culpa ipsum tempor do laborum mollit."
          />
          <div className="article-img-text">{currentArticle.image.title}</div>
          <div className="img-fade">
            <div className="image-fade-img">
              {" "}
            </div>
          </div>
          <div className="image-face">
          </div>
        </div>
        <div>
          <p>{paragraphs}</p>
        </div>
        <div className="pink-btn">{currentArticle.tags}</div>
      </div>
    </div>
  );
}

export default Artikkel;
