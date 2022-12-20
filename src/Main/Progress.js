const Progress = ({ formatedNum, price, backers }) => {
  return (
    <section className="progress">
      <div>
        <span>${formatedNum.format(price)}</span>
        <p>of $100,000 backed</p>
      </div>
      <div>
        <span>{formatedNum.format(backers)}</span>
        <p>total backers</p>
      </div>
      <div>
        <span>56</span>
        <p>days left</p>
      </div>
      <div className="progress-bar">
        <div
          className="completed-bar"
          style={{ width: (price / 100000) * 100 + "%" }}
        ></div>
      </div>
    </section>
  );
};

export default Progress;
