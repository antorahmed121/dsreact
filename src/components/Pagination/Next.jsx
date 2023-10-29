import nextimg from "../../assets/images/right_arrow_icon_dark.svg";
export default function Next({ handler, totalpage, pageno }) {
  return (
    <div
      className="floatingbtn is-hidden-mobile is-hidden-tablet-only"
      onClick={() =>
        handler((prev) => (prev >= totalpage - 1 ? totalpage - 1 : prev + 1))
      }
      style={
        pageno >= totalpage - 1
          ? { cursor: "not-allowed" }
          : { cursor: "pointer" }
      }
    >
      <>
        <img className="floatingimgright" src={nextimg} alt="NextArrow" />
      </>
    </div>
  );
}
