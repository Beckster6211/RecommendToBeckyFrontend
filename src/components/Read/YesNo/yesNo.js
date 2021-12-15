import React from "react";
import "./yesNo.css";

function YesNo() {
  return (
    <div className="stayPageLists">
      <ul className="stayDislike">
        <p className="stayListParagraph">❌ Careful ❌</p>
        <li className="stayDislikeItem">
          Travel sick <small>(worse in cars and coaches)</small>
        </li>
        <li className="stayDislikeItem">
          <strong>HATE SPIDERS</strong>
        </li>
        <li className="stayDislikeItem">
          No car or ability to drive <small>(yet...)</small>
        </li>
        <li className="stayDislikeItem">
          Activities welcome{" "}
          <small>
            (but please don't physically kill me, no Everest base camp)
          </small>
        </li>
        <li className="stayDislikeItem">
          Small budget{" "}
          <small>
            (saving to buy Disney...<small>I wish</small>)
          </small>
        </li>
      </ul>
      <ul className="stayLike">
        <p className="stayListParagraph">✔️ Okay ✔️</p>
        <li className="stayLikeItem">
          Travel sick <small>(Not on boats and planes at all)</small>
        </li>
        <li className="stayLikeItem">Have a passport</li>
        <li className="stayLikeItem">
          Open to experiences <small>(always wanted to parachute jump)</small>
        </li>
        <li className="stayLikeItem">
          Don't mind roughing it travel/stay wise<small>(sensibly)</small>
        </li>
      </ul>
    </div>
  );
}

export default YesNo;
