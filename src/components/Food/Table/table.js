import React from "react";

import "./table.css";

import Item from "../Item/item";

function FoodTable({ food, deleteFood, handleTried, handleOpinion }) {
  return (
    <div className="foodTable">
      <table className="tableFood">
        <thead>
          <tr>
            <th className="tableHeadFood">Food</th>
            <th className="tableHeadFood">Where/Recipe?</th>
            <th className="tableHeadFood">Becky opinion</th>
            <th className="tableHeadFood">Who By</th>
            <th className="tableHeadFood">Delete</th>
          </tr>
        </thead>
        <tfoot className="tableHeadFood">
          <tr>
            <th className="tableHeadFood">Food</th>
            <th className="tableHeadFood">Where/Recipe?</th>
            <th className="tableHeadFood">Becky opinion</th>
            <th className="tableHeadFood">Who By</th>
            <th className="tableHeadFood">Delete</th>
          </tr>
        </tfoot>
        <tbody className="tableBodyFood">
          {food.map((item, index) => {
            return (
              <Item
                item={item}
                foodName={item.food}
                foodWhere={item.recipe}
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
