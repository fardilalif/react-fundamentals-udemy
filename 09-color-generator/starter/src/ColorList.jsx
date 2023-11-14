import { nanoid } from "nanoid";
import SingleColor from "./SingleColor.jsx";

const ColorList = ({ colorList }) => {
  return (
    <section className="colors">
      {colorList.map((color, index) => {
        return <SingleColor color={color} index={index} key={nanoid()} />;
      })}
    </section>
  );
};
export default ColorList;
