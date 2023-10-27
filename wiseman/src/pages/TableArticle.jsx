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
  console.log(found.image.medium)

  return (
    <div className="page">
      <div className="inline">
        <h1>{found.title}</h1>
        <div className="intro">
          <p>{removePfromText(found.intro)}</p>
        </div>
        <div className="image-container">
          <img
            className="article-image"
            tabIndex="0"
            src={found.image.medium}
            alt="Eiusmod sunt ex culpa aute in ipsum ipsum pariatur sint consequat incididunt."
            title="Culpa ipsum tempor do laborum mollit."
          />
          <div className="article-img-text">{found.image.title}</div>
          <div className="img-fade">
          <div>
            <img  className="image-fade-img-tabel" src={found.image.medium} alt="" />
              {" "}
            </div>
          </div>
          <div>
            <img className="image-face-tabel" src={found.image.medium} alt="" />
            
          </div>
        </div>
        <div>{paragraphs}</div>
        {found.tags.map((tag) => <div className="pink-btn">{tag}</div>)}
      </div>
    </div>
  );
}

export default TableArticle;
