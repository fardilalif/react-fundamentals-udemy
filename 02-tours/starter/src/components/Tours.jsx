import Tour from "./Tour.jsx";

const Tours = (props) => {
  const { tours, removeTour } = props;

  return (
    <section>
      <div className="title">
        <h1>our tours</h1>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
};
export default Tours;
