import React from "react";
import Input from "../styles/NewComponent.style";

export default function Form({ recipe, loading, lareff, HC }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("funciona");
      }}
    >
      <h1>HOLAAAAAA {recipe}</h1>
      <Input
        loading={loading}
        id="input"
        ref={lareff}
        value={recipe}
        onChange={HC}
      />
      <input type="submit" value="algo" />
    </form>
  );
}
