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
    <div className="readTable">
      <table className="tableRead">
        <thead>
          <tr>
            <th className="tableHeadRead">Book? & Author?</th>
            <th className="tableHeadRead">Connected with?</th>
            <th className="tableHeadRead">Description?</th>
            <th className="tableHeadRead">Becky opinion</th>
            <th className="tableHeadRead">Who By</th>
            <th className="tableHeadRead">Delete</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th className="tableHeadRead">Book? & Author?</th>
            <th className="tableHeadRead">Connected?</th>
            <th className="tableHeadRead">Description?</th>
            <th className="tableHeadRead">Becky opinion</th>
            <th className="tableHeadRead">Who By</th>
            <th className="tableHeadRead">Delete</th>
          </tr>
        </tfoot>
        <tbody className="tableBodyRead">
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
