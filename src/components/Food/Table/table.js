import React from "react";

import "./table.css";

// chakra
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";

import Item from "../Item/item";

function FoodTable({ food, deleteFood, handleTried, handleOpinion }) {
  return (
    <Table
      id="table"
      // size="md"
      bg="purple.200"
      variant="striped"
      colorScheme="purple"
      // border="2px"
      // borderColor="black"
      // borderRadius="lg"
    >
      <Thead bg="purple.200">
        <Tr>
          <th>Food</th>
          {/* <th>Where/recipe?</th> */}
          {/* <th>Best place to get?</th> */}
          <th>Tried it</th>
          <th>Becky opinion</th>
          <th>Who By</th>
          <th>Delete</th>
        </Tr>
      </Thead>
      {/* <tfoot>
          <tr>
            <th>Food</th>
            <th>Where/recipe?</th>
            <th>Best place to get?</th>
            <th>Tried it</th>
            <th>Becky opinion</th>
            <th>Who By</th>
            <th>Delete</th>
          </tr>
        </tfoot> */}
      <Tbody id="tableBody">
        {food.map((item, index) => {
          return (
            <Item
              item={item}
              foodName={item.food}
              foodDone={item.isdone}
              recommendedBy={item.recommendedby}
              beckyOpinion={item.beckyopinion}
              index={index}
              id={item.id}
              key={item.id}
              removeFood={deleteFood}
              tried={handleTried}
              opinion={handleOpinion}
            />
          );
        })}
      </Tbody>
    </Table>
  );
}

export default FoodTable;
