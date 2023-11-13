const Title = (props) => {
  const { title } = props;
  return (
    <div className="title">
      <h1>{title || "default title"}</h1>
      <div className="title-underline"></div>
    </div>
  );
};
export default Title;
