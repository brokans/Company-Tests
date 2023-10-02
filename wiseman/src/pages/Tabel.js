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
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [leftButtonDisabled, setLeftButtonDisabled] = useState(true);
  const [rightButtonDisabled, setRightButtonDisabled] = useState(false);
  const [tableRowClicked, setTableRowClicked] = useState(false);

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

  const list = data.list;
  const endIndex = currentPage * postsPerPage;
  const startIndex = endIndex - postsPerPage;
  const currentItems = list.slice(startIndex, endIndex);
  console.log(list);
  const mapGender = (sex) => {
    if (sex === "m") return "Mees";
    if (sex === "f") return "Naine";
    return sex;
  };

  function removePfromText(html){
    const cleanedText = html.replace(/<\/?p>/g, "");
    
    return cleanedText
  }
  


  const convertPersonalNumber = (personalNumber) => {
    if (personalNumber !== 11) {
      return personalNumber;
    }
  };

  const rowClick = (person) => {
    if (tableRowClicked === person.id) {
      setTableRowClicked(true);
    } else {
      setTableRowClicked(person.id);
    }
  };

  const pageOne = () => {
    setCurrentPage(1);
    setLeftButtonDisabled(true);
    setRightButtonDisabled(false);
  };

  const pageTwo = () => {
    setCurrentPage(2);
    setRightButtonDisabled(false);
    setLeftButtonDisabled(false);
  };
  const pageThree = () => {
    setCurrentPage(3);
    setRightButtonDisabled(false);
    setLeftButtonDisabled(false);
  };
  const pageFour = () => {
    setCurrentPage(4);
    setRightButtonDisabled(true);
    setLeftButtonDisabled(false);
  };

  const decPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setRightButtonDisabled(false);
    }
    if (currentPage === 2) {
      setLeftButtonDisabled(true);
    }
  };

  function incPage() {
    if (currentPage < 4) {
      setCurrentPage(currentPage + 1);
      setLeftButtonDisabled(false);
    }
    if (currentPage === 3) {
      setRightButtonDisabled(true);
    }
  }

  console.log(tableRowClicked);
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
              {currentItems.map((person, index) => (
                <React.Fragment key={person.id}>
                  <tr key={person.id} onClick={() => rowClick(person)}>
                    <td>{person.firstname}</td>
                    <td>{person.surname}</td>
                    <td>{mapGender(person.sex)}</td>
                    <td>{convertPersonalNumber(person.personal_code)}</td>
                    <td>{person.phone}</td>
                  </tr>
                  {tableRowClicked ===
                    person.id && (
                      <tr className="tr-pop">
                        <td colSpan="5" className="td-pop">
                          <div className="td-data">
                            <div><img className="td-img" src={person.image.medium} alt="" /></div>
                            <div className="td-text">
                              {removePfromText(person.body)}
                              <a href=""></a>
                            </div>
                          </div>
                          
                        </td>
                      </tr>
                    )}
                </React.Fragment>
              ))}
            </tbody>
          </Table>
          <div className="buttonWrapper">
            <FontAwesomeIcon
              className="my-fa-icon"
              icon={faChevronLeft}
              size="lg"
              style={{
                color: leftButtonDisabled ? "#999" : "#ffffff",
                cursor: leftButtonDisabled ? "inactive" : "pointer",
              }}
              onClick={() => decPage()}
            />
            <FontAwesomeIcon
              className="my-fa-icon"
              icon={fa1}
              style={{ color: "#ffffff" }}
              onClick={() => pageOne()}
            />
            <FontAwesomeIcon
              className="my-fa-icon"
              icon={fa2}
              style={{ color: "#ffffff" }}
              onClick={() => pageTwo()}
            />
            <FontAwesomeIcon
              className="my-fa-icon"
              icon={fa3}
              style={{ color: "#ffffff" }}
              onClick={() => pageThree()}
            />
            <FontAwesomeIcon
              className="my-fa-icon"
              icon={fa4}
              style={{ color: "#ffffff" }}
              onClick={() => pageFour()}
            />
            <FontAwesomeIcon
              className="my-fa-icon"
              icon={faChevronRight}
              size="lg"
              style={{
                color: rightButtonDisabled ? "#999" : "#ffffff",
                cursor: rightButtonDisabled ? "inactive" : "pointer",
              }}
              onClick={() => incPage()}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabel;
