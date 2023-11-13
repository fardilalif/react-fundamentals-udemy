import SingleQuestion from "./SingleQuestion.jsx";

const Questions = (props) => {
  const { questions, activeId, toggleQuestion } = props;
  return (
    <section className="container">
      <h1>questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            question={question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
            key={question.id}
          />
        );
      })}
    </section>
  );
};
export default Questions;
