import { nanoid } from "nanoid";
import { useState } from "react";
import data from "./data.js";
const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleCount = (e) => {
    setCount(parseInt(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data.slice(0, parseInt(count)));
  };
  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="paragraph">paragraphs: </label>
        <input
          type="number"
          name="paragraph"
          id="paragraph"
          min="1"
          max="8"
          step="1"
          value={count}
          onChange={handleCount}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
