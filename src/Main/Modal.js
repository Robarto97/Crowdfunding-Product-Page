const Modal = ({
  isActive,
  closeModal,
  setIsActive,
  setIsComplete,
  setPrice,
  setBackers,
}) => {
  const handleContinue = (e) => {
    const inputValue = e.target.parentElement.querySelector("input").value;
    if (!isNaN(inputValue) && inputValue !== "") {
      console.log(inputValue);
      setPrice((curr) => curr + Number(inputValue));
      setBackers((curr) => curr + 1);
      setIsActive(false);
      setIsComplete(true);
    }
  };
  return (
    <section className={`modal ${isActive ? "show" : ""}`}>
      <div className="header">
        <h2>Back this project</h2>
        <div onClick={closeModal} className="close-btn"></div>
      </div>
      <p>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      <div className="option">
        <div className="header">
          <input type="radio" name="choice" id="radio1" />
          <label htmlFor="radio1">
            <h3>Pledge with no reward</h3>
          </label>
        </div>
        <p>
          Choose to support us without a reward if you simply believe in our
          project. As a backer, you will be signed up to receive product updates
          via email.
        </p>
      </div>
      <div className="option">
        <div className="header">
          <input type="radio" name="choice" id="radio2" />
          <label htmlFor="radio2">
            <h3>Bamboo Stand</h3>
            <span>Pledge $25 or more</span>
          </label>
        </div>

        <p>
          You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you’ll be added to a special
          Backer member list.
        </p>
        <p>
          <span>101</span> left
        </p>
        <div className="bottom">
          <span>Enter your pledge</span>
          <div className="btn-row">
            <div className="input-wrap">
              <input type="text" placeholder={25} />
            </div>
            <button onClick={handleContinue} className="continue">
              Continue
            </button>
          </div>
        </div>
      </div>
      <div className="option">
        <div className="header">
          <input type="radio" name="choice" id="radio3" />
          <label htmlFor="radio3">
            <h3>Black Edition Stand</h3>
            <span>Pledge $75 or more</span>
          </label>
        </div>
        <p>
          You get a Black Special Edition computer stand and a personal thank
          you. You’ll be added to our Backer member list. Shipping is included.
        </p>
        <p>
          <span>64</span> left
        </p>
        <div className="bottom">
          <span>Enter your pledge</span>
          <div className="btn-row">
            <div className="input-wrap">
              <input type="text" placeholder={75} />
            </div>
            <button onClick={handleContinue} className="continue">
              Continue
            </button>
          </div>
        </div>
      </div>
      <div className="option disabled">
        <div className="header">
          <input type="radio" name="choice" id="radio4" disabled />
          <label htmlFor="radio4">
            <h3>Mahogany Special Stand</h3>
            <span>Pledge $200 or more</span>
          </label>
        </div>
        <p>
          You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
          personal thank you. You’ll be added to our Backer member list.
          Shipping is included.
        </p>
        <p>
          <span>0</span> left
        </p>
      </div>
    </section>
  );
};

export default Modal;
