import Previousimg from "../../assets/images/left_arrow_icon_dark.svg";
export default function Previous() {
  return (
    <div className="floatingbtn is-hidden-mobile is-hidden-tablet-only">
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
