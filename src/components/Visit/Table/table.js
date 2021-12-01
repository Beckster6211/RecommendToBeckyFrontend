import React from "react";
import "./table.css";

// import "./table.css";

// // chakra
// import {
//   Table,
//   Thead,
//   Tbody,
//   Tfoot,
//   Tr,
//   Th,
//   Td,
//   TableCaption,
// } from "@chakra-ui/react";
// import { Center, Square, Circle } from "@chakra-ui/react";
// import { Box } from "@chakra-ui/react";
// import { Container } from "@chakra-ui/react";
// import { Stack, HStack, VStack } from "@chakra-ui/react";

import Item from "../Item/item";

function VisitTable({ visit, handleTried, handleOpinion, deleteVisit }) {
  return (
    <div className="visitTable">
      <table className="tableVisit">
        <thead>
          <tr>
            {/* <th>hi</th> */}
            <th className="tableHeadVisit">What?</th>
            {/* <th>What? & Where?</th> */}
            <th className="tableHeadVisit">Location?</th>
            <th className="tableHeadVisit">Why?</th>
            {/* <th>Best place to get?</th> */}
            {/* <th>Visited</th> */}
            <th className="tableHeadVisit">Becky opinion</th>
            <th className="tableHeadVisit">Who By</th>
            <th className="tableHeadVisit">Delete</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            {/* <th>hi</th> */}
            <th className="tableHeadVisit">What?</th>
            {/* <th>What? & Where?</th> */}
            <th className="tableHeadVisit">Location?</th>
            <th className="tableHeadVisit">Why?</th>
            {/* <th>Best place to get?</th> */}
            {/* <th>Visited</th> */}
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
