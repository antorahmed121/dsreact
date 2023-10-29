import Previousimg from "../../assets/images/left_arrow_icon_dark.svg";
export default function Previous({ handler, pageno }) {
  return (
    <div
      className="floatingbtn is-hidden-mobile is-hidden-tablet-only"
      onClick={() => handler((prev) => (prev < 1 ? 0 : prev - 1))}
      style={pageno < 1 ? { cursor: "not-allowed" } : { cursor: "pointer" }}
    >
      <>
        <img
          className="floatingimgleft"
          src={Previousimg}
          alt="PreviousArrow"
        />
      </>
    </div>
  );
}
