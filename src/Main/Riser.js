import logo from "../images/logo-mastercraft.svg";
const Riser = ({ openModal }) => {
  const handleBookmark = (e) => {
    e.target.closest('#bookmark').classList.toggle('active')
    console.log('done');
  };
  return (
    <section className="riser">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="btn-row">
        <button onClick={openModal} id="mainBtn">
          Back this project
        </button>
        <button onClick={handleBookmark} id="bookmark" aria-label="Bookmark">
          <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
              <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
            </g>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Riser;
