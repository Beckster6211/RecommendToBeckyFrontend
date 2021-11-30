import React from "react";

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

function VisitTable({ visit }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {/* <th>hi</th> */}
            <th>What?</th>
            {/* <th>What? & Where?</th> */}
            <th>Location?</th>
            <th>Why?</th>
            {/* <th>Best place to get?</th> */}
            {/* <th>Visited</th> */}
            <th>Becky opinion</th>
            <th>Who By</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            {/* <th>hi</th> */}
            <th>What? & Where?</th>
            <th>Why?</th>
            {/* <th>Best place to get?</th> */}
            {/* <th>Visited</th> */}
            <th>Becky opinion</th>
            <th>Who By</th>
            <th>Delete</th>
          </tr>
        </tfoot>
        <tbody>
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
                // removeFood={deleteFood}
                // tried={handleTried}
                // opinion={handleOpinion}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default VisitTable;
