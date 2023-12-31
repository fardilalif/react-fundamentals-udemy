import { useState } from "react";
import { toast } from "react-toastify";
import Values from "values.js";
const Form = ({ setColorList }) => {
  const [color, setColor] = useState("");

  const handleChange = (e) => {
    setColor(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const newColor = new Values(color);
      setColorList(newColor.all(10));
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input type="color" value={color} onChange={handleChange} />
        <input
          type="text"
          value={color}
          placeholder="#f15025"
          onChange={handleChange}
        />
        <button type="submit" className="btn" style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};
export default Form;
