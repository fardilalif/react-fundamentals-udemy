import { nanoid } from "nanoid";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Form from "./Form.jsx";
import Items from "./Items.jsx";

const saveToLocal = (items) => {
  localStorage.setItem("items", JSON.stringify(items));
};
const defaultList = JSON.parse(localStorage.getItem("items") || []);

const App = () => {
  const [items, setItems] = useState(defaultList);

  const addItem = (itemName) => {
    const newItem = {
      id: nanoid(),
      name: itemName,
      completed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    saveToLocal(newItems);
    toast.success("item added");
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    saveToLocal(newItems);
    toast.success("item removed");
  };

  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = {
          ...item,
          completed: !item.completed,
        };
        return newItem;
      }
      return item;
    });

    setItems(newItems);
    saveToLocal(newItems);
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
