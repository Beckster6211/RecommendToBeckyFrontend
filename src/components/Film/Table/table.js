import React from "react";
import "./table.css";

import Item from "../Item/item";

function FilmTable({ film, handleTried, handleOpinion, deleteFilm }) {
  return (
    <div className="filmTable">
      <table className="tableFilm">
        <thead>
          <tr>
            <th className="tableHeadFilm">Film? & Provider?</th>
            <th className="tableHeadFilm">Connected with?</th>
            <th className="tableHeadFilm">Description?</th>
            <th className="tableHeadFilm">Becky opinion</th>
            <th className="tableHeadFilm">Who By</th>
            <th className="tableHeadFilm">Delete</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th className="tableHeadFilm">Film? & Provider?</th>
            <th className="tableHeadFilm">Connected?</th>
            <th className="tableHeadFilm">Description?</th>
            <th className="tableHeadFilm">Becky opinion</th>
            <th className="tableHeadFilm">Who By</th>
            <th className="tableHeadFilm">Delete</th>
          </tr>
        </tfoot>
        <tbody className="tableBodyFilm">
          {film.map((item, index) => {
            return (
              <Item
                item={item}
                film={item.film}
                filmProvider={item.provider}
                filmConnected={item.connected}
                filmGenre={item.genre}
                filmDescription={item.description}
                watched={item.watched}
                recommendedBy={item.recommendedby}
                beckyOpinion={item.beckyopinion}
                index={index}
                id={item.id}
                key={item.id}
                removeFilm={deleteFilm}
                tried={handleTried}
                opinion={handleOpinion}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FilmTable;
