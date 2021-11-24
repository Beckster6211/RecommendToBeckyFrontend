import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./item.css";

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

  const { user } = useAuth0();
  console.log(user);

  // function seeIfWorks(user) {
  //   if (user === undefined) {
  //     console.log("It's undefined");
  //   } else if (user.name === "Beckster") {
  //     console.log("It's Becky");
  //   }
  // }
  // seeIfWorks(user);

  function enableIfMe(user) {
    if (user === undefined) {
      let enabled = true;
      return enabled;
    } else if (user.name === "Beckster") {
      let disabled = false;
      return disabled;
    }
  }

  return (
    <tr className="item">
      <td>
        <p>{foodName}</p>
      </td>
      <td>
        <textarea defaultValue={foodWhere} rows="3" readOnly></textarea>
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
          disabled={enableIfMe(user)}
        />
      </td>
      <td>
        <p>{beckyOpinion}</p>
        {/* not sure about buttons */}
        <button
          id="yesButton"
          name="yes"
          onClick={(event) => {
            opinion(event, id, item);
          }}
          disabled={enableIfMe(user)}
        >
          😋
        </button>
        <button
          name="alright"
          onClick={(event) => {
            opinion(event, id, item);
          }}
          disabled={enableIfMe(user)}
        >
          🤔
        </button>
        <button
          name="no"
          onClick={(event) => {
            opinion(event, id, item);
          }}
          disabled={enableIfMe(user)}
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
