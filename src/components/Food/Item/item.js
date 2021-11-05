import React, { useState } from "react";

function Item({
  foodName,
  foodDone,
  recommendedBy,
  removeFood,
  index,
  id,
  item,
  tried,
}) {
  // const [eaten, setEaten] = useState(false);

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
        <input
          type="checkbox"
          // value={foodDone}
          checked={foodDone}
          onChange={() => {
            tried(id, item);
          }}
        />
      </td>
      <td>
        {/* not sure about buttons */}
        <button>Yes</button>
        <button>No</button>
        <button>Alright</button>
        {/* <select>
          <option>Yes</option>
          <option>No</option>
          <option>Alright?</option>
        </select> */}
      </td>
      <td>
        <p>{recommendedBy}</p>
      </td>
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
