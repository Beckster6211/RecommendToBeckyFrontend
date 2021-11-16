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

function FoodTable({ food, deleteFood, handleTried, handleOpinion }) {
  return (
    <div className="foodTable">
      <table>
        <thead>
          <tr>
            <th>Food</th>
            {/* <th>Where/recipe?</th> */}
            {/* <th>Best place to get?</th> */}
            <th>Tried it</th>
            <th>Becky opinion</th>
            <th>Who By</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Food</th>
            {/* <th>Where/recipe?</th>
            <th>Best place to get?</th> */}
            <th>Tried it</th>
            <th>Becky opinion</th>
            <th>Who By</th>
            <th>Delete</th>
          </tr>
        </tfoot>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
}

export default FoodTable;
