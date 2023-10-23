import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import config from "../../data/config.json";
import { ToastContainer, toast } from "react-toastify";
import { Spinner } from "react-bootstrap";


function EditLocation() {
  const { index } = useParams();
  const nameRef = useRef();
  const openTimeRef = useRef();
  const latitudeRef = useRef();
  const longitudeRef = useRef();
  const addressRef = useRef();
  const urlRef = useRef();

  const navigate = useNavigate();
  const [locations, setLocations] = useState([]);
  const found = locations[index];
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch(config.shops)
      .then((res) => res.json())
      .then((json) => {
        setLocations(json || [])
        setLoading(false);
      });
  }, []);

  function edit() {
    if (nameRef.current.value === "") {
      toast.error("Palun sisesta asukoha nimi.");
      return;
    }

    if (openTimeRef.current.value === "") {
      toast.error("Palun sisesta lahtiolekuaeg.");
      return;
    }

    if (nameRef.current.value[0].toUpperCase() !== nameRef.current.value[0]) {
      toast.error("Palun sisesta asukoha nimi suure algustähega.");
      return;
    }

    if (urlRef.current.value.includes(" ")) {
      toast.error("Palun sisesta URL ilma tühikuteta.");
      return;
    }

    locations[index] = {
      address: addressRef.current.value,
      lati: Number(latitudeRef.current.value),
      long: Number(longitudeRef.current.value),
      name: nameRef.current.value,
      open: openTimeRef.current.value,
      url: urlRef.current.value,
    };
    fetch(config.shops, {
      method: "PUT",
      body: JSON.stringify(locations),
    }).then(() => navigate("/admin/maintain-locations"));
  }

  if (isLoading === true) {
    return <Spinner/>
  }

  return (
    <div>
      <label htmlFor="">Poe nimi:</label> <br />
      <input ref={nameRef} defaultValue={found.name} type="text" /> <br /> <br />
      <label htmlFor="">Lahtioleku aeg:</label> <br />
      <input ref={openTimeRef} defaultValue={found.open} type="text" /> 
      <br /> <br />
      <label htmlFor="">Laiuskraad:</label> <br />
      <input ref={latitudeRef} defaultValue={found.lati} type="number" /> <br /> <br />
      <label htmlFor="">Pikkuskraad:</label> <br />
      <input ref={longitudeRef} defaultValue={found.long} type="number" /> <br /> <br />
      <label htmlFor="">Aadress:</label> <br />
      <input ref={addressRef} defaultValue={found.address} type="text" /> <br /> <br />
      <label htmlFor="">URL:</label> <br />
      <input ref={urlRef} defaultValue={found.url} type="text" /> <br /> <br />
      <button onClick={edit}>Muuda</button>
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />

    </div>
  );
}

export default EditLocation;
