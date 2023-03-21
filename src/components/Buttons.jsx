import Prev from "../../images/icon-prev.svg";
import Next from "../../images/icon-next.svg";

export default function Buttons({ showFirst, setShowFirst }) {
  return (
    <div className="image__buttons">
      <button
        className="image__button"
        onClick={() => setShowFirst(!showFirst)}
        type="button"
      >
        <img src={Prev} alt="Previous slide" />
      </button>
      <button
        className="image__button"
        onClick={() => setShowFirst(!showFirst)}
        type="button"
      >
        <img src={Next} alt="Next slide" />
      </button>
    </div>
  );
}
