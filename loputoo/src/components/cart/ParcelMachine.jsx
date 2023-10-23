import React, { useEffect, useState } from "react";

function ParcelMachine() {
  const [parcelMachines, setParcelMachines] = useState([]);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then((res) => res.json()) 
      .then((json) => setParcelMachines(json));
  }, []);


  if (parcelMachines.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <select name="" id="">
        {parcelMachines
          .filter((pm) => pm.A0_NAME === "EE")
          .map((pm) => (
            <option key={pm.NAME}>{pm.NAME}</option>
          ))}
      </select>
    </div>
  );
}

export default ParcelMachine;
