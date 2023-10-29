import { useState } from "react";
import toprightimg from "../../assets/images/mercury.svg";
import Toprightmodal from "../Modal/Toprightmodal";

export default function Topright() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div id="topright" onClick={() => setModal(true)}>
        <img width="50px" src={toprightimg} alt="mercury" />
      </div>
      {modal && <Toprightmodal handlemodal={setModal} />}
    </>
  );
}
