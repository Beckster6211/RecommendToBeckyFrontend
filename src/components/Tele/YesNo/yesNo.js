import React from "react";
import "./yesNo.css";

function YesNo() {
  return (
    <div className="telePageLists">
      <ul className="teleDislike">
        <p className="teleListParagraph">❌ No ❌</p>
        <li className="teleDislikeItem">
          I don't like horror or scary{" "}
          <small>I like my heart beating inside my body</small>
        </li>
        <li className="teleDislikeItem">
          I can be a bit of a wuss{" "}
          <small>I stopped watching Constantine after 6 minutes.</small>
        </li>
        <li className="teleDislikeItem">
          I don't like pointless blood and guts{" "}
          <small>
            I'm not squeamish I just don't enjoy pointless ones{" "}
            <strong>
              <q>Let's see how many different ways can kill each</q>
            </strong>{" "}
          </small>
          No thank you
        </li>
        <li className="teleDislikeItem">
          Arachnophobic <strong>I DON'T LIKE SPIDERS</strong>
        </li>
      </ul>
      <ul className="teleLike">
        <p className="teleListParagraph">✔️ Yes ✔️</p>
        <li className="teleLikeItem">
          I like fiction and non-fiction
          <small>
            (If it's got some supernatural/magic in, fine with that)
          </small>
        </li>
        <li className="teleLikeItem">I enjoy dystopian</li>
        <li className="teleLikeItem">
          I enjoy some tv based on true events or people{" "}
          <small>
            Sometimes surprisingly like war or space race or political
          </small>
        </li>
        <li className="teleLikeItem">
          I watch before read <small>I compare the book after the watch</small>
        </li>
        <li className="teleLikeItem">I watched quite a lot of US tele </li>
        <li className="teleLikeItem">
          I'm not a girly girl{" "}
          <small>
            {" "}
            my brothers got me into superhero stuff (still have to finish The
            Flash)
          </small>
        </li>
      </ul>
    </div>
  );
}

export default YesNo;
