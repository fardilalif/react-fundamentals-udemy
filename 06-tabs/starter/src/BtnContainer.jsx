const BtnContainer = (props) => {
  const { jobs, currentItem, setCurrentItem } = props;

  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            key={job.id}
            onClick={() => setCurrentItem(index)}
            className={currentItem === index ? "job-btn active-btn" : "job-btn"}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
