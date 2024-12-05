import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
  const { id } = useParams(); // Obtener el parámetro dinámico de la URL
  const { state } = useContext(ContextGlobal); // Consumir el contexto global para aplicar el tema
  const [dentist, setDentist] = useState(null); // Estado para almacenar la información del dentista

  // Fetch para obtener la información del dentista específico
  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.error("Error fetching dentist details:", error);
      }
    };
    fetchDentist();
  }, [id]);

  // Renderizado condicional mientras se cargan los datos
  if (!dentist) return <p>Loading...</p>;

  return (
    <div className={state.theme}> {/* Aplicar tema claro u oscuro */}
      <h1>Dentist Details</h1>
      <div>
        <h2>{dentist.name}</h2>
        <p><strong>Email:</strong> {dentist.email}</p>
        <p><strong>Phone:</strong> {dentist.phone}</p>
        <p><strong>Website:</strong> <a href={`http://${dentist.website}`} target="_blank" rel="noopener noreferrer">{dentist.website}</a></p>
      </div>
    </div>
  );
};

export default Detail;
