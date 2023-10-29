import { useEffect, useState } from "react";
import bottomrightimg from "../../assets/images/lunar_Icon.svg";
import bottomrightimgdark from "../../assets/images/solar_Icon.svg";

export default function Bottomright() {
  const [darkmode, setDarkmode] = useState(false);
  useEffect(() => {
    if (darkmode) {
      document.querySelector("html")?.classList.add("dark-theme");
    } else {
      document.querySelector("html")?.classList.remove("dark-theme");
    }
  }, [darkmode]);
  return (
    <div
      id="bottomright"
      onClick={() => (darkmode ? setDarkmode(false) : setDarkmode(true))}
    >
      <img
        width="40px"  
        src={darkmode ? bottomrightimgdark : bottomrightimg}
        alt="lunar_Icon"
      />
    </div>
  );
}
