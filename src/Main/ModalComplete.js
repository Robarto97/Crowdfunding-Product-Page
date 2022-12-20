import check from "../images/icon-check.svg";
const ModalComplete = ({ handleComplete }) => {
  return (
    <section className="modal-complete">
      <div className="img-wrapper">
        <img src={check} alt="" />
      </div>
      <h2>Thanks for your support</h2>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button onClick={handleComplete}>Got it!</button>
    </section>
  );
};

export default ModalComplete;
