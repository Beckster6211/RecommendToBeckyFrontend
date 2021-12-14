import React, { useState, useEffect } from "react";
import TeleTable from "./Table/table";
import TeleForm from "./Form/form";

import "./tele.css";

function Tele() {
  const [tele, setTele] = useState([]);
  console.log({ tele });
  const [form, setForm] = useState({});
  const [updatePage, setUpdatePage] = useState(false);

  useEffect(() => {
    fetch("https://recommend-to-becky.herokuapp.com/tele")
      .then((response) => response.json())
      .then((response) => {
        setTele(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [updatePage]);

  function handleChange(event) {
    let inputName = event.target.name;
    console.log({ inputName });
    // setFoodName(inputName);
    // console.log({ foodName });
    let vl = event.target.value;
    console.log({ vl });
    console.log(`${inputName}: ${vl}`);
    // setFoodValue(fdvl);
    // console.log({ foodValue });
    // console.log(`${foodValue}`);
    // setNewFood({ foodName: foodValue, isdone: false });
    setForm({ ...form, [event.target.id]: event.target.value });
    console.log({ form });
    // setForm({ [inputName]: vl, isdone: false, [inputName]: "someone" });
    // console.log({ form });
  }

  async function handleTried(id, object) {
    console.log("checkbox ticked");
    // setIsDone(!boolean);
    console.log(object);
    // console.log(object.isdone);
    // console.log({ ...object });
    if (object.binged === true) {
      object.binged = false;
      console.log(object.binged);
      // console.log((object.isdone = false));
      // return { ...object, isdone: false };
    } else if (object.binged === false) {
      object.binged = true;
      console.log(object.binged);
      // console.log((object.isdone = true));
      // return { ...object, isdone: true };
    }
    // return { ...object };
    // console.log({ isDone });
    // setIsDone(!isDone);
    // console.log({ isDone });
    const response = await fetch(
      `https://recommend-to-becky.herokuapp.com/tele/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tvShow: object.tvshow,
          provider: object.provider,
          connected: object.connected,
          genre: object.genre,
          numberOfSeries: object.numberofseries,
          description: object.description,
          recommendedBy: object.recommendedby,
          beckyOpinion: object.beckyopinion,
          binged: object.binged,
        }),
      }
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
    setUpdatePage(!updatePage);
  }

  async function handleOpinion(event, id, object) {
    // console.log("button clicked");
    console.log({ id });
    // console.log({ object });
    console.log(event);
    if (event.target.name === "yes") {
      console.log("yes button clicked");
      console.log(object.beckyopinion);
      object.beckyopinion = "💖";
      console.log(object.beckyopinion);
    } else if (event.target.name === "no") {
      console.log("no button clicked");
      console.log(object.beckyopinion);
      object.beckyopinion = "😩";
      console.log(object.beckyopinion);
    } else if (event.target.name === "alright") {
      console.log("alright button clicked");
      console.log(object.beckyopinion);
      object.beckyopinion = "🤔";
      console.log(object.beckyopinion);
    }
    const response = await fetch(
      `https://recommend-to-becky.herokuapp.com/tele/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tvShow: object.tvshow,
          provider: object.provider,
          connected: object.connected,
          genre: object.genre,
          numberOfSeries: object.numberofseries,
          description: object.description,
          recommendedBy: object.recommendedby,
          beckyOpinion: object.beckyopinion,
          binged: object.binged,
        }),
      }
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
    setUpdatePage(!updatePage);
  }

  async function handleSubmit(event) {
    // refreshes form, empties form inputs
    window.location.reload();
    console.log("submit pressed");
    console.log(form);
    event.preventDefault();
    const response = await fetch(
      "https://recommend-to-becky.herokuapp.com/tele",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
    setUpdatePage(!updatePage);
  }

  async function removeTele(index, id) {
    setTele([...tele.slice(0, index), ...tele.slice(index + 1)]);
    let response = await fetch(
      `https://recommend-to-becky.herokuapp.com/tele/${id}`,
      {
        method: "DELETE",
      }
    );
    let data = await response.json();
    setUpdatePage(!updatePage);
    console.log({ data });
    console.log({ tele });
  }

  return (
    <div className="telePage">
      {/* <h3>Binge</h3> */}
      {/* <div>
        <details>
          <summary>Stay Video</summary>
          <video></video>
        </details>
      </div> */}

      <div className="telePageLists">
        <ul className="teleDislike">
          <p className="teleListParagraph">❌ No ❌</p>
          <li className="teleDislikeItem">
            I don't like horror or scary{" "}
            <small>I like my heart beating inside my body</small>
          </li>
          <li className="teleDislikeItem">
            I can be a bit of a wuss{" "}
            <small>A Quiet Place 1 is as scary as I'll go.</small>
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
            I watch before read{" "}
            <small>I compare the book after the watch</small>
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

      <TeleForm handleChange={handleChange} handleSubmit={handleSubmit} />
      <TeleTable
        tele={tele}
        handleTried={handleTried}
        handleOpinion={handleOpinion}
        deleteTele={removeTele}
      />
    </div>
  );
}

export default Tele;
