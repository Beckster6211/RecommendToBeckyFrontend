import React, { useState, useEffect } from "react";
import VisitTable from "./Table/table";

function Visit() {
  const [visit, setVisit] = useState([]);
  console.log({ visit });
  //   const [form, setForm] = useState({});
  const [updatePage, setUpdatePage] = useState(false);

  useEffect(() => {
    fetch("https://recommend-to-becky.herokuapp.com/visit")
      .then((response) => response.json())
      .then((response) => {
        setVisit(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [updatePage]);

  return (
    <div>
      <h3>Visit</h3>
      <VisitTable visit={visit} />
    </div>
  );
}

export default Visit;
