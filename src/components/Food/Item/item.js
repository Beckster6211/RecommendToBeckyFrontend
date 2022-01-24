import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./item.css";

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
      <td>
        <p className="foodItem">{foodName}</p>
      </td>
      <td>
        <textarea
          className="foodItemTextarea"
          defaultValue={foodWhere}
          rows="6"
          readOnly
        ></textarea>
      </td>
      {user === undefined ? (
        <td>
          <input
            className="foodCheckBox"
            type="checkbox"
            checked={foodDone}
            disabled={enableIfMe(user)}
          />
          <p className="foodBeckyOpinion">{beckyOpinion}</p>
          <button
            id="yesButton"
            name="yes"
            onClick={() => {
              console.log("Thats just for me HaHa");
            }}
          >
            😋
          </button>
          <button
            id="alrightButton"
            name="alright"
            onClick={() => {
              console.log("Thats just for me HaHa");
            }}
          >
            🤫
          </button>
          <button
            id="noButton"
            name="no"
            onClick={() => {
              console.log("Thats just for me HaHa");
            }}
          >
            🤮
          </button>
        </td>
      ) : (
        <td>
          <input
            className="foodCheckBox"
            type="checkbox"
            checked={foodDone}
            onChange={() => {
              tried(id, item);
            }}
          />
          <p className="foodBeckyOpinion">{beckyOpinion}</p>
          {/* not sure about buttons */}
          <button
            id="yesButton"
            name="yes"
            onClick={(event) => {
              opinion(event, id, item);
            }}
          >
            😋
          </button>
          <button
            id="alrightButton"
            name="alright"
            onClick={(event) => {
              opinion(event, id, item);
            }}
          >
            🤫
          </button>
          <button
            id="noButton"
            name="no"
            onClick={(event) => {
              opinion(event, id, item);
            }}
          >
            🤮
          </button>
        </td>
      )}
      <td>
        <p className="foodItem">{recommendedBy}</p>
      </td>
      <td>
        <button
          id="foodDelete"
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
