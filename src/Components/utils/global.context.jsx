import React, { createContext, useReducer, useEffect } from "react";
export const initialState = { theme: "light", data: [], favorites: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "TOGGLE_FAV":
      const isAlreadyFav = state.favorites.some((fav) => fav.id === action.payload.id);
      const updatedFavorites = isAlreadyFav
        ? state.favorites.filter((fav) => fav.id !== action.payload.id) // Eliminar si ya está
        : [...state.favorites, action.payload]; // Agregar si no está
      localStorage.setItem("favs", JSON.stringify(updatedFavorites)); // Guardar en localStorage
      return { ...state, favorites: updatedFavorites };
    default:
      return state;
  }
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        dispatch({ type: "SET_DATA", payload: data });

        // Cargar favoritos desde localStorage
        const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
        dispatch({ type: "TOGGLE_FAV", payload: storedFavs });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
