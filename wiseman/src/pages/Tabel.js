import React, { useEffect, useState } from "react";
import config from "../data/personel.json";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spinner } from "react-bootstrap";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import {
  faChevronRight,
  fa1,
  fa2,
  fa3,
  fa4,
} from "@fortawesome/free-solid-svg-icons";

function Tabel() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const objectsPerPage = 10;

  const element = <FontAwesomeIcon icon={faChevronLeft} />;

  useEffect(() => {
    fetch(config.personelDataURL)
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching JSON:", error);
      });
  }, []);

  if (!data) {
    return <Spinner />;
  }

  if (isLoading === true) {
    return <Spinner />;
  }

  const limit = data.limit;

  const list = data.list;

  // if (list.length > 0) {
  //   const firstItem = list[0];
  //   const body = firstItem.body;
  //   const firstname = firstItem.firstname;
  //   const images = firstItem.images;

  //   images.forEach((image) => {
  //     const alt = image.alt;
  //     const large = image.large;
  //   });
  // }

  const firstTen = list.slice(0, 10);
  const secondPage = list.slice(10, 20);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * objectsPerPage;
  const endIndex = startIndex + objectsPerPage;

  // Slice the list to get the items for the current page
  const currentItems = list.slice(startIndex, endIndex);


  return (
    <div className="page">
      <div className="inline">
        <div className="tabel">
          {data.length}
          <h1 className="nimekiri">NIMEKIRI</h1>
          <Table>
            <thead>
              <tr>
                <th data-field="ordern">Eesnimi</th>
                <th data-field="deliverdate">Perekonnanimi</th>
                <th data-field="customer">
                  Sugu
                  <span></span>
                </th>
                <th data-field="trackingNr">
                  Sünnikuupäev
                  <span></span>
                </th>
                <th data-field="status">
                  Telefon
                  <span></span>
                </th>
              </tr>
            </thead>
            <tbody>
              {firstTen.map((person, index) => (
                <tr key={person.id}>
                  <td>{person.firstname}</td>
                  <td>{person.surname}</td>
                  <td>{person.sex}</td>
                  <td>{person.personal_code}</td>
                  <td>{person.phone}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="buttonWrapper">
            <FontAwesomeIcon
              className="my-fa-icon"
              icon={faChevronLeft}
              size="lg"
              style={{ color: "#ffffff" }}
              onClick={() => handlePageChange(currentPage - 1)}
            />
            <FontAwesomeIcon
              className="my-fa-icon"
              icon={fa1}
              style={{ color: "#ffffff" }}
              onClick={() => handlePageChange(2)}
            />
            <FontAwesomeIcon
              className="my-fa-icon"
              icon={fa2}
              style={{ color: "#ffffff" }}
              onClick={() => handlePageChange(3)}
            />
            <FontAwesomeIcon
              className="my-fa-icon"
              icon={fa3}
              style={{ color: "#ffffff" }}
              onClick={() => handlePageChange(3)}
            />
            <FontAwesomeIcon
              className="my-fa-icon"
              icon={fa4}
              style={{ color: "#ffffff" }}
              onClick={() => handlePageChange(4)}
            />
            <FontAwesomeIcon
              className="my-fa-icon"
              icon={faChevronRight}
              size="lg"
              style={{ color: "#ffffff" }}
              onClick={() => handlePageChange(currentPage + 1)}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabel;
