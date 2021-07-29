import React, { useContext, useEffect, useState } from "react";
import Button from "../lib/Button";
import ListItem from "./ListItem";
import AddEditItem from "./AddEditItem";
import { ListContext } from "../../contexts/ListContext";

export default function List() {
  const { list, totalPrice } = useContext(ListContext);
  const [editValue, setEditValue] = useState(false);

  return (
    <div>
      <AddEditItem item={editValue} />
      <ul>
        {list.map((item, index) => (
          <ListItem
            key={item.id}
            item={item}
            onEdit={() => setEditValue(item)}
          />
        ))}
      </ul>
      <p>Total price: {totalPrice}</p>
    </div>
  );
}
