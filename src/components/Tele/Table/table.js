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

function TeleTable({ tele, handleTried, handleOpinion, deleteTele }) {
  return (
    <div className="teleTable">
      <table className="tableTele">
        <thead>
          <tr>
            <th className="tableHeadTele">Tv Show? & Provider?</th>
            <th className="tableHeadTele">Connected with?</th>
            <th className="tableHeadTele">Description?</th>
            <th className="tableHeadTele">Becky opinion</th>
            <th className="tableHeadTele">Who By</th>
            <th className="tableHeadTele">Delete</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th className="tableHeadTele">Tv Show? & Provider?</th>
            <th className="tableHeadTele">Connected?</th>
            <th className="tableHeadTele">Description?</th>
            <th className="tableHeadTele">Becky opinion</th>
            <th className="tableHeadTele">Who By</th>
            <th className="tableHeadTele">Delete</th>
          </tr>
        </tfoot>
        <tbody className="tableBodyTele">
          {tele.map((item, index) => {
            return (
              <Item
                item={item}
                teleTvShow={item.tvshow}
                teleTvProvider={item.provider}
                teleConnected={item.connected}
                teleGenre={item.genre}
                teleNumberOfSeries={item.numberofseries}
                teleDescription={item.description}
                binged={item.binged}
                recommendedBy={item.recommendedby}
                beckyOpinion={item.beckyopinion}
                index={index}
                id={item.id}
                key={item.id}
                removeTele={deleteTele}
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

export default TeleTable;
