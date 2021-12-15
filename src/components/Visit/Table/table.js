import React from "react";
import "./table.css";

import Item from "../Item/item";

function VisitTable({ visit, handleTried, handleOpinion, deleteVisit }) {
  return (
    <div className="visitTable">
      <table className="tableVisit">
        <thead>
          <tr>
            <th className="tableHeadVisit">What? & Location?</th>
            <th className="tableHeadVisit">Why?</th>
            <th className="tableHeadVisit">Becky opinion</th>
            <th className="tableHeadVisit">Who By</th>
            <th className="tableHeadVisit">Delete</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th className="tableHeadVisit">What? & Location?</th>
            <th className="tableHeadVisit">Why?</th>
            <th className="tableHeadVisit">Becky opinion</th>
            <th className="tableHeadVisit">Who By</th>
            <th className="tableHeadVisit">Delete</th>
          </tr>
        </tfoot>
        <tbody className="tableBodyVisit">
          {visit.map((item, index) => {
            return (
              <Item
                item={item}
                visitWhat={item.what}
                visitLocation={item.location}
                visitWhy={item.why}
                visited={item.visited}
                recommendedBy={item.recommendedby}
                beckyOpinion={item.beckyopinion}
                index={index}
                id={item.id}
                key={item.id}
                removeVisit={deleteVisit}
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

export default VisitTable;
