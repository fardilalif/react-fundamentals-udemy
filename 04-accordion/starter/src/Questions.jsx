import SingleQuestion from "./SingleQuestion.jsx";

const Questions = (props) => {
  const { questions } = props;
  return (
    <section className="container">
      <h1>questions</h1>
      {questions.map((question) => {
        return <SingleQuestion question={question} key={question.id} />;
      })}
    </section>
  );
};
export default Questions;
