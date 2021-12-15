import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./item.css";

function Item({
  visitWhat,
  visitLocation,
  visitWhy,
  visited,
  recommendedBy,
  beckyOpinion,
  removeVisit,
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
        <p>{visitWhat}</p>
        <textarea defaultValue={visitLocation} rows="3" readOnly></textarea>
      </td>
      <td>
        <p>{visitWhy}</p>
      </td>
      {user === undefined ? (
        <td>
          <input
            className="checkBox visitBeckyOpinion"
            type="checkbox"
            checked={visited}
            disabled={enableIfMe(user)}
          />
          <p className="visitBeckyOpinion">{beckyOpinion}</p>
          <button
            id="yesButton"
            name="yes"
            onClick={() => {
              console.log("Thats just for me HaHa");
            }}
          >
            👍
          </button>
          <button
            name="alright"
            onClick={() => {
              console.log("Thats just for me HaHa");
            }}
          >
            🤙
          </button>
          <button
            name="no"
            onClick={() => {
              console.log("Thats just for me HaHa");
            }}
          >
            👎
          </button>
        </td>
      ) : (
        <td>
          <input
            className="checkBox visitBeckyOpinion"
            type="checkbox"
            checked={visited}
            onChange={() => {
              tried(id, item);
            }}
          />
          <p className="visitBeckyOpinion">{beckyOpinion}</p>
          <button
            id="yesButton"
            name="yes"
            onClick={(event) => {
              opinion(event, id, item);
            }}
          >
            👍
          </button>
          <button
            name="alright"
            onClick={(event) => {
              opinion(event, id, item);
            }}
          >
            🤙
          </button>
          <button
            name="no"
            onClick={(event) => {
              opinion(event, id, item);
            }}
          >
            👎
          </button>
        </td>
      )}
      <td>
        <p>{recommendedBy}</p>
      </td>
      <td>
        <button
          onClick={() => {
            removeVisit(index, id);
          }}
        >
          🗑️
        </button>
      </td>
    </tr>
  );
}

export default Item;
