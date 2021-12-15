import React from "react";

import "./table.css";

import Item from "../Item/item";

function StayTable({ stay, handleTried, handleOpinion, deleteStay }) {
  return (
    <div className="stayTable">
      <table className="tableStay">
        <thead>
          <tr>
            <th className="tableHeadStay">What? & Where?</th>
            <th className="tableHeadStay">Details?</th>
            <th className="tableHeadStay">Becky opinion</th>
            <th className="tableHeadStay">Who By</th>
            <th className="tableHeadStay">Delete</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th className="tableHeadStay">What? & Where?</th>
            <th className="tableHeadStay">Details?</th>
            <th className="tableHeadStay">Becky opinion</th>
            <th className="tableHeadStay">Who By</th>
            <th className="tableHeadStay">Delete</th>
          </tr>
        </tfoot>
        <tbody className="tableBodyStay">
          {stay.map((item, index) => {
            return (
              <Item
                item={item}
                stayWhat={item.what}
                stayLocation={item.location}
                stayDetails={item.details}
                stayed={item.stayed}
                recommendedBy={item.recommendedby}
                beckyOpinion={item.beckyopinion}
                index={index}
                id={item.id}
                key={item.id}
                removeStay={deleteStay}
                tried={handleTried}
                opinion={handleOpinion}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StayTable;
