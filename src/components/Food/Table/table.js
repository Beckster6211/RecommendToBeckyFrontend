import React from "react";

import Item from "../Item/item";

function FoodTable({ food, deleteFood }) {
  return (
    <div>
      <h1>Food Table</h1>
      <table>
        <thead>
          <tr>
            <th>Food</th>
            {/* <th>Best place to get?</th> */}
            <th>Tried it</th>
            {/* <th>Did Becky like it?</th> */}
            {/* <th>Recommended By</th> */}
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {food.map((item, index) => {
            return (
              <Item
                foodName={item.food}
                foodDone={item.isdone}
                index={index}
                id={item.id}
                key={item.id}
                removeFood={deleteFood}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FoodTable;
