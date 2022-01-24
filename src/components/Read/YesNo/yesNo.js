import React from "react";
import "./yesNo.css";

function YesNo() {
  return (
    <div className="readPageLists">
      <ul className="readDislike">
        <p className="readListParagraph">❌ Maybe Not ❌</p>
        <li className="readDislikeItem">
          I don't like stuff thats too heavy (or in depth)
        </li>
        <li className="readDislikeItem">
          I need something gripping straight away
        </li>
      </ul>
      <ul className="readLike">
        <p className="readListParagraph">✔️ Maybe ✔️</p>
        <li className="readLikeItem">
          I like books based/inspired by a tv series or film
        </li>
        <li className="readLikeItem">
          I like mythology{" "}
          <small>
            I enjoy stories of why things are named as they are, alot traced to
            myth
          </small>
        </li>
        <li className="readLikeItem">Open to different genres</li>
      </ul>
    </div>
  );
}

export default YesNo;
