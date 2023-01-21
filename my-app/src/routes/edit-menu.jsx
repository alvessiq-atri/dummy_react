import React from "react";
import { useParams } from "react-router-dom";
import menu from "../food-data/menu";

export default function EditMenu() {
  let { plateId } = useParams();

  console.log("hey");
  console.log(menu[plateId - 1]);
  const plate = menu[plateId - 1];

  return (
    <div>
      This is plate with id: {plateId}.<h1> {plate.name}</h1>
    </div>
  );
}
