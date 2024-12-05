import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (formData.name.length > 5 && /\S+@\S+\.\S+/.test(formData.email)) {
      setSuccessMessage(`Gracias ${formData.name}, te contactaremos cuanto antes vía mail.`);
      setError(false);

      // Limpiar los campos después de éxito
      setFormData({ name: "", email: "" });
    } else {
      setError(true);
      setSuccessMessage("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre Completo:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Ingresa tu nombre completo"
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Ingresa tu correo electrónico"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {error && <p style={{ color: "red" }}>Por favor verifica tu información nuevamente.</p>}
      {successMessage && (
        <p
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          {successMessage}
        </p>
      )}
    </div>
  );
};

export default Form;
