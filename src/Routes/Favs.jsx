import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main className={state.theme === "dark" ? "dark" : "light"}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favorites.map((fav) => (
          <Card key={fav.id} {...fav} />
        ))}
      </div>
    </main>
  );
};

export default Favs;
