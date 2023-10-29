import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Pageno from "../Pagination/Pageno";
import Bottomleft from "../Cornerbtn/Bottomleft";
import Bottomright from "../Cornerbtn/Bottomright";
import Topleft from "../Cornerbtn/Topleft";
import Topright from "../Cornerbtn/Topright";
import Next from "../Pagination/Next";
import Previous from "../Pagination/Previous";
import Content from "./Content";

import { page } from "../../data/data";

export default function Page() {
  const [conrnerbtn, setCornerbtn] = useState(false);
  const [pageno, setPageno] = useState(0);

  const pagecontent = page[pageno]?.content;
  const pagennumber = page[pageno]?.pageno;
  const totalpage = page?.length;

  const swipeHandler = useSwipeable({
    onSwipedLeft: () => {
      setPageno((prev) => (prev >= totalpage - 1 ? totalpage - 1 : prev + 1));
    },
    onSwipedRight: () => {
      setPageno((prev) => (prev < 1 ? 0 : prev - 1));
    },
  });

  return (
    <div {...swipeHandler}>
      <div className="columns pt-3 mb-0" onClick={() => setCornerbtn(true)}>
        <div className="column pagecontainer">
          <div className="box mx-auto is-flex is-flex-direction-column is-justify-content-space-between page">
            <Content content={pagecontent} />
            {/* Page Number  */}
            <Pageno pageno={pagennumber} />
            {/* Corner Btn  */}
            {conrnerbtn && <Bottomleft />}
            {conrnerbtn && <Bottomright />}
            {conrnerbtn && <Topleft />}
            {conrnerbtn && <Topright />}
          </div>
        </div>
      </div>

      {/* Pagination  */}
      <Next handler={setPageno} totalpage={totalpage} pageno={pageno} />
      <Previous handler={setPageno} pageno={pageno} />
    </div>
  );
}
