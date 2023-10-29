
import hrimg from "../../assets/images/hr.png";

export default function Topleftmodal({ handlemodal }) {
  return (
    <div id="topleftmodal" className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="column is-flex is-justify-content-center">
          <div
            className="column has-text-centered modal-dark"
            style={{ borderRadius: "30px" }}
          >
            <h1 className="is-size-5 pb-3" style={{ fontFamily: "DarkSchool" }}>
              Survive One Fin.
            </h1>
            <p style={{ fontFamily: "Amiri", fontSize: "18px" }}>
              Using a mars token allows you to survive one Fin. Proceed?
            </p>
            <p className="is-size-5 p-2" style={{ fontFamily: "DarkSchool" }}>
              Current mars tokens: 1
            </p>
            <div>
              <img src={hrimg} alt="hr img" />
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
