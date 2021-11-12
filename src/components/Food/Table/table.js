import React from "react";

// import "./table.css";

import Item from "../Item/item";

function FoodTable({ food, deleteFood, handleTried, handleOpinion }) {
  return (
    <div>
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
        <tbody id="tableBody" className="table-info align-middle">
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
