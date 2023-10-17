import React, { useEffect, useState } from "react";

function ParcelMachine() {
  const [parcelMachines, setParcelMachines] = useState([]);
  // API päringutes peab alati olema useState
  // ja useState algväärtus sulgude sees peab olema seda/sama tüüpi tühi
  // API päring võtab aega u 0.5 sek
  // Senikaua on koodis useState'il algväärtus
  // uef on lühend VanemReact: componentDidMount    componentWillMount
  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then((res) => res.json()) // koos metadataga tagastus
      .then((json) => setParcelMachines(json)); // reaalselt mis seal API päringus tagastatakse
  }, []);

  // 1. HTML's
  // <a href />
  // <Link>
  // 2. const navigate = useNavigation(); <--- siseseks suunamiseks
  // nav(json.payment_link)
  // 3. windows.location.href = ""https://neti.ee"" <-- rakendusest välja suunamiseks
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
