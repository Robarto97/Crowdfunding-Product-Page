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
        <div onClick={closeModal} className="close-btn">
          <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
              fill="#000"
              fillRule="evenodd"
              opacity=".4"
            />
          </svg>
        </div>
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
              <input type="number" min={25} placeholder={25} />
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
              <input type="number" min={75} placeholder={75} />
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
