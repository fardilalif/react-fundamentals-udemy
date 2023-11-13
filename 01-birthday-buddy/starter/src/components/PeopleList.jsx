import Person from "./Person.jsx";

const PeopleList = (props) => {
  const { people } = props;
  return (
    <section>
      {people.map((person) => {
        return <Person person={person} key={person.id} />;
      })}
    </section>
  );
};
export default PeopleList;
