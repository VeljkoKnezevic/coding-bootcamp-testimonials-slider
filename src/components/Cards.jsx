import Buttons from "./Buttons";
import Image from "./Image";
import Quote from "./Quote";
import Curve from "../../images/pattern-curve.svg";

export default function Cards({ showFirst, setShowFirst }) {
  return (
    <div className="cards">
      <div className="image">
        <Image showFirst={showFirst} />
        <Buttons showFirst={showFirst} setShowFirst={setShowFirst} />
      </div>
      <Quote showFirst={showFirst} />
      <img className="curve" src={Curve} alt="curve" />
    </div>
  );
}
