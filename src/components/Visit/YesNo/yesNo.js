import React from "react";
import "./yesNo.css";

function YesNo() {
  return (
    <div className="visitPageLists">
      <ul className="visitDislike">
        <p className="visitListParagraph">❌ Careful ❌</p>
        <li className="visitDislikeItem">
          Travel sick <small>(worse in cars and coaches)</small>
        </li>
        <li className="visitDislikeItem">
          <strong>HATE SPIDERS</strong>
        </li>
        <li className="visitDislikeItem">
          No car or ability to drive <small>(yet...)</small>
        </li>
        <li className="visitDislikeItem">
          Activities welcome{" "}
          <small>
            (but please don't physically kill me, no Everest base camp)
          </small>
        </li>
        <li className="visitDislikeItem">
          Small budget{" "}
          <small>
            (saving to buy Disney...<small>I wish</small>)
          </small>
        </li>
      </ul>
      <ul className="visitLike">
        <p className="visitListParagraph">✔️ Okay ✔️</p>
        <li className="visitLikeItem">
          Travel sick <small>(Not on boats and planes at all)</small>
        </li>
        <li className="visitLikeItem">Have a passport</li>
        <li className="visitLikeItem">
          Open to experiences <small>(always wanted to parachute jump)</small>
        </li>
        <li className="visitLikeItem">
          Don't mind roughing it travel/stay wise<small>(sensibly)</small>
        </li>
      </ul>
    </div>
  );
}

export default YesNo;
