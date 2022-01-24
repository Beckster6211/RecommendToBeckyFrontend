import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./item.css";

function Item({
  film,
  filmProvider,
  filmConnected,
  filmGenre,
  filmDescription,
  watched,
  recommendedBy,
  beckyOpinion,
  removeFilm,
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
        <p className="filmItem">{film}</p>
        <p className="filmItem">{filmProvider}</p>
      </td>
      <td>
        <textarea
          className="filmItemTextarea"
          defaultValue={filmConnected}
          rows="6"
          readOnly
        ></textarea>
      </td>
      <td>
        <textarea
          className="filmItemTextarea"
          defaultValue={filmDescription}
          rows="6"
          readOnly
        ></textarea>
      </td>
      {user === undefined ? (
        <td>
          <input
            className="filmCheckBox"
            type="checkbox"
            checked={watched}
            disabled={enableIfMe(user)}
          />
          <p className="filmBeckyOpinion">{beckyOpinion}</p>
          <button
            id="yesButton"
            name="yes"
            onClick={() => {
              console.log("Thats just for me HaHa");
            }}
          >
            😍
          </button>
          <button
            id="alrightButton"
            name="alright"
            onClick={() => {
              console.log("Thats just for me HaHa");
            }}
          >
            😕
          </button>
          <button
            id="noButton"
            name="no"
            onClick={() => {
              console.log("Thats just for me HaHa");
            }}
          >
            🥱
          </button>
        </td>
      ) : (
        <td>
          <input
            className="filmCheckBox"
            type="checkbox"
            checked={watched}
            onChange={() => {
              tried(id, item);
            }}
          />
          <p className="filmBeckyOpinion">{beckyOpinion}</p>
          <button
            id="yesButton"
            name="yes"
            onClick={(event) => {
              opinion(event, id, item);
            }}
          >
            😍
          </button>
          <button
            id="alrightButton"
            name="alright"
            onClick={(event) => {
              opinion(event, id, item);
            }}
          >
            😕
          </button>
          <button
            id="noButton"
            name="no"
            onClick={(event) => {
              opinion(event, id, item);
            }}
          >
            🥱
          </button>
        </td>
      )}
      <td>
        <p className="filmItem">{recommendedBy}</p>
      </td>
      <td>
        <button
          id="filmDelete"
          onClick={() => {
            removeFilm(index, id);
          }}
        >
          🗑️
        </button>
      </td>
    </tr>
  );
}

export default Item;
