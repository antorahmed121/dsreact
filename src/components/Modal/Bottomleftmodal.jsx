import hrimg from "../../assets/images/hr.png";
export default function Bottomleftmodal({ handlemodal }) {
  return (
    <div id="bottomleftmodal" className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="column is-flex is-justify-content-center">
          <div
            className="column has-text-centered modal-dark"
            style={{ borderRadius: "30px" }}
          >
            <h1 className="is-size-5 pb-3" style={{ fontFamily: "DarkSchool" }}>
              Destruction and Failure.
            </h1>
            <p style={{ fontFamily: "Amiri", fontSize: "18px" }}>
              You may start over, but you will lose all progress. Proceed?
            </p>
            <p className="is-size-5 p-2" style={{ fontFamily: "DarkSchool" }}>
              Current Saturn tokens: 1
            </p>
            <div>
              <img src={hrimg} alt="Hr Img" />
            </div>
            <br />
            <div className="is-flex is-justify-content-space-between px-6 py-2">
              <div
                className="is-clickable"
                style={{ fontFamily: "DarkSchool" }}
                onClick={() => handlemodal(false)}
              >
                <b>Yes</b>
              </div>
              <div
                className="is-clickable"
                style={{ fontFamily: "DarkSchool" }}
              >
                <b>No</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
