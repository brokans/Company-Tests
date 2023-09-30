import React, { useEffect, useState } from "react";
import config from "../data/personel.json";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Spinner } from "react-bootstrap";



function Tabel() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(config.personelDataURL)
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false)
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

  if (list.length > 0) {
    const firstItem = list[0];
    const body = firstItem.body; 
    const firstname = firstItem.firstname; 
    const images = firstItem.images;

    images.forEach((image) => {
      const alt = image.alt; 
      const large = image.large; 
    });
  }

  const firstTen = list.slice(0, 10);



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
            <button>
              <FontAwesomeIcon icon="fa-solid fa-chevron-up" rotation={270} style={{color: "#ffffff",}} />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabel;
