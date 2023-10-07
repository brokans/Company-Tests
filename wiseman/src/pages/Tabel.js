import React, { useEffect, useState } from "react";
import config from "../data/personel.json";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spinner } from "react-bootstrap";
import {
  faChevronRight,
  faChevronLeft,
  fa1,
  fa2,
  fa3,
  fa4,
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

function Tabel() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [leftButtonDisabled, setLeftButtonDisabled] = useState(true);
  const [rightButtonDisabled, setRightButtonDisabled] = useState(false);
  const [upArrowDisabled, setUpArrowDisabled] = useState(false);
  const [downArrowDisabled, setDownArrowDisabled] = useState(true);

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

  const mapGender = (sex) => {
    if (sex === "m") return "Mees";
    if (sex === "f") return "Naine";
    return sex;
  };

  function removePfromText(html) {
    const cleanedText = html.replace(/<\/?p>/g, "");

    return cleanedText;
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

  const incPage = () => {
    if (currentPage < 4) {
      setCurrentPage(currentPage + 1);
      setLeftButtonDisabled(false);
    }
    if (currentPage === 3) {
      setRightButtonDisabled(true);
    }
  };

  const sortAZ = () => {
    const sortedNames = [...list].sort((a, b) =>
      a.firstname.localeCompare(b.firstname, "et")
    );
    setData({ ...data, list: sortedNames });
    setUpArrowDisabled(true);
  };
  const sortZA = () => {
    const sortedNames = [...list].sort((a, b) =>
      b.firstname.localeCompare(a.firstname, "et")
    );
    setData({ ...data, list: sortedNames });
  };

  const sortSurnameAZ = () => {
    const sortedNames = [...list].sort((a, b) =>
      a.surname.localeCompare(b.surname, "et")
    );
    setData({ ...data, list: sortedNames });
    setUpArrowDisabled(true);
  };

  const sortSurnameZA = () => {
    const sortedNames = [...list].sort((a, b) =>
      b.surname.localeCompare(a.surname, "et")
    );
    setData({ ...data, list: sortedNames });
  };

  const sortGenderAZ = () => {
    const sortedNames = [...list].sort((a, b) =>
      a.sex.localeCompare(b.sex, "et")
    );
    setData({ ...data, list: sortedNames });
    setUpArrowDisabled(true);
  };

  const sortGenderZA = () => {
    const sortedNames = [...list].sort((a, b) =>
      b.sex.localeCompare(a.sex, "et")
    );
    setData({ ...data, list: sortedNames });
  };

  return (
    <div className="page">
      <div className="inline">
        <h1 className="nimekiri">NIMEKIRI</h1> <br /> <br />
        <div className="tabel">
          <Table>
            <thead>
              <tr>
                <th data-field="eesnimi">
                  <button className="thead-btn">
                    Eesnimi
                      <FontAwesomeIcon
                        className="up-arrow"
                        icon={faCaretUp}
                        size="lg"
                        style={{
                          position: "absolute",
                          color: "#ffffff",
                          cursor: upArrowDisabled ? "pointer" : "inactive",
                        }}
                        onClick={() => sortAZ()}
                      />
                      <FontAwesomeIcon
                        className="down-arrow"
                        icon={faCaretDown}
                        size="lg"
                        style={{
                          position: "absolute",
                          color: "#ffffff",
                          cursor: downArrowDisabled ? "pointer" : "inactive",
                        }}
                        onClick={() => sortZA()}
                      />
                  </button>
                </th>

                <th data-field="perenimi">
                  <button className="thead-btn">
                    Perekonnanimi
                      <FontAwesomeIcon
                        className="up-arrow"
                        icon={faCaretUp}
                        size="lg"
                        style={{
                          position: "absolute",
                          color: "#ffffff",
                          cursor: upArrowDisabled ? "pointer" : "inactive",
                        }}
                        onClick={() => sortSurnameAZ()}
                      />
                      <FontAwesomeIcon
                        className="down-arrow"
                        icon={faCaretDown}
                        size="lg"
                        style={{
                          position: "absolute",
                          color: "#ffffff",
                          cursor: upArrowDisabled ? "pointer" : "inactive",
                        }}
                        onClick={() => sortSurnameZA()}
                      />
                  </button>
                </th>
                <th data-field="sugu">
                  <button className="thead-btn">
                    Sugu
                      <FontAwesomeIcon
                        className="up-arrow"
                        icon={faCaretUp}
                        size="lg"
                        style={{
                          position: "absolute",
                          color: "#ffffff",
                          cursor: upArrowDisabled ? "pointer" : "inactive",
                        }}
                        onClick={() => sortGenderAZ()}
                      />
                      <FontAwesomeIcon
                        className="down-arrow"
                        icon={faCaretDown}
                        size="lg"
                        style={{
                          position: "absolute",
                          color: "#ffffff",
                          cursor: upArrowDisabled ? "pointer" : "inactive",
                        }}
                        onClick={() => sortGenderZA()}
                      />
                  </button>
                </th>
                <th data-field="sünnipäev">
                  <button className="thead-btn">
                    Sünnikuupäev
                      <FontAwesomeIcon
                        className="up-arrow"
                        icon={faCaretUp}
                        size="lg"
                        style={{
                          position: "absolute",
                          color: "#ffffff",
                          cursor: upArrowDisabled ? "pointer" : "inactive",
                        }}
                        onClick={() => sortAZ()}
                      />
                      <FontAwesomeIcon
                        className="down-arrow"
                        icon={faCaretDown}
                        size="lg"
                        style={{
                          position: "absolute",
                          color: "#ffffff",
                          cursor: upArrowDisabled ? "pointer" : "inactive",
                        }}
                        onClick={() => sortZA()}
                      />
                  </button>
                </th>
                <th data-field="telefon">
                  Telefon
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
                  {tableRowClicked === person.id && (
                    <tr className="tr-pop">
                      <td colSpan="5" className="td-pop">
                        <div className="td-data">
                          <div>
                            <img
                              className="td-img"
                              src={person.image.medium}
                              alt=""
                            />
                          </div>
                          <div className="td-text">
                            {removePfromText(person.body)}
                          </div>
                          <div className="link">
                            <a href={"/article/" + person.id}>LOE ROHKEM</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </Table>
          <div>
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
