import { useState } from "react";
import PeopleList from "./components/PeopleList.jsx";
import data from "./data.js";

const App = () => {
  const [people, setPeople] = useState(data);
  const clearList = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{`${people.length} birthday today`}</h3>
        <PeopleList people={people} />
        <button type="button" className="btn btn-block" onClick={clearList}>
          clear list
        </button>
      </section>
    </main>
  );
};
export default App;
