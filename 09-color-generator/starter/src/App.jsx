import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Values from "values.js";
import ColorList from "./ColorList.jsx";
import Form from "./Form.jsx";
const App = () => {
  const [colorList, setColorList] = useState(new Values("#f15025").all(10));
  return (
    <main>
      <Form setColorList={setColorList} />
      <ColorList colorList={colorList} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
