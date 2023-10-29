import nextimg from "../../assets/images/right_arrow_icon_dark.svg";
export default function Next() {
  return (
    <div className="floatingbtn is-hidden-mobile is-hidden-tablet-only">
      <>
        <img className="floatingimgright" src={nextimg} alt="NextArrow" />
      </>
    </div>
  );
}
