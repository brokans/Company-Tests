import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../data/personel.json";
import { Spinner } from "react-bootstrap";

function TableArticle() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.personelDataURL)
      .then((res) => res.json())
      .then((json) => {
        setData(json || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching JSON:", error);
      });
  }, []);

  if (!data || !data.list) {
    return <Spinner />;
  }

  if (isLoading === true) {
    return <Spinner />;
  }

  const list = data.list;

  const currentItems = list.slice();

  const found = currentItems.find((info) => info.id === id);
  if (!found || !found.body) {
    return <div>Article not found or body not available.</div>;
  }

  const bodyText = found.body;
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
        <h1>{found.title}</h1>
        <div className="intro">
          <p>{removePfromText(found.intro)}</p>
        </div>
        <div>
          <img
            className="article-image"
            tabindex="0"
            src={found.image.medium}
            alt="Eiusmod sunt ex culpa aute in ipsum ipsum pariatur sint consequat incididunt."
            title="Culpa ipsum tempor do laborum mollit."
          />
          <p>{found.image.title}</p>
        </div>
        <div>{paragraphs}</div>
        <div className="pink-btn">{found.tags}</div>
      </div>
    </div>
  );
}

export default TableArticle;
