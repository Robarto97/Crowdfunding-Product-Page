import logo from "../images/logo-mastercraft.svg";
const Riser = () => {
  return (
    <section className="riser">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>
        A beautifully handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="btn-row">
        <button id="mainBtn">Back this project</button>
        <button id="bookmark"></button>
      </div>
    </section>
  );
};

export default Riser;
