import bottomleftimg from "../../assets/images/saturn.svg";
import Bottomleftmodal from "../Modal/Bottomleftmodal";
import { useState } from "react";

export default function Bottomleft() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div id="bottomleft" onClick={() => setModal(true)}>
        <img width="50px" src={bottomleftimg} alt="saturn" />
      </div>
      {modal && <Bottomleftmodal handlemodal={setModal} />}
    </>
  );
}
