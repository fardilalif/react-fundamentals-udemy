import { useState } from "react";
import Questions from "./Questions.jsx";
import data from "./data.js";

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
};
export default App;
