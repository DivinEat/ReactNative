import React, { useContext } from "react";
import Button from "../lib/Button";
import { ListContext } from "../../contexts/ListContext";
import { Link } from "react-router-dom";

export default function ListItem({ theme, item, onEdit }) {
  const { deleteElement } = useContext(ListContext);

  return (
    <li>
      <Link to={`/items/${item.id}`}>{item.name}</Link> {item.unitPrice}{" "}
      {item.quantity}
      <Button title="delete" onClick={() => deleteElement(item)} />
      <Button title="edit" onClick={onEdit} />
    </li>
  );
}
