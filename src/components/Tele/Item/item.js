import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./item.css";

function Item({
  teleTvShow,
  teleTvProvider,
  teleConnected,
  teleGenre,
  teleNumberOfSeries,
  teleDescription,
  binged,
  recommendedBy,
  beckyOpinion,
  removeTele,
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
        <p className="teleItem">
          {teleTvShow} <br />({teleNumberOfSeries})
        </p>
        <p className="teleItem">{teleTvProvider}</p>
      </td>
      <td>
        <textarea
          className="teleItemTextarea"
          defaultValue={teleConnected}
          rows="6"
          readOnly
        ></textarea>
      </td>
      <td>
        <textarea
          className="teleItemTextarea"
          defaultValue={teleDescription}
          rows="6"
          readOnly
        ></textarea>
      </td>
      {user === undefined ? (
        <td>
          <input
            className="teleCheckBox"
            type="checkbox"
            checked={binged}
            disabled={enableIfMe(user)}
          />
          <p className="teleBeckyOpinion">{beckyOpinion}</p>
          <button
            id="yesButton"
            name="yes"
            onClick={() => {
              console.log("Thats just for me HaHa");
            }}
          >
            🤩
          </button>
          <button
            id="alrightButton"
            name="alright"
            onClick={() => {
              console.log("Thats just for me HaHa");
            }}
          >
            🤔
          </button>
          <button
            id="noButton"
            name="no"
            onClick={() => {
              console.log("Thats just for me HaHa");
            }}
          >
            😩
          </button>
        </td>
      ) : (
        <td>
          <input
            className="teleCheckBox"
            type="checkbox"
            checked={binged}
            onChange={() => {
              tried(id, item);
            }}
          />
          <p className="teleBeckyOpinion">{beckyOpinion}</p>
          <button
            id="yesButton"
            name="yes"
            onClick={(event) => {
              opinion(event, id, item);
            }}
          >
            🤩
          </button>
          <button
            id="alrightButton"
            name="alright"
            onClick={(event) => {
              opinion(event, id, item);
            }}
          >
            🤔
          </button>
          <button
            id="noButton"
            name="no"
            onClick={(event) => {
              opinion(event, id, item);
            }}
          >
            😩
          </button>
        </td>
      )}
      <td>
        <p className="teleItem">{recommendedBy}</p>
      </td>
      <td>
        <button
          id="teleDelete"
          onClick={() => {
            removeTele(index, id);
          }}
        >
          🗑️
        </button>
      </td>
    </tr>
  );
}

export default Item;
