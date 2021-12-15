import React from "react";
import "./yesNo.css";

function YesNo() {
  return (
    <div className="foodPageLists">
      <ul className="foodDislike">
        <p className="foodListParagraph">❌ Dislikes ❌</p>
        <li className="foodDislikeItem">Peanuts</li>
        <li className="foodDislikeItem">
          Cheese <small>(when overpowering e.g burger)</small>
        </li>
        <li className="foodDislikeItem">
          Chilli <small>(I don't like the beans)</small>
        </li>
        <li className="foodDislikeItem">
          Spicy/Hot <small>(Not a fan)</small>
        </li>
        <li className="foodDislikeItem">Coconut</li>
        <li className="foodDislikeItem">
          Some fish <small>(prawns, tuna...)</small>
        </li>
        <li className="foodDislikeItem">
          Some fruit{" "}
          <small>
            (pineapple <i>shouldn't be near pizza</i>)
          </small>
        </li>
        <li className="foodDislikeItem">
          Marmite{" "}
          <small>
            (<strong>Disgusting</strong>
          </small>
          )
        </li>
        <li className="foodDislikeItem">
          Alcohol (<small>unless you can't really taste it</small>)
        </li>
      </ul>
      <ul className="foodLike">
        <p className="foodListParagraph">✔️ Likes ✔️</p>
        <li className="foodLikeItem">
          Sweet over savory <small>(pancakes over full english)</small>
        </li>
        <li className="foodLikeItem">
          Cheese <small>(on pizza & lasagne)</small>
        </li>
        <li className="foodLikeItem">
          Meat eater <small>(open to meat alternatives)</small>
        </li>
        <li className="foodLikeItem">
          More medium/mid well{" "}
          <small>
            (I like crispy{" "}
            <strong>
              Not Burnt <i>"CRISPY"</i>
            </strong>
            )
          </small>
        </li>
        <li className="foodLikeItem">
          Some fish <small>(salmon, cod...)</small>
        </li>
      </ul>
    </div>
  );
}

export default YesNo;
