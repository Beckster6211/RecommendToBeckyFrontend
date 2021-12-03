import React from "react";
import "./table.css";

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

function ReadTable({ read, handleTried, handleOpinion, deleteRead }) {
  return (
    <div className="stayTable">
      <table className="tableStay">
        <thead>
          <tr>
            <th className="tableHeadStay">Book? & Author?</th>
            <th className="tableHeadStay">Connected with?</th>
            <th className="tableHeadStay">Description?</th>
            <th className="tableHeadStay">Becky opinion</th>
            <th className="tableHeadStay">Who By</th>
            <th className="tableHeadStay">Delete</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th className="tableHeadStay">Book? & Author?</th>
            <th className="tableHeadStay">Connected?</th>
            <th className="tableHeadStay">Description?</th>
            <th className="tableHeadStay">Becky opinion</th>
            <th className="tableHeadStay">Who By</th>
            <th className="tableHeadStay">Delete</th>
          </tr>
        </tfoot>
        <tbody className="tableBodyStay">
          {read.map((item, index) => {
            return (
              <Item
                item={item}
                readBook={item.book}
                readAuthor={item.author}
                readConnected={item.connected}
                readGenre={item.genre}
                readNumberOfBooks={item.numberofbooks}
                readDescription={item.description}
                read={item.read}
                recommendedBy={item.recommendedby}
                beckyOpinion={item.beckyopinion}
                index={index}
                id={item.id}
                key={item.id}
                removeRead={deleteRead}
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

export default ReadTable;
