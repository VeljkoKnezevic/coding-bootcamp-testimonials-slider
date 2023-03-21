import Tanya from "../../images/image-tanya.jpg";
import John from "../../images/image-john.jpg";

export default function Image({ showFirst }) {
  return (
    <img
      className="image__photo"
      src={showFirst ? Tanya : John}
      alt={showFirst ? "Tanya Sinclair" : "John Tarkpor"}
    />
  );
}
