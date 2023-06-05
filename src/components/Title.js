const Title = ({ title, spanElement }) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{spanElement}</span>
      </h2>
    </div>
  );
};
export default Title;
