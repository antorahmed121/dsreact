import { useState } from "react";
import Pageno from "../Pagination/Pageno";
import Bottomleft from "../Cornerbtn/Bottomleft";
import Bottomright from "../Cornerbtn/Bottomright";
import Topleft from "../Cornerbtn/Topleft";
import Topright from "../Cornerbtn/Topright";
import Next from "../Pagination/Next";
import Previous from "../Pagination/Previous";

export default function Page() {
    const [conrnerbtn, setCornerbtn] = useState(false);

  return (
    <>
      <div className="columns pt-3 mb-0" onClick={() => setCornerbtn(true)}>
        <div className="column pagecontainer">
          <div className="box mx-auto is-flex is-flex-direction-column is-justify-content-space-between page">
            <div className="content">
              <h1>A Dark Beginning</h1>
              <p>
                The elderly man is seated at his ornate wooden desk stretched
                out in front of a bookshelf, busied with his writing. He
                faultlessly scribes onto a thick paper with a fountain pen. To
                his right, a wall sized window looks out over a large forested
                landscape. At the completion of his task, he signs the document.
              </p>
              <p>
                <i>My will is finished,</i> he thought, while he stared out over
                the large forest.
              </p>
              <p>
                Quickly, he opens a well-crafted wooden box and prepares a key
                chain with five keys, a small pocket watch, a vial and a pouch.
                Upon finalizing this task, he reverently folds his will neatly,
                placing it on top of the items.
              </p>
              <p>
                Before closing the box, his eyes fall on a small, thin, leather
                bound black book lying on his desk.
              </p>
              <p>Yes, this will also be useful to you.</p>
              <p>
                Picking up the small object, he places it on top of his will,
                sets all the items within. As if to protect them from the
                unknown, he carefully lays strips of silk cloth,
              </p>
            </div>
            {/* Page Number  */}
            <Pageno pageno={1} />
            {/* Corner Btn  */}           
            {conrnerbtn && <Bottomleft />}
            {conrnerbtn && <Bottomright />}
            {conrnerbtn && <Topleft />}
            {conrnerbtn && <Topright />}
          </div>
        </div>
      </div>
      {/* Pagination  */}
      <Next />
      <Previous />
    </>
  )
}
