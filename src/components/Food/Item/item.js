import React, { useState } from "react";

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
    <Tr
      _hover={{
        background: "white",
        color: "teal.500",
      }}
    >
      <td>
        <p>{foodName}</p>
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
    </Tr>
  );
}

export default Item;
