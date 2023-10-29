import topleftimg from "../../assets/images/mars.svg";
import Topleftmodal from "../Modal/Topleftmodal";
import { useState } from "react";

export default function Topleft() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div id="topleft" onClick={() => setModal(true)}>
        <img width="50px" src={topleftimg} alt="mars" />
      </div>
      {modal && <Topleftmodal handlemodal={setModal} />}
    </>
  );
}
