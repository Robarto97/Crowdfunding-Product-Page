import Riser from "./Riser";
import Progress from "./Progress";
import About from "./About";
import Modal from "./Modal";
import { useState } from "react";


const Main = () => {
  const [price, setPrice] = useState(89914);
  const [backers, totalBackers] = useState(5007)
  const formatedNum = new Intl.NumberFormat();
  return (
    <main>
      <Riser />
      <Progress formatedNum = {formatedNum} price={price} backers={backers}/>
      <About />
      <Modal />
    </main>
  );
};

export default Main;
