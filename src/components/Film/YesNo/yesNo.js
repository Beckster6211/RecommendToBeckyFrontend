import React from "react";
import "./yesNo.css";

function YesNo() {
  return (
    <div className="filmPageLists">
      <ul className="filmDislike">
        <p className="filmListParagraph">❌ No ❌</p>
        <li className="filmDislikeItem">
          I don't like horror or scary{" "}
          <small>I like my heart beating inside my body</small>
        </li>
        <li className="filmDislikeItem">
          I can be a bit of a wuss{" "}
          <small>A Quiet Place 1 is as scary as I'll go.</small>
        </li>
        <li className="filmDislikeItem">
          I don't like pointless blood and guts{" "}
          <small>
            I'm not squeamish I just don't enjoy pointless ones{" "}
            <strong>
              <q>Let's see how many different ways can kill each</q>
            </strong>{" "}
          </small>
          No thank you
        </li>
        <li className="filmDislikeItem">
          Arachnophobic <strong>I DON'T LIKE SPIDERS</strong>
        </li>
      </ul>
      <ul className="filmLike">
        <p className="filmListParagraph">✔️ Yes ✔️</p>
        <li className="filmLikeItem">
          I like fiction and non-fiction
          <small>
            (If it's got some supernatural/magic in, fine with that)
          </small>
        </li>
        <li className="filmLikeItem">I enjoy dystopian</li>
        <li className="filmLikeItem">
          I enjoy some films based on true events or people{" "}
          <small>
            Sometimes surprisingly like war or space race or political
          </small>
        </li>
        <li className="filmLikeItem">
          I watch before read <small>I compare the book after the watch</small>
        </li>
        <li className="filmLikeItem">
          I'm not a girly girl{" "}
          <small> my brothers got me into superhero stuff</small>{" "}
          <strong>No 1 Black Widow</strong>
        </li>
      </ul>
    </div>
  );
}

export default YesNo;
