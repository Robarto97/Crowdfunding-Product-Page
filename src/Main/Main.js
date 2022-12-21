import Riser from "./Riser";
import Progress from "./Progress";
import About from "./About";
import Modal from "./Modal";
import { useState } from "react";
import ModalComplete from "./ModalComplete";

const Main = () => {
  const [price, setPrice] = useState(89914);
  const [backers, setBackers] = useState(5007);
  const [isActive, setIsActive] = useState(false);
  const [showLayer, setShowLayer] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const formatedNum = new Intl.NumberFormat();

  const openModal = () => {
    setIsActive((prev) => (prev = !prev));
    setShowLayer(true);
  };
  const closeModal = () => {
    setIsActive(false);
    setShowLayer(false);
  };
  const handleComplete = () => {
    setIsComplete(false);
    setShowLayer(false);
    const checkedRadio = document.querySelector("input[type=radio]:checked");
    checkedRadio.checked = false;
    checkedRadio.closest(".option").querySelector(".bottom input").value = "";
  };
  return (
    <main>
      <Riser openModal={openModal} />
      <Progress formatedNum={formatedNum} price={price} backers={backers} />
      <About />
      <Modal
        isActive={isActive}
        closeModal={closeModal}
        setIsComplete={setIsComplete}
        setIsActive={setIsActive}
        setPrice={setPrice}
        setBackers={setBackers}
      />
      <ModalComplete handleComplete={handleComplete} isComplete={isComplete} />
      <div className={`modal-layer ${showLayer ? "show" : ""}`}></div>
    </main>
  );
};

export default Main;
