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
  // console.log(user);

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
      {/* <td>
        <p>hi</p>
      </td> */}
      <td>
        <p>{foodName}</p>
      </td>
      {/* <td>
        <p>{foodWhere}</p>
      </td> */}
      <td>
        <textarea defaultValue={foodWhere} rows="6" readOnly></textarea>
      </td>
      {/* {user === undefined ? (
        <td>
          <input
            className="checkBox"
            type="checkbox"
            // value={foodDone}
            checked={foodDone}
            // onChange={() => {
            //   console.log("Thats just for me HaHa");
            // }}
            // onChange={() => {
            //   tried(id, item);
            // }}
            disabled={enableIfMe(user)}
          />
        </td>
      ) : (
        <td>
          <input
            className="checkBox"
            type="checkbox"
            // value={foodDone}
            checked={foodDone}
            onChange={() => {
              tried(id, item);
            }}
            // disabled={enableIfMe(user)}
          />
        </td>
      )} */}
      {user === undefined ? (
        <td>
          <input
            className="checkBox foodBeckyOpinion"
            type="checkbox"
            // value={foodDone}
            checked={foodDone}
            // onChange={() => {
            //   console.log("Thats just for me HaHa");
            // }}
            // onChange={() => {
            //   tried(id, item);
            // }}
            disabled={enableIfMe(user)}
          />
          <p className="foodBeckyOpinion">{beckyOpinion}</p>
          {/* not sure about buttons */}
          <button
            id="yesButton"
            name="yes"
            onClick={() => {
              console.log("Thats just for me HaHa");
            }}
            // onClick={(event) => {
            //   opinion(event, id, item);
            // }}
            // disabled={enableIfMe(user)}
          >
            😋
          </button>
          <button
            name="alright"
            onClick={() => {
              console.log("Thats just for me HaHa");
            }}
            // onClick={(event) => {
            //   opinion(event, id, item);
            // }}
            // disabled={enableIfMe(user)}
          >
            🤔
          </button>
          <button
            name="no"
            onClick={() => {
              console.log("Thats just for me HaHa");
            }}
            // onClick={(event) => {
            //   opinion(event, id, item);
            // }}
            // disabled={enableIfMe(user)}
          >
            🤮
          </button>

          {/* <select>
          <option>Yes</option>
          <option>No</option>
          <option>Alright?</option>
        </select> */}
        </td>
      ) : (
        <td>
          <input
            className="checkBox foodBeckyOpinion"
            type="checkbox"
            // value={foodDone}
            checked={foodDone}
            onChange={() => {
              tried(id, item);
            }}
            // disabled={enableIfMe(user)}
          />
          <p className="foodBeckyOpinion">{beckyOpinion}</p>
          {/* not sure about buttons */}
          <button
            id="yesButton"
            name="yes"
            onClick={(event) => {
              opinion(event, id, item);
            }}
            // disabled={enableIfMe(user)}
          >
            😋
          </button>
          <button
            name="alright"
            onClick={(event) => {
              opinion(event, id, item);
            }}
            // disabled={enableIfMe(user)}
          >
            🤔
          </button>
          <button
            name="no"
            onClick={(event) => {
              opinion(event, id, item);
            }}
            // disabled={enableIfMe(user)}
          >
            🤮
          </button>

          {/* <select>
          <option>Yes</option>
          <option>No</option>
          <option>Alright?</option>
        </select> */}
        </td>
      )}
      {/* <td>
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
      </td> */}
      {/* <td>
        <p>{beckyOpinion}</p>
        {/* not sure about buttons */}
      {/* <button
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
        </button> */}

      {/* <select>
          <option>Yes</option>
          <option>No</option>
          <option>Alright?</option>
        </select> */}
      {/* </td> */}
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
