const Progress = () => {
  return (
    <section className="progress">
      <div>
        <span>$89,914</span>
        <p>of $100,000 backed</p>
      </div>
      <div>
        <span>5,007</span>
        <p>total backers</p>
      </div>
      <div>
        <span>56</span>
        <p>days left</p>
      </div>
      <div className="progress-bar"></div>
    </section>
  );
};

export default Progress;
