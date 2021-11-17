import React, { useState } from "react";

import "./item.css";

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

function Item({
  foodName,
  foodWhere,
  foodDone,
  recommendedBy,
  beckyOpinion,
  removeFood,
  index,
  id,
  item,
  tried,
  opinion,
}) {
  // const [eaten, setEaten] = useState(false);

  return (
    <tr className="item">
      <td>
        <p>{foodName}</p>
      </td>
      <td>
        <textarea value={foodWhere} rows="3" readOnly></textarea>
      </td>
      <td>
        <input
          className="checkBox"
          type="checkbox"
          // value={foodDone}
          checked={foodDone}
          onChange={() => {
            tried(id, item);
          }}
        />
      </td>
      <td>
        <p>{beckyOpinion}</p>
        {/* not sure about buttons */}
        <button
          name="yes"
          onClick={(event) => {
            opinion(event, id, item);
          }}
        >
          😋
        </button>
        <button
          name="alright"
          onClick={(event) => {
            opinion(event, id, item);
          }}
        >
          🤔
        </button>
        <button
          name="no"
          onClick={(event) => {
            opinion(event, id, item);
          }}
        >
          🤮
        </button>

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
          🗑️
        </button>
      </td>
    </tr>
  );
}

export default Item;
