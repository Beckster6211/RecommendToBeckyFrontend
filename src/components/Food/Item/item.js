import React, { useState } from "react";

function Item({ foodName, foodDone, removeFood, index, id }) {
  //   const [eaten, setEaten] = useState();
  //   console.log(eaten);

  //   function isEaten(boolean) {
  //     if (boolean === false) {
  //       setEaten("Tick");
  //     } else if (boolean === true) {
  //       setEaten("Cross");
  //     }
  //   }

  //   isEaten(foodDone);
  return (
    <tr>
      <td>
        <p>{foodName}</p>
        {/* <p>{foodDone}</p> */}
      </td>
      {/* <td>
        <p>Somewhere</p>
      </td> */}
      <td>
        <input type="checkbox" value={foodDone} />
      </td>
      {/* <td>
      not sure about buttons
        <button>yes</button>
        <button>no</button>
        <button>alright</button>
        <select>
          <option>Yes</option>
          <option>No</option>
          <option>Alright?</option>
        </select>
      </td> */}
      {/* <td>
        <p>Someone</p>
      </td> */}
      <td>
        <button
          onClick={() => {
            removeFood(index, id);
          }}
        >
          X
        </button>
      </td>
    </tr>
  );
}

export default Item;
