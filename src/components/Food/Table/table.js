import React from "react";

// bootstrap
// import Table from "react-bootstrap/Table";

// import "./table.css";

import Item from "../Item/item";

function FoodTable({ food, deleteFood, handleTried, handleOpinion }) {
  return (
    <div>
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
      {/*
      <div id="div" className="table-responsive">
        {/* <h1>Food Table</h1>
        <Table
          id="table"
          className="table-primary table-striped table-bordered table-hover table-sm"
          // striped
          // bordered
          // hover
          // size="sm"
          // responsive="sm"
        >
          <thead id="tableHeading" className="align-middle ">
            <tr>
              <th>Food</th>
              <th>Where/recipe?</th> 
              <th>Best place to get?</th>
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
        </Table>
      </div>*/}
    </div>
  );
}

export default FoodTable;
